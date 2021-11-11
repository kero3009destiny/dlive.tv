export type GiftPaymentMethod =
  | 'paypal'
  | 'coinbase'
  | 'xsolla'
  | 'paybros'
  | 'amazonPay'
  | 'rebilly'
  | 'skrill'
  | 'lemon'
  | 'stripe';

export class GiftMethodI18n {
  public method: GiftPaymentMethod;
  public i18n: string;
  public constructor(method: GiftPaymentMethod, i18n: string) {
    this.method = method;
    this.i18n = i18n;
  }
}

export const giftLemonI18n = new GiftMethodI18n('lemon', 'GiftSub.Lemon');
export const giftSkrillI18n = new GiftMethodI18n('skrill', 'GiftSub.Skrill');
export const giftAmazonPayI18n = new GiftMethodI18n(
  'amazonPay',
  'GiftSub.AmazonPay'
);
export const giftStripeI18n = new GiftMethodI18n('stripe', 'GiftSub.Stripe');
