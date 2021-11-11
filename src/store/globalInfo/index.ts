import { Module } from 'vuex';
import { GlobalInfoState } from './types';
import { mutations } from './mutations';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): GlobalInfoState {
  return {
    globalInfo: {
      languages: [],
      communityUpdates: [],
      recommendChannels: [],
      cryptoChannels: [],
      blockchainChannels: [],
      systemMessage: null,
      weeklyReward: null
    }
  };
}

const namespaced = true;

export function createGlobalInfo(): Module<GlobalInfoState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
