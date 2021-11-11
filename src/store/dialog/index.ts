import { DialogState } from './types';
import { RootState } from '../types';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from 'vuex';

const createState = (): DialogState => {
  return {
    dialog: {
      login: 'close',
      subscribe: false,
      cashIn: false,
      chest: false,
      chestWinners: false,
      downloadApp: false,
      cashInSuccess: false,
      cashInFail: false,
      subSuccess: false,
      giftSuccess: false,
      subFail: false,
      emailVerify: false,
      dashboardEmailVerify: false,
      clipPopup: false,
      dailyCheckIn: false
    }
  };
};

const namespaced = true;

export const createDialog = (): Module<DialogState, RootState> => {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
};
