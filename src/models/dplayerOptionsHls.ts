import { DPlayerOptionsHlsP } from './dplayerOptionsHlsP';
import { DPlayerOptionsMp4 } from './dplayerOptionsMp4';
import Vue from 'vue';

// HLS.js for non-native player
interface Video {
  type: 'hls';
  url: string;
}
export class DPlayerOptionsHlsJs {
  public video: Video;
  public live: boolean;
  public showSettingBtn: boolean;
  public danmaku: boolean;
  public simpleDanmaku: boolean;
  public nativeMute: boolean;
  public autoplay: boolean;
  public showProgressBar: boolean;
  public clip: boolean;
  public theater: boolean;
  public constructor(
    nativeMute = true,
    autoplay = true,
    isLive: boolean,
    danmakuEnabled: boolean,
    url: string,
    showProgressBar: boolean = true,
    clip: boolean = false,
    theater: boolean = false
  ) {
    this.nativeMute = nativeMute;
    this.autoplay = autoplay;
    this.live = isLive;
    this.showSettingBtn = showProgressBar;
    this.danmaku = danmakuEnabled;
    this.simpleDanmaku = danmakuEnabled;
    this.showProgressBar = showProgressBar;
    this.video = {
      type: 'hls',
      url
    };
    this.clip = clip;
    this.theater = theater;
  }
}

interface DPlayerOptionsContainer {
  container: Vue | Element | Vue[] | Element[];
  clip: boolean;
  theater: boolean;
}

export type DPlayerOptionsHls = DPlayerOptionsHlsJs | DPlayerOptionsHlsP;
export type DPlayerOptions = (DPlayerOptionsHls | DPlayerOptionsMp4) &
  DPlayerOptionsContainer;
