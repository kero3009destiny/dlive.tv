import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { BannerState } from './types';

export const getters: GetterTree<BannerState, RootState> = {
  emailConfirm(state): boolean {
    return state.emailConfirm;
  },
  headerBanner(state): boolean {
    return state.headerBanner;
  }
};
