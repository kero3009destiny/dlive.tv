import {
  CoinbaseItemType,
  XsollaItemType,
  PaybrosPaymentType,
  AmazonPaymentType,
  RebillyPaymentType,
  EpinPaymentType,
  StripePaymentType,
  SkrillPaymentType
} from '@/graphql/types';

// Must not change underlying type.
// Type should always be number from 0-5.
export enum CashInType {
  Lino88,
  Lino288,
  Lino688,
  Lino1188,
  Lino2888,
  Lino7888,
  Lino78888
}

export const linoPointFallback = '88';

const linoPointsMap = new Map<CashInType, string>([
  [CashInType.Lino88, linoPointFallback],
  [CashInType.Lino288, '288'],
  [CashInType.Lino688, '688'],
  [CashInType.Lino1188, '1188'],
  [CashInType.Lino2888, '2888'],
  [CashInType.Lino7888, '7888']
  // [CashInType.Lino78888, '78888']
]);

export const linoPoints = Array.from(linoPointsMap.values());

const linoPointsEntries = Array.from(linoPointsMap);

export const cashInTypeFromLinoPoint = (point: string): CashInType => {
  for (const i of linoPointsEntries) {
    if (i[1] === point) {
      return i[0];
    }
  }
  return CashInType.Lino88;
};

const paypalPriceFallback = '1.53';
const paypalPrices = new Map<CashInType, string>([
  [CashInType.Lino88, paypalPriceFallback],
  [CashInType.Lino288, '4.04'],
  [CashInType.Lino688, '9.06'],
  [CashInType.Lino1188, '15.34'],
  [CashInType.Lino2888, '36.67'],
  [CashInType.Lino7888, '99.44'],
  [CashInType.Lino78888, '990.65']
]);

const paypalPricesValues = Array.from(paypalPrices.values());

const coinbasePriceFallback = '1.06';
const coinbasePrices = new Map<CashInType, string>([
  [CashInType.Lino88, coinbasePriceFallback],
  [CashInType.Lino288, '3.46'],
  [CashInType.Lino688, '8.26'],
  [CashInType.Lino1188, '14.26'],
  [CashInType.Lino2888, '34.66'],
  [CashInType.Lino7888, '94.66'],
  [CashInType.Lino78888, '946.66']
]);

const xsollaPriceFallback = '1.22';
const xsollaPrices = new Map<CashInType, string>([
  [CashInType.Lino88, xsollaPriceFallback],
  [CashInType.Lino288, '3.98'],
  [CashInType.Lino688, '9.49'],
  [CashInType.Lino1188, '16.39'],
  [CashInType.Lino2888, '39.84'],
  [CashInType.Lino7888, '108.8'],
  [CashInType.Lino78888, '1088.12']
]);

const amazonPayPriceFallback = '1.53';
const amazonPayPrices = new Map<CashInType, string>([
  [CashInType.Lino88, amazonPayPriceFallback],
  [CashInType.Lino288, '4.04'],
  [CashInType.Lino688, '9.06'],
  [CashInType.Lino1188, '15.34'],
  [CashInType.Lino2888, '36.67'],
  [CashInType.Lino7888, '99.44'],
  [CashInType.Lino78888, '990.65']
]);

const rebillyPriceFallback = '1.53';
const rebillyPrices = new Map<CashInType, string>([
  [CashInType.Lino88, amazonPayPriceFallback],
  [CashInType.Lino288, '4.04'],
  [CashInType.Lino688, '9.06'],
  [CashInType.Lino1188, '15.34'],
  [CashInType.Lino2888, '36.67'],
  [CashInType.Lino7888, '99.44'],
  [CashInType.Lino78888, '990.65']
]);

const skrillPriceFallback = '1.53';
const skrillPrices = new Map<CashInType, string>([
  [CashInType.Lino88, skrillPriceFallback],
  [CashInType.Lino288, '4.04'],
  [CashInType.Lino688, '9.06'],
  [CashInType.Lino1188, '15.34'],
  [CashInType.Lino2888, '36.67'],
  [CashInType.Lino7888, '99.44'],
  [CashInType.Lino78888, '990.65']
]);

const enum stripePricesType {
  Price88Points = 'price88Points',
  Price288Points = 'price288Points',
  Price688Points = 'price688Points',
  Price1188Points = 'price1188Points',
  Price2888Points = 'price2888Points',
  Price7888Points = 'price7888Points',
  Price78888Points = 'price78888Points'
}

const stripePriceFallback = stripePricesType.Price88Points;
const stripePrices = new Map<CashInType, stripePricesType>([
  [CashInType.Lino88, stripePricesType.Price88Points],
  [CashInType.Lino288, stripePricesType.Price288Points],
  [CashInType.Lino688, stripePricesType.Price688Points],
  [CashInType.Lino1188, stripePricesType.Price1188Points],
  [CashInType.Lino2888, stripePricesType.Price2888Points],
  [CashInType.Lino7888, stripePricesType.Price7888Points]
  // [CashInType.Lino78888, stripePricesType.Price78888Points]
]);

const xsollaTypes = new Map<CashInType, XsollaItemType>([
  [CashInType.Lino88, XsollaItemType.X88Linopoints],
  [CashInType.Lino288, XsollaItemType.X288Linopoints],
  [CashInType.Lino688, XsollaItemType.X688Linopoints],
  [CashInType.Lino1188, XsollaItemType.X1188Linopoints],
  [CashInType.Lino2888, XsollaItemType.X2888Linopoints],
  [CashInType.Lino7888, XsollaItemType.X7888Linopoints],
  [CashInType.Lino78888, XsollaItemType.X78888Linopoints]
]);

const paypalKeyFallback = '88 LINO Points';
const paypalKeysMap = new Map<CashInType, string>([
  [CashInType.Lino88, paypalKeyFallback],
  [CashInType.Lino288, '288 LINO Points'],
  [CashInType.Lino688, '688 LINO Points'],
  [CashInType.Lino1188, '1188 LINO Points'],
  [CashInType.Lino2888, '2888 LINO Points'],
  [CashInType.Lino7888, '7888 LINO Points'],
  [CashInType.Lino78888, '78888 LINO Points']
]);

// const coinbaseParamFallback = '443cdbd2-979b-430b-a2fb-3b87ed582fc2';
// const coinbaseParams = new Map<CashInType, string>([
//   [CashInType.Lino88, coinbaseParamFallback],
//   [CashInType.Lino288, 'f7b1b3d6-0379-46f1-a919-2f812e59d031'],
//   [CashInType.Lino688, 'f792c6a1-af89-4e60-950b-13614588e85b'],
//   [CashInType.Lino1188, 'bf239b3b-a660-4213-b0e3-4163cf65fa3f'],
//   [CashInType.Lino2888, '518ce258-1546-4080-a85e-9bb08383efc1'],
//   [CashInType.Lino7888, 'a40c9931-be11-440c-a846-0b2da3ed9320'],
//   [CashInType.Lino78888, '0dc98210-911a-4fc9-beff-d5abcad49af9']
// ]);

const coinbaseParamFallback = '057cbdaf-0b0e-4f27-a966-776e62ad638b';
const coinbaseParams = new Map<CashInType, string>([
  [CashInType.Lino88, coinbaseParamFallback],
  [CashInType.Lino288, '5352160b-faf9-4460-9b95-f55094fcea31'],
  [CashInType.Lino688, 'd9eb3b42-7841-4064-bf31-ad679ed63430'],
  [CashInType.Lino1188, 'e2f89b40-de74-40f9-b321-8f7a6d652839'],
  [CashInType.Lino2888, '4df07dfb-ce60-4134-baaa-86f7ae61c8c6'],
  [CashInType.Lino7888, 'ea6594d5-fcf5-417a-a3ec-9812a8883419'],
  [CashInType.Lino78888, '9bb500d2-f443-408d-acf7-8a1f0259df82']
]);

const coinbaseTypes = new Map<CashInType, CoinbaseItemType>([
  [CashInType.Lino88, CoinbaseItemType.C88Linopoints],
  [CashInType.Lino288, CoinbaseItemType.C288Linopoints],
  [CashInType.Lino688, CoinbaseItemType.C688Linopoints],
  [CashInType.Lino1188, CoinbaseItemType.C1188Linopoints],
  [CashInType.Lino2888, CoinbaseItemType.C2888Linopoints],
  [CashInType.Lino7888, CoinbaseItemType.C7888Linopoints],
  [CashInType.Lino78888, CoinbaseItemType.C78888Linopoints]
]);

const epinTypes = new Map<CashInType, EpinPaymentType>([
  [CashInType.Lino88, EpinPaymentType.E88],
  [CashInType.Lino288, EpinPaymentType.E288],
  [CashInType.Lino688, EpinPaymentType.E688],
  [CashInType.Lino1188, EpinPaymentType.E1188],
  [CashInType.Lino2888, EpinPaymentType.E2888],
  [CashInType.Lino7888, EpinPaymentType.E7888]
  // [CashInType.Lino78888, EpinPaymentType.E78888]
]);

const paybrosTypes = new Map<CashInType, PaybrosPaymentType>([
  [CashInType.Lino88, PaybrosPaymentType.P88],
  [CashInType.Lino288, PaybrosPaymentType.P288],
  [CashInType.Lino688, PaybrosPaymentType.P688],
  [CashInType.Lino1188, PaybrosPaymentType.P1188],
  [CashInType.Lino2888, PaybrosPaymentType.P2888],
  [CashInType.Lino7888, PaybrosPaymentType.P7888]
  // [CashInType.Lino78888, PaybrosPaymentType.P78888]
]);

const amazonPayTypes = new Map<CashInType, AmazonPaymentType>([
  [CashInType.Lino88, AmazonPaymentType.A88],
  [CashInType.Lino288, AmazonPaymentType.A288],
  [CashInType.Lino688, AmazonPaymentType.A688],
  [CashInType.Lino1188, AmazonPaymentType.A1188],
  [CashInType.Lino2888, AmazonPaymentType.A2888],
  [CashInType.Lino7888, AmazonPaymentType.A7888]
  // [CashInType.Lino78888, AmazonPaymentType.A78888]
]);

const rebillyTypes = new Map<CashInType, RebillyPaymentType>([
  [CashInType.Lino88, RebillyPaymentType.R88],
  [CashInType.Lino288, RebillyPaymentType.R288],
  [CashInType.Lino688, RebillyPaymentType.R688],
  [CashInType.Lino1188, RebillyPaymentType.R1188],
  [CashInType.Lino2888, RebillyPaymentType.R2888],
  [CashInType.Lino7888, RebillyPaymentType.R7888]
  // [CashInType.Lino78888, RebillyPaymentType.R78888]
]);

const skrillTypes = new Map<CashInType, SkrillPaymentType>([
  [CashInType.Lino88, SkrillPaymentType.S88],
  [CashInType.Lino288, SkrillPaymentType.S288],
  [CashInType.Lino688, SkrillPaymentType.S688],
  [CashInType.Lino1188, SkrillPaymentType.S1188],
  [CashInType.Lino2888, SkrillPaymentType.S2888],
  [CashInType.Lino7888, SkrillPaymentType.S7888]
  // [CashInType.Lino78888, SkrillPaymentType.S78888]
]);

const stripeTypes = new Map<CashInType, StripePaymentType>([
  [CashInType.Lino88, StripePaymentType.S88],
  [CashInType.Lino288, StripePaymentType.S288],
  [CashInType.Lino688, StripePaymentType.S688],
  [CashInType.Lino1188, StripePaymentType.S1188],
  [CashInType.Lino2888, StripePaymentType.S2888],
  [CashInType.Lino7888, StripePaymentType.S7888]
  // [CashInType.Lino78888, StripePaymentType.E78888]
]);

const enum paybrosPricesType {
  Price88Points = 'price88Points',
  Price288Points = 'price288Points',
  Price688Points = 'price688Points',
  Price1188Points = 'price1188Points',
  Price2888Points = 'price2888Points',
  Price7888Points = 'price7888Points',
  Price78888Points = 'price78888Points'
}

const paybrosPriceFallback = paybrosPricesType.Price88Points;
const paybrosPrices = new Map<CashInType, paybrosPricesType>([
  [CashInType.Lino88, paybrosPricesType.Price88Points],
  [CashInType.Lino288, paybrosPricesType.Price288Points],
  [CashInType.Lino688, paybrosPricesType.Price688Points],
  [CashInType.Lino1188, paybrosPricesType.Price1188Points],
  [CashInType.Lino2888, paybrosPricesType.Price2888Points],
  [CashInType.Lino7888, paybrosPricesType.Price7888Points]
  // [CashInType.Lino78888, paybrosPricesType.Price78888Points]
]);

const enum epinPricesType {
  Price88Points = 'price88Points',
  Price288Points = 'price288Points',
  Price688Points = 'price688Points',
  Price1188Points = 'price1188Points',
  Price2888Points = 'price2888Points',
  Price7888Points = 'price7888Points',
  Price78888Points = 'price78888Points'
}

const epinPriceFallback = epinPricesType.Price88Points;
const epinPrices = new Map<CashInType, epinPricesType>([
  [CashInType.Lino88, epinPricesType.Price88Points],
  [CashInType.Lino288, epinPricesType.Price288Points],
  [CashInType.Lino688, epinPricesType.Price688Points],
  [CashInType.Lino1188, epinPricesType.Price1188Points],
  [CashInType.Lino2888, epinPricesType.Price2888Points],
  [CashInType.Lino7888, epinPricesType.Price7888Points]
  // [CashInType.Lino78888, epinPricesType.Price78888Points]
]);

export const paypalPrice = (index: CashInType): string => {
  const rst = paypalPrices.get(index);
  if (rst === undefined) {
    return paypalPriceFallback;
  }
  return rst;
};

export const coinbasePrice = (index: CashInType): string => {
  const rst = coinbasePrices.get(index);
  if (rst === undefined) {
    return coinbasePriceFallback;
  }
  return rst;
};

export const paybrosPrice = (index: CashInType): paybrosPricesType => {
  const rst = paybrosPrices.get(index);
  if (rst === undefined) {
    return paybrosPriceFallback;
  }
  return rst;
};

export const epinPrice = (index: CashInType): epinPricesType => {
  const rst = epinPrices.get(index);
  if (rst === undefined) {
    return epinPriceFallback;
  }
  return rst;
};

export const coinbaseUrl = (index: CashInType): string => {
  const rst = coinbaseParams.get(index);
  let param: string;
  if (rst === undefined) {
    param = coinbaseParamFallback;
  } else {
    param = rst;
  }
  return `https://commerce.coinbase.com/checkout/${param}`;
};

export const xsollaPrice = (index: CashInType): string => {
  const rst = xsollaPrices.get(index);
  if (rst === undefined) {
    return xsollaPriceFallback;
  }
  return rst;
};

export const amazonPayPrice = (index: CashInType): string => {
  const rst = amazonPayPrices.get(index);
  if (rst === undefined) {
    return amazonPayPriceFallback;
  }
  return rst;
};

export const rebillyPrice = (index: CashInType): string => {
  const rst = rebillyPrices.get(index);
  if (rst === undefined) {
    return rebillyPriceFallback;
  }
  return rst;
};

export const skrillPrice = (index: CashInType): string => {
  const rst = skrillPrices.get(index);
  if (rst === undefined) {
    return skrillPriceFallback;
  }
  return rst;
};

export const stripePrice = (index: CashInType): string => {
  const rst = stripePrices.get(index);
  if (rst === undefined) {
    return stripePriceFallback;
  }
  return rst;
};

export const xsollaType = (index: CashInType): string => {
  const rst = xsollaTypes.get(index);
  if (rst === undefined) {
    return XsollaItemType.X88Linopoints;
  }
  return rst;
};

export const coinbaseType = (index: CashInType): CoinbaseItemType => {
  const rst = coinbaseTypes.get(index);
  if (rst === undefined) {
    return CoinbaseItemType.C88Linopoints;
  }
  return rst;
};

export const paybrosType = (index: CashInType): PaybrosPaymentType => {
  const rst = paybrosTypes.get(index);
  if (rst === undefined) {
    return PaybrosPaymentType.P88;
  }
  return rst;
};

export const epinType = (index: CashInType): EpinPaymentType => {
  const rst = epinTypes.get(index);
  if (rst === undefined) {
    return EpinPaymentType.E88;
  }
  return rst;
};
export const stripeType = (index: CashInType): StripePaymentType => {
  const rst = stripeTypes.get(index);
  if (rst === undefined) {
    return StripePaymentType.S88;
  }
  return rst;
};

export const paypalKey = (index: CashInType): string => {
  const rst = paypalKeysMap.get(index);
  if (rst === undefined) {
    return paypalKeyFallback;
  }
  return rst;
};

export const amazonPayType = (index: CashInType): AmazonPaymentType => {
  const rst = amazonPayTypes.get(index);
  if (rst === undefined) {
    return AmazonPaymentType.A88;
  }
  return rst;
};

export const rebillyType = (index: CashInType): RebillyPaymentType => {
  const rst = rebillyTypes.get(index);
  if (rst === undefined) {
    return RebillyPaymentType.R88;
  }
  return rst;
};

export const skrillType = (index: CashInType): SkrillPaymentType => {
  const rst = skrillTypes.get(index);
  if (rst === undefined) {
    return SkrillPaymentType.S88;
  }
  return rst;
};

export const linoPoint = (index: CashInType): string => {
  const rst = linoPointsMap.get(index);
  if (rst === undefined) {
    return linoPointFallback;
  }
  return rst;
};

export type PaymentMethod =
  | 'paypal'
  | 'coinbase'
  | 'xsolla'
  | 'paybros'
  | 'epin'
  | 'amazonPay'
  | 'rebilly'
  | 'skrill'
  | 'lemon'
  | 'stripe';

export class PaymentMethodI18n {
  public method: PaymentMethod;
  public i18n: string;
  public constructor(method: PaymentMethod, i18n: string) {
    this.method = method;
    this.i18n = i18n;
  }
}

export const paypalI18n = new PaymentMethodI18n('paypal', 'cashIn.Paypal');
export const coinbaseI18n = new PaymentMethodI18n(
  'coinbase',
  'cashIn.Cryptocurrencies'
);
export const xsollaI18n = new PaymentMethodI18n('xsolla', 'cashIn.Xsolla');
export const paybrosI18n = new PaymentMethodI18n('paybros', 'cashIn.Paybros');
export const epinI18n = new PaymentMethodI18n('epin', 'cashIn.Epin');
export const stripeI18n = new PaymentMethodI18n('stripe', 'cashIn.Stripe');
export const amazonPayI18n = new PaymentMethodI18n(
  'amazonPay',
  'cashIn.AmazonPay'
);
export const rebillyI18n = new PaymentMethodI18n('rebilly', 'cashIn.Rebilly');
export const skrillI18n = new PaymentMethodI18n('skrill', 'cashIn.Skrill');
export const lemonI18n = new PaymentMethodI18n('lemon', 'cashIn.Lemon');

export const linoPointsToPaypalPrices = linoPoints.map((e, i) => {
  return { cashInType: i, linoPoint: e, paypalPrice: paypalPricesValues[i] };
});
