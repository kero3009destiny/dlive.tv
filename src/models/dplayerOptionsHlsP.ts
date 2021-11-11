import { VideoQuality } from './video';
import { Ads } from './ads';
import Hls from 'hls.js';

// For native hls supported player
interface Video {
  type: 'hls-p';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hlsType: Hls | any; // TODO(@ryan): Temp solution with any
  hls: Hls | null;
  quality: VideoQuality[];
  defaultQuality: number;
}
export class DPlayerOptionsHlsP {
  public static empty = (): DPlayerOptionsHlsP => {
    return new DPlayerOptionsHlsP(undefined, false, false, Hls, null, [], 0);
  };
  public live: boolean;
  public showSettingBtn: boolean;
  public danmaku: boolean;
  public simpleDanmaku: boolean;
  public video: Video;
  public showProgressBar: boolean;
  public autoplay: boolean;
  public clip: boolean;
  public theater: boolean;
  public ads: Ads | null;
  public theme: string;
  public constructor(
    autoplay = true,
    isLive: boolean,
    danmakuEnabled: boolean,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hlsType: Hls | any,
    hls: Hls | null,
    qualities: VideoQuality[],
    defaultQuality: number,
    showProgressBar: boolean = true,
    clip: boolean = false,
    theater: boolean = false,
    ads: Ads | null = null,
    theme: string = '#ffd300'
  ) {
    this.theme = theme;
    this.autoplay = autoplay;
    this.live = isLive;
    this.showSettingBtn = showProgressBar;
    this.danmaku = danmakuEnabled;
    this.simpleDanmaku = danmakuEnabled;
    this.showProgressBar = showProgressBar;
    this.video = {
      type: 'hls-p',
      hlsType,
      hls,
      quality: qualities,
      defaultQuality
    };
    this.clip = clip;
    this.theater = theater;
    this.ads = ads;
  }
}
