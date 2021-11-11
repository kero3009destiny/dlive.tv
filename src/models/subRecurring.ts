import { RecurringSubPaymentType } from '@/graphql/types';

export class SubscriptionRecurring {
  public lab: string;
  public usd: number;
  public cost: number;
  public labelWithUsd: string;
  public labelWithLemon: string;
  public cashBackLemonNum: number;
  public subOption: RecurringSubPaymentType;
  public month: number;
  public constructor(
    lab: string,
    usd: number,
    cost: number,
    labelWithUsd: string,
    labelWithLemon: string,
    cashBackLemonNum: number,
    subOption: RecurringSubPaymentType,
    month: number
  ) {
    this.lab = lab;
    this.usd = usd;
    this.cost = cost;
    this.labelWithUsd = labelWithUsd;
    this.labelWithLemon = labelWithLemon;
    this.cashBackLemonNum = cashBackLemonNum;
    this.subOption = subOption;
    this.month = month;
  }
}
export const MONTHLY_RECURRING = new SubscriptionRecurring(
  'Monthly',
  4.09,
  298,
  '$4.09 | Monthly',
  '298 | Monthly',
  20,
  RecurringSubPaymentType.Monthly,
  1
);
export const QUARTERLY_RECURRING = new SubscriptionRecurring(
  'Quarterly',
  11.69,
  289 * 3,
  '$11.69 | Quarterly',
  '289 | Quarterly',
  50,
  RecurringSubPaymentType.Quarterly,
  3
);
export const HALFYEARLY_RECURRING = new SubscriptionRecurring(
  'Bi-Quraterly',
  22.79,
  283 * 6,
  '$22.79 | Bi-Quraterly',
  '283 | Bi-Quraterly',
  100,
  RecurringSubPaymentType.HalfYearly,
  6
);
export const YEARLY_RECURRING = new SubscriptionRecurring(
  'Yearly',
  44.89,
  274 * 12,
  '$44.89 | Yearly',
  '274 | Yearly',
  200,
  RecurringSubPaymentType.Yearly,
  12
);

export const SUB_RECURRING_SETTINGS = [
  MONTHLY_RECURRING,
  QUARTERLY_RECURRING,
  HALFYEARLY_RECURRING,
  YEARLY_RECURRING
];
