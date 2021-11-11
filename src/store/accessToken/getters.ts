import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { AccessTokenState } from './types';

export const getters: GetterTree<AccessTokenState, RootState> = {
  token(state): string | null {
    const { accessToken } = state;
    if (accessToken === null) {
      return null;
    }
    const { token, expiresAt } = accessToken;
    if (expiresAt < Date.now()) {
      return null;
    }
    return token;
  }
};
