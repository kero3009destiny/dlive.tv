import { MutationTree } from 'vuex';
import { AccessTokenState } from './types';
import { ONE_MONTH } from '@/utils/constants';

export const mutations: MutationTree<AccessTokenState> = {
  setAccessToken(state, token: string) {
    state.accessToken = {
      token,
      expiresAt: Date.now() + ONE_MONTH
    };
  },
  resetAccessToken(state) {
    state.accessToken = null;
  }
};
