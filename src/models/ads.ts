export interface Ads {
  enabled: boolean;
  preRoll: boolean;
  adsTag: string;
}

export class IMAAds {
  public static empty = (): IMAAds => {
    return new IMAAds(false, false, '');
  };
  public enabled: boolean;
  public preRoll: boolean;
  public adsTag: string;
  public constructor(enabled: boolean, preRoll: boolean, adsTag: string) {
    this.enabled = enabled;
    this.preRoll = preRoll;
    this.adsTag = adsTag;
  }
}
