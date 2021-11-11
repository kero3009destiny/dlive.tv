import { GetterTree } from 'vuex';
import { DialogState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<DialogState, RootState> = {
  login(state): 'close' | 'login' | 'signup' | 'notice' {
    return state.dialog.login;
  },
  subscribe(state): boolean {
    return state.dialog.subscribe;
  },
  cashIn(state): boolean {
    return state.dialog.cashIn;
  },
  chest(state): boolean {
    return state.dialog.chest;
  },
  chestWinners(state): boolean {
    return state.dialog.chestWinners;
  },
  downloadApp(state): boolean {
    return state.dialog.downloadApp;
  },
  cashInSuccess(state): boolean {
    return state.dialog.cashInSuccess;
  },
  cashInFail(state): boolean {
    return state.dialog.cashInFail;
  },
  subSuccess(state): boolean {
    return state.dialog.subSuccess;
  },
  giftSuccess(state): boolean {
    return state.dialog.giftSuccess;
  },
  subFail(state): boolean {
    return state.dialog.subFail;
  },
  emailVerify(state): boolean {
    return state.dialog.emailVerify;
  },
  dashboardEmailVerify(state): boolean {
    return state.dialog.dashboardEmailVerify;
  },
  clipPopup(state): boolean {
    return state.dialog.clipPopup;
  },
  dailyCheckIn(state): boolean {
    return state.dialog.dailyCheckIn;
  }
};
