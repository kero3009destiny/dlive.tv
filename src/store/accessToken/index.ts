import { Module } from 'vuex';
import { mutations } from './mutations';
import { AccessTokenState } from './types';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): AccessTokenState {
  return {
    accessToken: null
  };
}

const namespaced = true;

export function createAccessToken(): Module<AccessTokenState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
