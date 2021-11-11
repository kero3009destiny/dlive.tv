import { Module } from 'vuex';
import { mutations } from './mutations';
import { UserMetaState } from './types';
import { RootState } from '../types';
import { actions } from './actions';
import { v4 as uuid } from 'uuid';
import { getters } from './getters';

function createState(): UserMetaState {
  return {
    userMeta: {
      fingerprint: null,
      referrer: {
        isFirstTime: true,
        streamer: null,
        happyHour: null,
        user: null
      },
      ipStats: null,
      ip: null,
      langCode: '',
      trackingInfo: {
        rank: 'not available',
        prevPage: 'not available',
        postStatus: 'not available'
      },
      darkMode: true,
      NSFW: false,
      matureTagForViewer: true,
      showMatureTagVideo: false,
      streamShowTimestamp: false,
      homepageLivestreamsLang: null,
      prefetchID: uuid(),
      cashinEmail: '',
      impressionSnaps: {
        homeFeed: [],
        banner: [],
        category: [],
        following: [],
        search: []
      },
      showedShareAnimation: false,
      ads: null,
      notificationTimer: null,
      dailyReportId: ''
    }
  };
}

const namespaced = true;

export function createUserMeta(): Module<UserMetaState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters,
    actions
  };
}
