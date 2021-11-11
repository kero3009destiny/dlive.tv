import { MeState } from './types';
import { Module } from 'vuex';
import { RootState } from '../types';
import { getters } from './getters';
import { mutations } from './mutations';

function createState(): MeState {
  return {
    me: null
  };
}

const namespaced: boolean = true;

export function createMe(): Module<MeState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
