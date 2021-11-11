import { MutationTree } from 'vuex';
import { TabsState } from './types';

export const mutations: MutationTree<TabsState> = {
  setLivestreamMobileProfileTab(state, activeTab: string) {
    state.tabs.livestreamMobileActiveTab = activeTab;
  }
};
