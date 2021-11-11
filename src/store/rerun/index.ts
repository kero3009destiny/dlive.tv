import { Module } from 'vuex';
import { RerunState } from './types';
import { mutations } from './mutations';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): RerunState {
  return {
    rerun: {
      currentRerun: null
    }
  };
}

const namespaced = true;

export function createRerun(): Module<RerunState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
