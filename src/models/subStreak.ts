import subStreakImgOne from '../assets/icon/sub-streak-icon1.svg';
import subStreakImgTwo from '../assets/icon/sub-streak-icon2.svg';
import subStreakImgThree from '../assets/icon/sub-streak-icon3.svg';
export class SubStreak {
  public label: string;
  public img: NodeRequire;
  public month: number;
  public tips: string;
  public constructor(
    label: string,
    img: NodeRequire,
    month: number,
    tips: string
  ) {
    this.label = label;
    this.img = img;
    this.tips = tips;
    this.month = month;
  }
}

export const SUB_STREAK_ONE = new SubStreak(
  '1 Month',
  subStreakImgOne,
  1,
  'Sub Badge'
);

export const SUB_STREAK_TWO = new SubStreak(
  '2 Month',
  subStreakImgTwo,
  2,
  'Celebration Message'
);

export const SUB_STREAK_THREE = new SubStreak(
  '3 Month',
  subStreakImgThree,
  3,
  'Colorful Text'
);

export const SUB_STREAKS = [SUB_STREAK_ONE, SUB_STREAK_TWO, SUB_STREAK_THREE];
