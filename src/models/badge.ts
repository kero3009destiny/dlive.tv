import cryptoSuperstarIcon from '../assets/icon/cropty-super-star-badge.svg';
import foundingMemberIcon from '../assets/icon/founding-member.svg';
import warriorBadgeIcon from '../assets/icon/warrior.svg';
import valentineDayBadgeIcon from '../assets/icon/valentineDay-badge.svg';
import santaClausBadgeIcon from '../assets/icon/santa-claus-badge.svg';
import christmasTreeBadgeIcon from '@/assets/icon/christmas-badge.svg';
import { BadgeType } from '@/graphql/types';

export class Badge {
  public label: string;
  public img: NodeRequire;
  public type: BadgeType;
  public newBadge: boolean;
  public constructor(
    label: string,
    img: NodeRequire,
    type: BadgeType,
    newBadge: boolean
  ) {
    this.label = label;
    this.img = img;
    this.type = type;
    this.newBadge = newBadge;
  }
}
export const BADGE_CRYPTO_SUPERSTAR = new Badge(
  'Crypto Superstar',
  cryptoSuperstarIcon,
  BadgeType.CryptoSuperstar,
  false
);
export const BADGE_FOUNDING_MEMBER = new Badge(
  'Lino Founding Member',
  foundingMemberIcon,
  BadgeType.FoundingMember,
  false
);
export const BADGE_ENGAGEMENT = new Badge(
  'Warrior',
  warriorBadgeIcon,
  BadgeType.EngagementBadge,
  false
);
export const BADGE_VALENTINE = new Badge(
  `Valentine's Day`,
  valentineDayBadgeIcon,
  BadgeType.ValentineBadge,
  false
);
export const BADGE_SANTA = new Badge(
  'Santa',
  santaClausBadgeIcon,
  BadgeType.Santa,
  false
);
export const BADGE_CHRISTMAS_TREE = new Badge(
  'Christmas Tree',
  christmasTreeBadgeIcon,
  BadgeType.ChristmasTree,
  false
);
export const BADGES = [
  BADGE_CRYPTO_SUPERSTAR,
  BADGE_FOUNDING_MEMBER,
  BADGE_ENGAGEMENT,
  BADGE_VALENTINE,
  BADGE_SANTA,
  BADGE_CHRISTMAS_TREE
];
