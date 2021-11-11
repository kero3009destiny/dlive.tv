import { GetterTree } from 'vuex';
import { TabsState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<TabsState, RootState> = {
  livestreamMobileActiveTab(state): string {
    return state.tabs.livestreamMobileActiveTab;
  }
};
