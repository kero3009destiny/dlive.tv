import { TabsState } from './types';
import { RootState } from '../types';
import { mutations } from './mutations';
import { getters } from './getters';
import { Module } from 'vuex';

const createState = (): TabsState => {
  return {
    tabs: {
      livestreamMobileActiveTab: 'tab-chat'
    }
  };
};

const namespaced = true;

export const createTabs = (): Module<TabsState, RootState> => {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
};
