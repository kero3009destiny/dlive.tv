/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import Hls from 'hls.js';
import { logger } from './logger';
import { HlsBWObserver } from './bwObserver';

const MAX_RETRY_ALLOWED = 2;
let globalHls: GlobalHls | null = null;

const HLS_CONFIG = {
  startFragPrefetch: false,
  // liveSyncDuration: 4.5,
  // liveMaxLatencyDuration: 15,
  liveSyncDurationCount: 2.9,
  liveMaxLatencyDurationCount: 10,
  // fLoader: FloaderWithCache,
  fragLoadingTimeOut: 120000
};

export interface LinoHlsConfig {
  startAt?: number;
  lowBufferSize?: boolean;
}

export class GlobalHls {
  public src: string | null = null; // current source
  public expLowLatencyHack: boolean = false;

  private hls: Hls | null = null;

  // The current hls context.
  private levels: Promise<Hls.Level[]> | null = null;
  private levelsCb: any | null = null;
  private levelsReject: any | null = null;
  private needClearLevelListener: boolean = false;
  private nMaxRetries: number = 0; // max try to reload src.
  private prevRenditions: number[] = [];
  private bwObserver: HlsBWObserver;

  public constructor() {
    this.bwObserver = new HlsBWObserver(
      () => {
        if (this.hls === null) {
          return NaN;
        }
        // @ts-ignore
        const bwEstimator = this.hls.abrController._bwEstimator;
        return bwEstimator ? bwEstimator.getEstimate() : NaN;
      },
      10,
      2000
    );
    this.bwObserver.loadHistory();
    this.bwObserver.start();
  }

  // use new level.
  public pushRendition(levelId: number): void {
    if (this.hls === null) {
      return;
    }
    let prev = this.hls.currentLevel;
    if (this.hls.autoLevelEnabled) {
      prev = -1;
    }
    this.prevRenditions.push(prev);
    this.hls.nextLevel = levelId;
  }

  public popRendition(): void {
    if (this.hls === null || this.prevRenditions.length === 0) {
      return;
    }
    const prev = this.prevRenditions.pop();
    if (prev !== undefined) {
      this.hls.nextLevel = prev;
    }
  }

  // abandon previous source.
  // DO NOT CALL if you are trying to recover or reuse ctx.
  public refreshCtx(): void {
    logger.info('[refreshCtx] refresh context');
    this.src = null;
    this.nMaxRetries = 0;
    this.needClearLevelListener = true;
    // creating new context for hls.
    this.levels = new Promise((resolve, reject) => {
      this.levelsCb = (_: any, data: any) => {
        logger.info('[this._levelsCb] levels resovled', data);
        this.needClearLevelListener = false;
        resolve(data.levels as Hls.Level[]);
        // at least 3 renditions, 160, 360, 480...
        if (data.levels.length >= 3) {
          let hasSmallerThan360p = false;
          for (const [i, level] of data.levels.entries()) {
            if (level.height < 360) {
              hasSmallerThan360p = true;
            }
            if (hasSmallerThan360p && level.height >= 360) {
              this.hls!.startLevel = i;
              break;
            }
          }
        }
      };
      this.levelsReject = reject;
    });
  }

  // rejext context, if not resolved.
  // DO NOT CALL if you are trying to recover or reuse ctx.
  public rejectCtx(reason: string): void {
    if (this.src && this.needClearLevelListener) {
      logger.info('[rejectCtx] rejecting ctx due to', reason);
      this.hls!.off(Hls.Events.MANIFEST_PARSED, this.levelsCb);
      this.levelsReject(reason);
      this.needClearLevelListener = false;
    }
  }

  public getErrorHandler(): (event: any, dt: any) => void {
    return (event: any, data: any) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            logger.info(
              'fatal network error encountered, try to recover',
              data.details ? data.details : ''
            );
            if (this.nMaxRetries >= MAX_RETRY_ALLOWED) {
              logger.info(
                'Failed to recover from FATAL ERROR, please refresh',
                data.details
              );
              this.detachMedia();
              break;
            } else {
              this.recover();
              this.nMaxRetries += 1;
            }
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            logger.info(
              'fatal media error encountered, try to recover',
              data.details ? data.details : ''
            );
            this.hls!.recoverMediaError();
            break;
          default:
            this.rejectCtx(
              'failed to recover, please report this to us: ' + data.details
            );
            break;
        }
      } else {
        // XXX(yumin): leave it here to show that recoverMediaError just do not work.
        // if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
        //   if (data.details === Hls.ErrorDetails.BUFFER_FULL_ERROR
        //     || data.details === Hls.ErrorDetails.BUFFER_APPENDING_ERROR) {
        //       logger.info('trying to recover from buffer appending error');
        //       this.hls!.recoverMediaError();
        //   }
        // }
        logger.info('HLS non-fatal error', data);
      }
    };
  }

  // refresh everything.
  public refresh(hlsConfig: Partial<Hls.Config> = HLS_CONFIG): void {
    this.rejectCtx('hlsjs reloaded, reject level promise');
    if (this.hls) {
      logger.info('destroy previous hls');
      this.hls.destroy();
    }
    // if bandwidth P75 > 1.5 MB/s, enable
    // XXX(yumin): the bwObserver's bandwidth estimation is extremely
    // conservative, it's P75 of min(slowEMA, fastEMA).
    const bwP75 = this.bwObserver.bandwidth(75);
    if (bwP75 > 0) {
      logger.info('estimated bw default', bwP75);
      hlsConfig.abrEwmaDefaultEstimate = bwP75;
    }
    if (bwP75 > 1.5 * 1024 * 1024 * 8) {
      logger.info('enable lower latency mode');
      hlsConfig.liveSyncDurationCount = 1.9;
      this.expLowLatencyHack = true;
    } else {
      this.expLowLatencyHack = false;
    }
    this.hls = new Hls(hlsConfig);
    this.src = null;
    this.hls.on(Hls.Events.ERROR, this.getErrorHandler());
    this.refreshCtx();
  }

  public getHls(): Hls | null {
    return this.hls;
  }

  public getLevels(): Promise<Hls.Level[]> | null {
    return this.levels;
  }

  // lazy source reloading. will detachMedia no matter what.
  // @p lowBufferSize: HlsJS bug, see
  // https://github.com/video-dev/hls.js/issues/1084
  // https://github.com/video-dev/hls.js/issues/876
  // When you play HLS with a large ts file, must set lowBufferSize to true.
  public reloadSource(src: string, optionalConf: LinoHlsConfig): void {
    this.detachMedia();
    // XXX(yumin): found wired behaviour in hlsjs again.. reuse disabled.
    // if (src && src === this._src) {
    //   logger.info('[reloadSource] reuse hls object for', src);
    //   return;
    // }
    logger.info('prev', this.src, 'new', src);
    logger.info('[reloadSource] loading: ', src);
    // reject previous context.
    this.rejectCtx('loading new src: ' + src);

    const config = JSON.parse(JSON.stringify(HLS_CONFIG));
    if (optionalConf.lowBufferSize) {
      config.maxMaxBufferLength = 20;
      config.maxBufferLength = 20;
      logger.info('low buffer size mode');
    }
    if (optionalConf.startAt !== -1) {
      config.startPosition = optionalConf.startAt;
    }
    this.refresh(config);
    this.src = src;
    this.hls!.once(Hls.Events.MANIFEST_PARSED, this.levelsCb);
    this.hls!.loadSource(src);
  }

  public detachMedia(): void {
    if (this.hls && this.hls.media) {
      logger.info('[detachMedia]', this.hls.media);
      this.hls.currentLevel = -1; // reset level to auto
      this.hls.detachMedia();
      this.hls.stopLoad();
    }
  }

  public recover(): void {
    if (this.hls && this.src) {
      // XXX(yumin): These does not work, will try to
      // do something else later.
      // let media = this._hls!.media;
      // this.detachMedia();
      // this._hls!.loadSource(this._src);
      // this._hls!.attachMedia(media);
      // XXX(yumin): the safe way.
      // this._hls.startLoad();
    }
  }
}

export function getGlobalHls(): GlobalHls | null {
  if (globalHls === null) {
    globalHls = new GlobalHls();
  }
  return globalHls;
}
