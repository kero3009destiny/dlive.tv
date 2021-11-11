import gift1 from '../assets/icon/sub-gift-img1.svg';
import gift5 from '../assets/icon/sub-gift-img5.svg';
import gift10 from '../assets/icon/sub-gift-img10.svg';
import gift20 from '../assets/icon/sub-gift-img20.svg';
import gift50 from '../assets/icon/sub-gift-img50.svg';
export class GiftSubscriptionEntry {
  public label: string;
  public img: NodeRequire;
  public count: number;
  public cost: number;
  public usd: number;
  public constructor(
    label: string,
    img: NodeRequire,
    count: number,
    cost: number,
    usd: number
  ) {
    this.label = label;
    this.img = img;
    this.count = count;
    this.cost = cost;
    this.usd = usd;
  }
}
export const GIFT_USER_ONE_SUB = new GiftSubscriptionEntry(
  'Gift Sub',
  gift1,
  1,
  298,
  4.09
);

export const ONE_GIFT_SUB = new GiftSubscriptionEntry(
  'Gift 1 Sub',
  gift1,
  1,
  298,
  4.09
);

export const FIVE_GIFT_SUB = new GiftSubscriptionEntry(
  'Gift 5 Subs',
  gift5,
  5,
  1490,
  4.09 * 5
);

export const TEN_GIFT_SUB = new GiftSubscriptionEntry(
  'Gift 10 Subs',
  gift10,
  10,
  2980,
  4.09 * 10
);

export const TWENTY_GIFT_SUB = new GiftSubscriptionEntry(
  'Gift 20 Subs',
  gift20,
  20,
  5960,
  4.09 * 20
);

export const FIFTY_GIFT_SUB = new GiftSubscriptionEntry(
  'Gift 50 Subs',
  gift50,
  50,
  14900,
  4.09 * 50
);

export const GIFT_SUB = [
  ONE_GIFT_SUB,
  FIVE_GIFT_SUB,
  TEN_GIFT_SUB,
  TWENTY_GIFT_SUB,
  FIFTY_GIFT_SUB
];
