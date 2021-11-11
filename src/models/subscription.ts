import { Subscription } from '@/plugins/types';
export class SubscriptionEntry {
  public lab: string;
  public cost: number;
  public month: number;
  public cashBackPercentage: number;
  public subOption: Subscription;
  public constructor(
    lab: string,
    cost: number,
    month: number,
    cashBackPercentage: number,
    subOption: Subscription
  ) {
    this.lab = lab;
    this.cost = cost;
    this.month = month;
    this.cashBackPercentage = cashBackPercentage;
    this.subOption = subOption;
  }
}
export const ONE_MONTH = new SubscriptionEntry('1 Month', 298, 1, 0, '1m');

export const THREE_MONTH = new SubscriptionEntry('3 Month', 894, 3, 3, '3m');

export const SIX_MONTH = new SubscriptionEntry('6 Month', 1788, 6, 5, '6m');

export const TWELVE_MONTH = new SubscriptionEntry(
  '12 Month',
  3576,
  12,
  8,
  '12m'
);

export const MONTHLY = new SubscriptionEntry('Monthly', 298, 0, 0, 'monthly');

export const SUB_SETTINGS = [
  ONE_MONTH,
  THREE_MONTH,
  SIX_MONTH,
  TWELVE_MONTH,
  MONTHLY
];

export const CANCEL_REASON = [
  'Not interest in the Live content or the Creator anymore',
  'I only wanted to subscribe for one month',
  'I prefer to manually renew my Subscriptions',
  `The streamer's schedule changed or they're not streaming as much anymore`,
  `My schedule changed and I can't keep up with the stream anymore`,
  'I need to change my payment method',
  'Financial reasons',
  'Others'
];
