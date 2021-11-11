// TODO:Could merge to UI state
import { Module } from 'vuex';
import { mutations } from './mutations';
import { SnackbarState } from './types';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): SnackbarState {
  return {
    snackbar: null
  };
}

const namespaced: boolean = true;

export function createSnackbar(): Module<SnackbarState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
