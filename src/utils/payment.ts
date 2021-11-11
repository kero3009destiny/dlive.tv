class PaymentCheck {
  public routingRegex: RegExp;
  public routingDigits: number;
  public accountRegex: RegExp;
  public accountDigits: number;
  public routingErrorMsg: string | undefined;
  public beneficiaryCPF: RegExp | undefined;
  public agencyCode: RegExp | undefined;

  public constructor(
    routingRegex: RegExp,
    routingDigits: number,
    accountRegex: RegExp,
    accountDigits: number,
    routingErrorMsg?: string,
    beneficiaryCPF?: RegExp,
    agencyCode?: RegExp
  ) {
    this.routingRegex = routingRegex;
    this.routingDigits = routingDigits;
    this.accountRegex = accountRegex;
    this.accountDigits = accountDigits;
    this.routingErrorMsg = routingErrorMsg || 'Invalid Routing Number';
    this.beneficiaryCPF = beneficiaryCPF;
    this.agencyCode = agencyCode;
  }
}

export const paymentCheckMap = new Map<string, PaymentCheck>([
  ['US', new PaymentCheck(/^\d{9}$/, 9, /^\d+$/, -1)],
  ['GB', new PaymentCheck(/^\d{6}$/, 6, /^\d{8}$/, 8, 'Invalid Sort Code')],
  ['CA', new PaymentCheck(/^[0]\d{8}$/, 9, /^\d+$/, -1)],
  ['AU', new PaymentCheck(/^\d{6}$/, 6, /^\d{1,9}$/, 9, 'Invalid BSB Code')],
  ['NZ', new PaymentCheck(/^\d{6}$/, 6, /^\d{10}$/, 10)],
  ['PH', new PaymentCheck(/^\d+$/, -1, /^\d+$/, -1)],
  [
    'SG',
    new PaymentCheck(
      /^\d{7}$/,
      7,
      /^\d{1,11}$/,
      11,
      'Invalid Bank and Branch Code'
    )
  ],
  [
    'IN',
    new PaymentCheck(
      /^[a-zA-Z0-9]{11}$/,
      11,
      /^\d{1,16}$/,
      16,
      'Invalid Bank and Branch Code'
    )
  ],
  [
    'IL',
    new PaymentCheck(/^\d{5}$/, 5, /^\d{1,9}$/, 9, 'Invalid Bank & Branch Code')
  ],
  [
    'ZA',
    new PaymentCheck(
      /^[a-zA-Z0-9]{3,50}$/,
      50,
      /^\d+$/,
      -1,
      'Invalid Branch Code'
    )
  ],
  [
    'BR',
    new PaymentCheck(
      /^\d+$/,
      -1,
      /^\d+$/,
      -1,
      undefined,
      /^[0-9]{11}$/,
      /^[0-9]{4,5}$/
    )
  ]
]);
