import { ActionTree } from 'vuex';
import { UserMetaState, LangObj } from './types';
import { RootState } from '../types';
import { getIP, IPAPI } from '@/api/ip';
import { getFingerprint } from '@/utils/fingerprint';
import { loadLanguageAsync } from '@/i18n';
import { setCookie } from '../../utils/cookie';
import getIp from '@/utils/ipDEPRECATED';
const LOCAL_STORAGE_KEY = 'dlive_local_IP';
interface IpLocalStorage extends IPAPI {
  fetchedAt: number;
}
export const actions: ActionTree<UserMetaState, RootState> = {
  async fetchIpStats({ commit, state }) {
    const ipStats: IPAPI | null = state.userMeta.ipStats;
    if (ipStats !== null) {
      return ipStats;
    }
    // TODO(@ryan): Also get ip from language preference
    const { data } = await getIP();
    commit('setIpStats', data);
    (data as IpLocalStorage).fetchedAt = +Date.now();
    if (data.ip !== '' && data.country !== '') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      return data;
    }
    return data;
  },
  async getIpStats({ state }) {
    const ipStats: IPAPI | null = state.userMeta.ipStats;
    if (ipStats !== null) {
      return ipStats;
    }
    // TODO(@ryan): Also get ip from language preference
    const data = await getIp();
    return data;
  },
  async fetchFingerprint({ commit, state }) {
    const fingerprint: string | null = state.userMeta.fingerprint;
    if (fingerprint !== null) {
      return fingerprint;
    }
    const fp = await getFingerprint();
    commit('setFingerprint', fp);
    return fp;
  },
  loadLanguage({ commit }, lang: LangObj) {
    loadLanguageAsync(lang.langCode, lang.context.$i18n);
    commit('setUserLanguageByLangCode', lang.langCode);
    setCookie('langCode', lang.langCode, 30);
  },
  setHomepageLivestreamsLanguage({ commit }, lang: string) {
    commit('setHomepageLivestreamsLang', lang);
    setCookie('homepageSelectorLangCode', lang, 30);
  },
  setNSFWSwitch({ commit }, NSFW: boolean) {
    commit('setNSFW', NSFW);
    const NSFWCookie = NSFW.toString();
    setCookie('NSFW', NSFWCookie, 30);
  },
  setMatureTagForViewerSwitch({ commit }, matureTagForViewer: boolean) {
    commit('setMatureTagForViewer', matureTagForViewer);
    const matureTagForViewerCookie = matureTagForViewer.toString();
    setCookie('matureTagForViewer', matureTagForViewerCookie, 30);
  },
  setStreamShowTimestampSwitch({ commit }, streamShowTimestamp: boolean) {
    commit('setStreamShowTimestamp', streamShowTimestamp);
    const setStreamShowTimestampCookie = streamShowTimestamp.toString();
    setCookie('streamShowTimestamp', setStreamShowTimestampCookie, 30);
  }
};
