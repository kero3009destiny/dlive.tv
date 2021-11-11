import { Module } from 'vuex';
import { HappyhourState } from './types';
import { mutations } from './mutations';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): HappyhourState {
  return {
    happyhour: {
      happyHourPopup: false,
      eventInfo: null,
      eventStatus: 'no_happyhour',
      tickets: []
    }
  };
}

const namespaced = true;

export function createHappyHour(): Module<HappyhourState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
