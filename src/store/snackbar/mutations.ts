import { MutationTree } from 'vuex';
import { SnackbarState, SnackbarStatus } from './types';

export const mutations: MutationTree<SnackbarState> = {
  setSnackbarSuccess(state, text: string) {
    state.snackbar = {
      state: SnackbarStatus.SUCCESS,
      text
    };
  },
  setSnackbarError(state, text: string) {
    state.snackbar = {
      state: SnackbarStatus.ERROR,
      text
    };
  },
  resetSnackbar(state) {
    state.snackbar = null;
  }
};
