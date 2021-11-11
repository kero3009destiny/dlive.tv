import { MutationTree } from 'vuex';
import { BannerState } from './types';

export const mutations: MutationTree<BannerState> = {
  setEmailConfirm(state, status: boolean) {
    state.emailConfirm = status;
  },
  setHeaderBanner(state, status: boolean) {
    state.headerBanner = status;
  }
};
