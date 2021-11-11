import { UIState, DEFAULT_VIEW_POINT_WIDTH } from './types';
import { RootState } from '../types';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from 'vuex';

const createState = (): UIState => {
  return {
    ui: {
      viewPointWidth: DEFAULT_VIEW_POINT_WIDTH,
      mq: null,
      isMobile: false,
      theatreMode: false
    }
  };
};

const namespaced = true;

export const createUI = (): Module<UIState, RootState> => {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
};
