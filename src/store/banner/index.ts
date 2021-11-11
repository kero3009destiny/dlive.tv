import { Module } from 'vuex';
import { mutations } from './mutations';
import { BannerState } from './types';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): BannerState {
  return {
    emailConfirm: false,
    headerBanner: false
  };
}

const namespaced = true;

export function createBanner(): Module<BannerState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
