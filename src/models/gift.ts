import giftImgBtt from '../assets/icon/btt-donate.svg';
import giftPumpkin from '../assets/icon/gift_pumpkin.png';
import { DonationType } from '@/graphql/types';

const date: Date = new Date();
const startDate: Date = new Date(Date.UTC(2020, 11, 23, 0, 0, 0));
const endDate: Date = new Date(Date.UTC(2020, 11, 30, 0, 0, 0));
let giftImgLemon;
let giftImgIceCream;
let giftImgDiamond;
let giftImgNinjaghini;
let giftImgNinjet;
if (date >= startDate && date <= endDate) {
  giftImgLemon = require('../assets/icon/christmas_LEMON.svg');
  giftImgIceCream = require('../assets/icon/christmas_ICECREAM.svg');
  giftImgDiamond = require('../assets/icon/christmas_DIMOND.svg');
  giftImgNinjaghini = require('../assets/icon/christmas_NINJAGHINI.svg');
  giftImgNinjet = require('../assets/icon/christmas_NINJET.svg');
} else {
  giftImgLemon = require('../assets/icon/gift_lemon.png');
  giftImgIceCream = require('../assets/icon/gift_icecream.png');
  giftImgDiamond = require('../assets/icon/gift_diamond.png');
  giftImgNinjaghini = require('../assets/icon/gift_ninjaghini.svg');
  giftImgNinjet = require('../assets/icon/gift_ninjet.svg');
}

export class Gift {
  public label: string;
  public img: NodeRequire;
  public lino: string;
  public type: DonationType;
  public constructor(
    label: string,
    img: NodeRequire,
    lino: string,
    type: DonationType
  ) {
    this.label = label;
    this.img = img;
    this.lino = lino;
    this.type = type;
  }
}

export const GIFT_BTT = new Gift(
  'VDonationGifts.Btt',
  giftImgBtt,
  '0',
  DonationType.Btt
);

export const GIFT_LEMON = new Gift(
  'VDonationGifts.Lemon',
  giftImgLemon,
  '1',
  DonationType.Lemon
);

export const GIFT_ICE_CREAM = new Gift(
  'VDonationGifts.Icecream',
  giftImgIceCream,
  '10',
  DonationType.IceCream
);

export const GIFT_PUMPKIN = new Gift(
  'VDonationGifts.Pumpkin',
  giftPumpkin,
  '10',
  DonationType.IceCream
);

export const GIFT_DIAMOND = new Gift(
  'VDonationGifts.Diamond',
  giftImgDiamond,
  '100',
  DonationType.Diamond
);

export const GIFT_NINJAGHINI = new Gift(
  'VDonationGifts.Ninjaghini',
  giftImgNinjaghini,
  '1000',
  DonationType.Ninjaghini
);

export const GIFT_NINJET = new Gift(
  'VDonationGifts.Ninjet',
  giftImgNinjet,
  '10000',
  DonationType.Ninjet
);

export const GIFTS = [
  GIFT_BTT,
  GIFT_LEMON,
  GIFT_ICE_CREAM,
  GIFT_DIAMOND,
  GIFT_NINJAGHINI,
  GIFT_NINJET
];
