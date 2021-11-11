/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-explicit-any */

import getIp from '@/utils/ipDEPRECATED';
import { ClientInfo, getUA } from '@/utils/uaparser';
import Hls from 'hls.js';
import { v4 as uuid } from 'uuid';
import { TrackReporter } from './trackReporter';
import {
  FragmentEntity,
  StreamInfo,
  AppInfo,
  Geoip,
  MasterPlaylistEntity,
  LevelEntity,
  ErrorEntity,
  LevelSwitchesEntity,
  Report
} from './models';
import { getGlobalHls } from '@/utils/globalHls/globalHls';

function guestId(): string {
  if (!localStorage.getItem('dlive_tracker_guest_id')) {
    localStorage.setItem('dlive_tracker_guest_id', 'guest_' + uuid());
  }
  return localStorage.getItem('dlive_tracker_guest_id') as string;
}

function getLevelName(l: any, failover: string): string {
  if (l.name) {
    return l.name;
  }
  if (l.attrs && l.attrs.VIDEO === 'src') {
    return 'SRC';
  }
  if (l.height) {
    return l.height.toString() + 'P';
  }
  return failover;
}

function calcAvgBw(frags: FragmentEntity[]): number {
  const sum = frags.reduce((a, f) => {
    return a + f.bw_bit;
  }, 0);
  return sum / frags.length;
}

function calcReqBw(frags: FragmentEntity[]): number {
  const sumBytes = frags.reduce((a, f) => {
    return a + f.total_bytes;
  }, 0);
  const sumDuration = frags.reduce((a, f) => {
    return a + f.duration;
  }, 0);
  return (sumBytes * 8) / sumDuration;
}

function calcAvgTsLoad(frags: FragmentEntity[]): number {
  const sum = frags.reduce((a, f) => {
    return a + f.load_time;
  }, 0);
  return sum / frags.length;
}

function calcAvgTtfb(frags: FragmentEntity[]): number {
  const sum = frags.reduce((a, f) => {
    return a + f.ttfb;
  }, 0);
  return sum / frags.length;
}

function extractHostname(url: string): string {
  let hostname;
  // find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  // find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}

// TODO(yumin): need to hanlde offline event.
// handle onbeforeunload.
// XXX(yumin): should not depend on hlsSafeOn...but...:).
export class HlsTracker {
  public hlsSafeOn: ((e: any, cb: any) => void) | null;
  public player: any | undefined = undefined;
  public reporter: TrackReporter;

  // session
  public sessionID: string = uuid();
  public sessionSeq: number = 0;
  public watchStart: number = +Date.now();
  public utcStart: number = +Date.now();
  public utcEnd: number = -1;
  public cdn: string = '';
  public host: string;
  public username: string;
  public streamInfo: StreamInfo;
  public isEnd = false;

  // hls levels
  public hlsjsLevels: Hls.Level[] = [];

  // client info
  public app: AppInfo;

  // geoIp
  public geoIp!: Geoip;

  // fetcher
  public masterPlaylist!: MasterPlaylistEntity;
  public levels: LevelEntity[] = [];
  public fragments: FragmentEntity[] = [];

  // play attributes.
  public playStartLoadAt: number = -1;
  public playStartUpTime: number = -1;
  public playStarted = false;
  public playStalls: Array<[number, number]> = [];
  public playLevelSwitch: LevelSwitchesEntity[] = [];

  // error
  public errors: ErrorEntity[] = [];

  // safari mobile interval
  public safariMobileInterval: any = null;

  // exp
  public expLowLatencyHackEnabled: boolean = false;

  // pass in a RAII safe hls event listener.
  public constructor(
    hlsSafeOn: (e: any, cb: any) => void,
    info: StreamInfo,
    username: string | null
  ) {
    // XXX(yumin): would be an interesting interview question,
    // why passing this.snapshot as parameter does not
    // work the same as this closure?
    this.reporter = new TrackReporter(() => {
      return this.snapshot();
    });

    // init exp
    const globalHls = getGlobalHls();
    if (globalHls !== null) {
      this.expLowLatencyHackEnabled = globalHls.expLowLatencyHack;
    }

    // init app info.
    const client = getUA() as ClientInfo;
    this.app = {
      browser: client.browser.name,
      version: client.browser.version,
      os: client.os.name
    };

    // if not using HLS...
    if (!Hls.isSupported()) {
      this.cdn = 'N/A';
      this.hlsSafeOn = null;
    } else {
      this.hlsSafeOn = hlsSafeOn;
    }

    // init ip info.
    getIp()
      .then(ip => {
        this.geoIp = {
          ip: ip.ip,
          asn: ip.asn,
          org: ip.org,
          location: ip.latitude + ',' + ip.longitude,
          country: ip.country,
          region: ip.region_code,
          city: ip.city,
          postal: ip.postal
        };
      })
      .catch(() => {
        this.geoIp = {
          ip: 'N/A',
          asn: 'N/A',
          org: 'N/A',
          location: 'N/A',
          country: 'N/A',
          region: 'N/A',
          city: 'N/A',
          postal: 'N/A'
        };
      });
    this.streamInfo = info;
    if (username) {
      this.username = username;
    } else {
      this.username = guestId();
    }
    this.host = window.location.hostname;
    this.bind();
  }

  public destroy(): void {
    this.isEnd = true;
    if (this.safariMobileInterval) {
      clearInterval(this.safariMobileInterval);
    }
    this.update();
  }

  // will make a report by taking a snapshot of current state,
  // increase seq number, clear all arrays.
  public snapshot(): Report {
    this.utcEnd = +Date.now();
    // if stall spans over two report, break it into two
    // stalls. This will increase the number of stalls but
    // the stall time is more accurate.
    let wasStall = false;
    if (this.playStalls.length > 0) {
      const last = this.playStalls[this.playStalls.length - 1];
      // XXX(yumin): a minor type inference bug, last[1]'s type is
      // shrunk to -1, although it should stay as number. last: [number, number];
      if (last[1] === -1) {
        (last[1] as number) = this.utcEnd;
        wasStall = true;
      }
    }
    let edgeLatency = this.player
      ? this.player.video.duration - this.player.video.currentTime
      : -1;
    if (edgeLatency === Infinity) {
      edgeLatency = -1;
    }
    const report: Report = {
      session_id: this.sessionID,
      session_seq: this.sessionSeq,
      watch_start: this.watchStart,
      utc_start: this.utcStart,
      utc_end: this.utcEnd,
      is_end: this.isEnd,
      cdn: this.cdn,
      host: this.host,
      username: this.username,
      statistics: {
        avg_bw: calcAvgBw(this.fragments),
        req_bw: calcReqBw(this.fragments),
        avg_ts_loadtime: calcAvgTsLoad(this.fragments),
        avg_ts_ttfb: calcAvgTtfb(this.fragments)
      },
      stream: this.streamInfo,
      geoip: this.geoIp,
      app: this.app,
      fetcher: {
        master: this.masterPlaylist,
        levels: this.levels,
        fragments: this.fragments
      },
      play: {
        startup_time: this.playStartUpTime,
        stalls: this.playStalls,
        edge_latency: edgeLatency,
        level_switches: this.playLevelSwitch
      },
      errors: this.errors,
      exp: {
        low_latency_hack: this.expLowLatencyHackEnabled
      }
    };
    // start a new session piece.
    this.utcStart = this.utcEnd;
    this.utcEnd = -1;
    this.sessionSeq += 1;
    this.levels = [];
    this.fragments = [];
    this.playStalls = [];
    this.playLevelSwitch = [];
    if (wasStall) {
      this.playStalls.push([this.utcStart, -1]);
    }
    this.errors = [];
    return report;
  }

  public bindPlayer(player: any): void {
    this.player = player;
    this.ListenPlayer();
  }

  public bind(): void {
    // if ((process as any).server) {
    //   return;
    // }
    this.ListenMasterPlaylist();
    this.ListenLevelLoaded();
    this.ListenFragmentLoaded();
    this.ListenLevelSwitch();
    this.ListenErrors();
    if (!this.hlsSafeOn) {
      if (this.safariMobileInterval) {
        clearInterval(this.safariMobileInterval);
      }
      this.safariMobileInterval = setInterval(() => {
        this.update();
      }, 5000);
    }
  }

  public ListenPlayer(): void {
    const pushLoadEvent = (): void => {
      // XXX(Yumin): notice that sometimes video tag fires two wait events
      // continuously, so this case is handled.
      if (this.playStalls.length === 0) {
        this.playStalls.push([+Date.now(), -1]);
      } else {
        const last = this.playStalls[this.playStalls.length - 1];
        // add new event only when the last one is resolved.
        if (last[1] !== -1) {
          this.playStalls.push([+Date.now(), -1]);
        }
      }
      this.update();
    };
    const pushCanplayEvent = (): void => {
      let last: [number, number];
      if (this.playStalls.length === 0) {
        last = [-1, -1]; // error case.
      } else {
        last = this.playStalls[this.playStalls.length - 1];
      }
      last[1] = +Date.now();
      this.playStalls[this.playStalls.length - 1] = last;
      this.update();
    };

    this.player.on('loadstart', () => {
      this.playStartLoadAt = +Date.now();
    });
    this.player.on('waiting', () => {
      if (this.playStarted) {
        pushLoadEvent();
      }
    });
    this.player.on('canplay', () => {
      if (!this.playStarted) {
        this.playStarted = true;
        this.playStartUpTime = +Date.now() - this.playStartLoadAt;
      } else {
        pushCanplayEvent();
      }
    });
  }

  public ListenMasterPlaylist(): void {
    if (!this.hlsSafeOn) {
      return;
    }
    this.hlsSafeOn(Hls.Events.MANIFEST_LOADED, (event: any, data: any) => {
      this.masterPlaylist = {
        utc: +Date.now(),
        load_time: data.stats.tload - data.stats.trequest,
        n_levels: data.levels.length
      };
      this.hlsjsLevels = data.levels;
      this.update();
    });
  }

  public ListenLevelLoaded(): void {
    if (!this.hlsSafeOn) {
      return;
    }
    this.hlsSafeOn(Hls.Events.LEVEL_LOADED, (event: any, data: any) => {
      const details: Hls.LevelDetails = data.details;
      if (this.hlsjsLevels[data.level] === undefined) {
        return;
      }
      if (this.hlsjsLevels[data.level].url.length > 0) {
        this.cdn = extractHostname(this.hlsjsLevels[data.level].url[0]);
      }
      this.levels.push({
        id: getLevelName(this.hlsjsLevels[data.level], 'unknown'),
        utc: +Date.now(),
        load_time: data.stats.tload - data.stats.trequest,
        start_seq: details.startSN,
        end_seq: details.endSN,
        targetduration: details.targetduration,
        totalduration: details.totalduration
      });
      this.update();
    });
  }

  public ListenLevelSwitch(): void {
    if (!this.hlsSafeOn) {
      return;
    }
    this.hlsSafeOn(Hls.Events.LEVEL_SWITCHED, (event: any, data: any) => {
      this.playLevelSwitch.push({
        new: getLevelName(this.hlsjsLevels[data.level], 'unknown'),
        is_abr: false // TODO(yumin): not correct.
      });
    });
  }

  public ListenFragmentLoaded(): void {
    if (!this.hlsSafeOn) {
      return;
    }
    this.hlsSafeOn(Hls.Events.FRAG_LOADED, (event: any, data: any) => {
      const frag: Hls.Fragment = data.frag;
      const stats: Hls.Stats = data.stats;
      const loadTime = stats.tload - stats.trequest;
      const total = (stats as any).total;
      this.fragments.push({
        url: frag.url,
        utc: +Date.now(),
        ttfb: stats.tfirst - stats.trequest,
        load_time: loadTime,
        total_bytes: total,
        bw_bit: (total * 8) / (loadTime / 1000),
        duration: frag.duration
      });
      this.update();
    });
  }

  public ListenErrors(): void {
    if (!this.hlsSafeOn) {
      return;
    }
    this.hlsSafeOn(Hls.Events.ERROR, (event: any, data: any) => {
      // reason might be
      // 1. parsing error string.
      // 2. response object.
      let reason = '';
      const url = data.url ? data.url : '';
      switch (data.details) {
        case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:
          if (data.response) {
            reason = JSON.stringify(data.response);
          }
          break;
        case Hls.ErrorDetails.MANIFEST_PARSING_ERROR:
          reason = data.reason;
          break;
        case Hls.ErrorDetails.LEVEL_LOAD_ERROR:
          if (data.response) {
            reason = JSON.stringify(data.response);
          }
          break;
        case Hls.ErrorDetails.FRAG_LOAD_ERROR:
          if (data.response) {
            reason = JSON.stringify(data.response);
          }
          break;
      }

      this.errors.push({
        utc: +Date.now(),
        name: data.details,
        type: data.type,
        fatal: data.fatal,
        reason,
        url
      });
      this.update();
    });
  }

  public update(): void {
    this.reporter.update();
  }
}
