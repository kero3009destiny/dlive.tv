import { PartnerStatus } from '@/graphql/types';

class PartnerPermission {
  public none: boolean;
  public affiliate: boolean;
  public verified: boolean;
  public global: boolean;

  public constructor(
    none: boolean,
    affiliate: boolean,
    verified: boolean,
    global: boolean
  ) {
    this.none = none;
    this.affiliate = affiliate;
    this.verified = verified;
    this.global = global;
  }
}

export const enum PERMISSION_EVENTS {
  SUBSCRIPTION = 'subscription',
  HOSTING = 'hosting',
  RERUN = 'rerun',
  BADGE = 'badge',
  CHANNEL_STICKER = 'channel_stacker',
  SUBSCRIBER_ONLY_STICKER = 'subscriber_only_sticker',
  ONLY_CHAT_SETTING = 'only_chat_setting',
  CUSTOM_STREAM_OFFLINE_BANNER = 'custom_stream_offline_banner',
  DANMAKU = 'danmaku',
  UPLOAD_VIDEO = 'upload_video',
  SET_EMOTE = 'set_emote',
  SET_STICKER = 'set_sticker',
  STAKE_BONUS = 'stake_bonus'
}

export const permissionMap = new Map<PERMISSION_EVENTS, PartnerPermission>([
  [
    PERMISSION_EVENTS.SUBSCRIPTION,
    new PartnerPermission(false, true, true, true)
  ],
  [PERMISSION_EVENTS.HOSTING, new PartnerPermission(false, true, true, true)],
  [PERMISSION_EVENTS.RERUN, new PartnerPermission(false, false, true, true)],
  [PERMISSION_EVENTS.BADGE, new PartnerPermission(false, false, true, true)],
  [
    PERMISSION_EVENTS.CHANNEL_STICKER,
    new PartnerPermission(false, false, true, true)
  ],
  [
    PERMISSION_EVENTS.SUBSCRIBER_ONLY_STICKER,
    new PartnerPermission(false, false, true, true)
  ],
  [
    PERMISSION_EVENTS.ONLY_CHAT_SETTING,
    new PartnerPermission(false, true, true, true)
  ],
  [
    PERMISSION_EVENTS.CUSTOM_STREAM_OFFLINE_BANNER,
    new PartnerPermission(false, true, true, true)
  ],
  [PERMISSION_EVENTS.DANMAKU, new PartnerPermission(false, false, false, true)],
  [
    PERMISSION_EVENTS.UPLOAD_VIDEO,
    new PartnerPermission(false, false, true, true)
  ],
  [
    PERMISSION_EVENTS.STAKE_BONUS,
    new PartnerPermission(false, false, true, true)
  ],
  [PERMISSION_EVENTS.SET_EMOTE, new PartnerPermission(false, true, true, true)],
  [
    PERMISSION_EVENTS.SET_STICKER,
    new PartnerPermission(false, false, true, true)
  ]
]);

export const partnerPermissionCheck = (
  event: PERMISSION_EVENTS,
  partnerStatus: PartnerStatus
): boolean => {
  const permission = permissionMap.get(event);
  if (permission !== undefined) {
    switch (partnerStatus) {
      case PartnerStatus.Affiliate: {
        return permission.affiliate;
      }
      case PartnerStatus.VerifiedPartner: {
        return permission.verified;
      }
      case PartnerStatus.GlobalPartnerSuspended: {
        return permission.verified;
      }
      case PartnerStatus.GlobalPartner: {
        return permission.global;
      }
      default: {
        return permission.none;
      }
    }
  }
  return false;
};
