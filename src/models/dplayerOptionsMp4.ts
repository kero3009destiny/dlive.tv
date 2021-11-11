import { VideoQuality } from './video';

interface Video {
  type: 'auto';
  quality: VideoQuality[];
  defaultQuality: number;
  url: string;
}
export class DPlayerOptionsMp4 {
  public static empty = (): DPlayerOptionsMp4 => {
    return new DPlayerOptionsMp4(undefined, [], 0, '');
  };
  public video: Video;
  public nativeMute: boolean = false;
  public autoplay: boolean = true;
  public constructor(
    autoplay: boolean = true,
    qualities: VideoQuality[],
    defaultQuality: number,
    url: string,
    nativeMute: boolean = false
  ) {
    this.video = {
      type: 'auto',
      quality: qualities,
      defaultQuality,
      url
    };
    this.autoplay = autoplay;
    this.nativeMute = nativeMute;
  }
}
