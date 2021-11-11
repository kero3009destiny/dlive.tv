import { Module } from 'vuex';
import { GlobalCategoryState } from './types';
import { mutations } from './mutations';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): GlobalCategoryState {
  return {
    globalCategory: {
      cryptoChannels: [],
      blockchainChannels: []
    }
  };
}

const namespaced = true;

export function createGlobalCategory(): Module<GlobalCategoryState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
