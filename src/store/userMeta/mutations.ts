import { MutationTree } from 'vuex';
import { UserMetaState, Ads } from './types';
import { IPAPI } from '@/api/ip';
import { ipRegexExpression } from '@/utils/ip';

export const mutations: MutationTree<UserMetaState> = {
  setFingerprint(state, fingerprint: string) {
    state.userMeta.fingerprint = fingerprint;
  },
  setStreamerReferrer(state, referrer: string) {
    state.userMeta.referrer.streamer = referrer;
  },
  setUserReferrer(state, referrer: string) {
    state.userMeta.referrer.user = referrer;
  },
  setReferrerFirstTimeToFalse(state) {
    state.userMeta.referrer.isFirstTime = false;
  },
  setHappyHourReferrer(state, referrer: string) {
    state.userMeta.referrer.happyHour = referrer;
  },
  setIpStats(state, ipStats: IPAPI) {
    state.userMeta.ipStats = ipStats;
  },
  setIp(state, ip: string) {
    if (ip.match(ipRegexExpression)) {
      state.userMeta.ip = ip;
    }
  },
  setUserLanguageByLangCode(state, lang: string) {
    state.userMeta.langCode = lang;
  },
  setPostRank(state, rank: string) {
    state.userMeta.trackingInfo.rank = rank;
  },
  setPostPrevPage(state, prevPage: string) {
    state.userMeta.trackingInfo.prevPage = prevPage;
  },
  setPageStatus(state, postStatus: string) {
    state.userMeta.trackingInfo.postStatus = postStatus;
  },
  setDarkMode(state, darkMode: boolean) {
    state.userMeta.darkMode = darkMode;
  },
  setNSFW(state, NSFW: boolean) {
    state.userMeta.NSFW = NSFW;
  },
  setMatureTagForViewer(state, matureTagForViewer: boolean) {
    state.userMeta.matureTagForViewer = matureTagForViewer;
  },
  setShowMatureTagVideo(state, showMatureTagVideo: boolean) {
    state.userMeta.showMatureTagVideo = showMatureTagVideo;
  },
  setStreamShowTimestamp(state, streamShowTimestamp: boolean) {
    state.userMeta.streamShowTimestamp = streamShowTimestamp;
  },
  setHomepageLivestreamsLang(state, homepageLivestreamsLang: string | null) {
    state.userMeta.homepageLivestreamsLang = homepageLivestreamsLang;
  },
  setCashinEmail(state, email: string) {
    state.userMeta.cashinEmail = email;
  },
  addImpressionSnap(state, param: { from: string; permlink: string }) {
    if (state.userMeta.impressionSnaps[param.from] !== undefined) {
      state.userMeta.impressionSnaps[param.from].push(param.permlink);
    }
  },
  setShowedShareAnimation(state, showedShareAnimation: boolean) {
    state.userMeta.showedShareAnimation = showedShareAnimation;
  },
  setAds(state, ads: Ads) {
    state.userMeta.ads = ads;
  },
  setNotificationTimer(state, timer: string) {
    state.userMeta.notificationTimer = timer;
  },
  setDailyReportId(state, id: string) {
    state.userMeta.dailyReportId = id;
  }
};
