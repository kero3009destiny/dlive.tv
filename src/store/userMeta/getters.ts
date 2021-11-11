import { GetterTree } from 'vuex';
import {
  UserMetaState,
  TrackingInfo,
  ReferrerGQL,
  Impression,
  Ads
} from './types';
import { RootState } from '../types';
import { ReferralSource } from '@/graphql/types';
import { IPAPI } from '@/api/ip';

export const getters: GetterTree<UserMetaState, RootState> = {
  ip(state): string | null {
    const { userMeta } = state;
    return userMeta.ip;
  },
  ipStats(state): IPAPI | null {
    const { userMeta } = state;
    return userMeta.ipStats;
  },
  langCode(state): string {
    const { userMeta } = state;
    if (userMeta.langCode === null) {
      return '';
    }
    return userMeta.langCode;
  },
  fingerprint(state): string {
    const { userMeta } = state;
    if (userMeta.fingerprint === null) {
      return '';
    }
    return userMeta.fingerprint;
  },
  trackingInfo(state): TrackingInfo | null {
    const { userMeta } = state;
    return userMeta.trackingInfo;
  },
  darkMode(state): boolean {
    const { userMeta } = state;
    return userMeta.darkMode;
  },
  NSFW(state): boolean {
    const { userMeta } = state;
    return userMeta.NSFW;
  },
  matureTagForViewer(state): boolean {
    const { userMeta } = state;
    return userMeta.matureTagForViewer;
  },
  showMatureTagVideo(state): boolean {
    const { userMeta } = state;
    return userMeta.showMatureTagVideo;
  },
  streamShowTimestamp(state): boolean {
    const { userMeta } = state;
    return userMeta.streamShowTimestamp;
  },
  homepageLivestreamsLang(state): string | null {
    const { userMeta } = state;
    return userMeta.homepageLivestreamsLang;
  },
  referrer(state): ReferrerGQL | null {
    const { userMeta } = state;
    const { referrer } = userMeta;
    // if (referrer.streamer !== null) {
    //   return {
    //     referrer: referrer.streamer,
    //     source: ReferralSource.Streamer,
    //     isFirstTime: referrer.isFirstTime
    //   };
    // } else
    if (referrer.user !== null) {
      return {
        referrer: referrer.user,
        source: ReferralSource.Commission,
        isFirstTime: referrer.isFirstTime
      };
    }
    // else if (referrer.happyHour !== null) {
    //   return {
    //     referrer: referrer.happyHour,
    //     source: ReferralSource.HappyHour,
    //     isFirstTime: referrer.isFirstTime
    //   };
    // }
    return null;
  },
  prefetchID(state): string {
    const { userMeta } = state;
    return userMeta.prefetchID;
  },
  cashinEmail(state): string {
    const { userMeta } = state;
    return userMeta.cashinEmail;
  },
  impressionSnaps(state): Impression {
    const { userMeta } = state;
    return userMeta.impressionSnaps;
  },
  showedShareAnimation(state): boolean {
    const { userMeta } = state;
    return userMeta.showedShareAnimation;
  },
  ads(state): Ads | null {
    const { userMeta } = state;
    return userMeta.ads;
  },
  notificationTimer(state): string | null {
    const { userMeta } = state;
    return userMeta.notificationTimer;
  },
  dailyReportId(state): string {
    const { userMeta } = state;
    return userMeta.dailyReportId;
  }
};
