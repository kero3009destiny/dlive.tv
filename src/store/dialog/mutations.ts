import { MutationTree } from 'vuex';
import { DialogState } from './types';

export const mutations: MutationTree<DialogState> = {
  setLoginDialog(state, status: 'close' | 'login' | 'signup' | 'notice') {
    state.dialog.login = status;
  },
  setSubscribeDialog(state, status: boolean) {
    state.dialog.subscribe = status;
  },
  setCashInDialog(state, status: boolean) {
    state.dialog.cashIn = status;
  },
  setChestDialog(state, status: boolean) {
    state.dialog.chest = status;
  },
  setChestWinnersDialog(state, status: boolean) {
    state.dialog.chestWinners = status;
  },
  setDownloadAppDialog(state, status: boolean) {
    state.dialog.downloadApp = status;
  },
  setCashInSuccessDialog(state, status: boolean) {
    state.dialog.cashInSuccess = status;
  },
  setCashInFailDialog(state, status: boolean) {
    state.dialog.cashInFail = status;
  },
  setSubSuccessDialog(state, status: boolean) {
    state.dialog.subSuccess = status;
  },
  setGiftSuccessDialog(state, status: boolean) {
    state.dialog.giftSuccess = status;
  },
  setSubFailDialog(state, status: boolean) {
    state.dialog.subFail = status;
  },
  setEmailVerifyDialog(state, status: boolean) {
    state.dialog.emailVerify = status;
  },
  setDashboardEmailVerifyDialog(state, status: boolean) {
    state.dialog.dashboardEmailVerify = status;
  },
  setClipPopupDialog(state, status: boolean) {
    state.dialog.clipPopup = status;
  },
  setDailyCheckInDialog(state, status: boolean) {
    state.dialog.dailyCheckIn = status;
  }
};
