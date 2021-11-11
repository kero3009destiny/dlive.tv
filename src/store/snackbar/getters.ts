import { GetterTree } from 'vuex';
import { SnackbarState, Snackbar } from './types';
import { RootState } from '../types';

export const getters: GetterTree<SnackbarState, RootState> = {
  snackbar(state): Snackbar | null {
    return state.snackbar;
  }
};
