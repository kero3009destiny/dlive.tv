import Vue from 'vue';
import Vuex, { StoreOptions, Store } from 'vuex';
import { RootState } from './types';
import { createSnackbar } from './snackbar';
import { createAccessToken } from './accessToken';
import { createUserMeta } from './userMeta';
import { createMe } from './me';
import { createDialog } from './dialog';
import { createTabs } from './tabs';
// import { createChest } from './chest';
// import { Chest } from './chest/types';
import { createGlobalInfo } from './globalInfo';
import { createGlobalCategory } from './globalCategory';
import { createHappyHour } from './happyhour';
import { createRerun } from './rerun';
import { createUI } from './ui';
import { AccessToken } from './accessToken/types';
import { UserMeta } from './userMeta/types';
import { cloneDeep } from 'apollo-utilities';
import { getCookie, deleteCookie } from '@/utils/cookie';
import { ONE_DAY } from '@/utils/constants';
import { createVideoPlayer } from './videoPlayer/index';
import { createBanner } from './banner/index';

Vue.use(Vuex);
const localStorageKey = 'store';
const version = '1.2.0';

interface LocalStore {
  version: string;
  // chest?: Chest;
  accessToken?: AccessToken;
  userMeta?: UserMeta;
}

export function createStore(): Store<RootState> {
  const snackbar = createSnackbar();
  const accessToken = createAccessToken();
  const userMeta = createUserMeta();
  const me = createMe();
  const dialog = createDialog();
  const tabs = createTabs();
  // const chest = createChest();
  const globalInfo = createGlobalInfo();
  const globalCategory = createGlobalCategory();
  const happyhour = createHappyHour();
  const rerun = createRerun();
  const ui = createUI();
  const videoPlayer = createVideoPlayer();
  const banner = createBanner();
  const storeOptions: StoreOptions<RootState> = {
    state: {
      version
    },
    modules: {
      snackbar,
      accessToken,
      userMeta,
      me,
      dialog,
      tabs,
      // chest,
      globalInfo,
      globalCategory,
      happyhour,
      rerun,
      ui,
      videoPlayer,
      banner
    },
    strict: process.env.NODE_ENV !== 'production'
  };
  const store = new Vuex.Store(storeOptions);
  if (process.client) {
    store.subscribe(({ type }, state) => {
      // FIXME(@ryanli): Maybe this is not as efficient since we update localstorage for any change
      // related to chest and accessToken modules and they are writing to the same localstorage kv.
      // Maybe we could seperate different modules to different kv pairs.
      // XXX(jiayi): Only want to store referrer
      if (
        // !type.startsWith('chest/') &&
        !type.startsWith('accessToken/') &&
        !type.startsWith('userMeta/setStreamerReferrer') &&
        !type.startsWith('userMeta/setReferrerFirstTimeToFalse') &&
        !type.startsWith('userMeta/setCashinEmail') &&
        !type.startsWith('userMeta/setShowedShareAnimation') &&
        !type.startsWith('userMeta/setShowMatureTagVideo') &&
        !type.startsWith('userMeta/setMatureTagForViewer') &&
        !type.startsWith('userMeta/setAds') &&
        !type.startsWith('userMeta/setNotificationTimer') &&
        !type.startsWith('userMeta/setDailyReportId')
      ) {
        return;
      }
      const local: LocalStore = {
        version: state.version,
        // @ts-ignore
        // chest: state.chest.chest,
        // @ts-ignore
        accessToken: state.accessToken.accessToken,
        // @ts-ignore
        userMeta: {
          // @ts-ignore
          referrer: state.userMeta.userMeta.referrer,
          // @ts-ignore
          cashinEmail: state.userMeta.userMeta.cashinEmail,
          // @ts-ignore
          showedShareAnimation: state.userMeta.userMeta.showedShareAnimation,
          // @ts-ignore
          showMatureTagVideo: state.userMeta.userMeta.showMatureTagVideo,
          // @ts-ignore
          matureTagForViewer: state.userMeta.userMeta.matureTagForViewer,
          // @ts-ignore
          ads: state.userMeta.userMeta.ads,
          // @ts-ignore
          notificationTimer: state.userMeta.userMeta.notificationTimer,
          // @ts-ignore
          dailyReportId: state.userMeta.userMeta.dailyReportId
        }
      };
      localStorage.setItem(localStorageKey, JSON.stringify(local));
    });
  }
  return store;
}

export function restoreFromLocalStorage(store: Store<RootState>): void {
  const saved = localStorage.getItem(localStorageKey);
  if (saved === null) {
    return;
  }
  const parsed = JSON.parse(saved) as LocalStore;
  // XXX(@ryan): Don't rely on the type of parsed since this is parsed
  // from user's local storage and their version might differ from the
  // the production version. For example if you added more fields, the
  // parsed one might lack those fields.
  // Only version field is guanranteed
  if (parsed.version !== version) {
    return;
  }
  const stateCopy = cloneDeep(store.state);
  // if (parsed.chest !== undefined) {
  //   // @ts-ignore
  //   stateCopy.chest.chest = { ...stateCopy.chest.chest, ...parsed.chest };
  // }
  const accessToken = parsed.accessToken;
  if (
    accessToken !== undefined &&
    accessToken !== null &&
    accessToken.expiresAt > Date.now()
  ) {
    // @ts-ignore
    stateCopy.accessToken.accessToken = accessToken;
  }
  if (parsed.userMeta !== undefined) {
    if (parsed.userMeta.referrer !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.referrer = parsed.userMeta.referrer;
    }
    if (parsed.userMeta.cashinEmail !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.cashinEmail = parsed.userMeta.cashinEmail;
    }
    if (parsed.userMeta.showedShareAnimation !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.showedShareAnimation =
        parsed.userMeta.showedShareAnimation;
    }
    if (parsed.userMeta.showMatureTagVideo !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.showMatureTagVideo =
        parsed.userMeta.showMatureTagVideo;
    }
    if (parsed.userMeta.matureTagForViewer !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.matureTagForViewer =
        parsed.userMeta.matureTagForViewer;
    }
    if (parsed.userMeta.ads !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.ads = parsed.userMeta.ads;
    }
    if (parsed.userMeta.notificationTimer !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.notificationTimer =
        parsed.userMeta.notificationTimer;
    }
    if (parsed.userMeta.dailyReportId !== undefined) {
      // @ts-ignore
      stateCopy.userMeta.userMeta.dailyReportId = parsed.userMeta.dailyReportId;
    }
  }
  store.replaceState(stateCopy);
}

const authorizationCookie = 'Authorization';
export function restoreFromLocal(store: Store<RootState>): void {
  restoreFromLocalStorage(store);
  // backward compatible
  const atCookie = getCookie(authorizationCookie);
  if (atCookie !== null) {
    const stateCopy = cloneDeep(store.state);
    const ac: AccessToken = {
      token: atCookie,
      expiresAt: Date.now() + ONE_DAY
    };
    // @ts-ignore
    stateCopy.accessToken.accessToken = ac;
    store.replaceState(stateCopy);
    deleteCookie(authorizationCookie);
  }
}
