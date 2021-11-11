import { MutationTree } from 'vuex';
import { UIState } from './types';
import { getViewpointWidth } from '@/utils/breakpoints';
import { Mq } from '@/utils/breakpoints';

export const mutations: MutationTree<UIState> = {
  resetViewPointWidth(state) {
    const viewPointWidth = getViewpointWidth();
    state.ui.viewPointWidth = viewPointWidth;
  },
  initializeMq(state, isMobile) {
    // FIXME: Maybe don't allow undefined
    let mq: Mq;
    if (isMobile) {
      mq = Mq.LinoXs;
    } else {
      mq = Mq.LinoXl;
    }
    state.ui.mq = mq;
  },
  setIsMobile(state, isMobile: boolean) {
    state.ui.isMobile = isMobile;
  },
  setTheatreMode(state, theatreMode: boolean) {
    state.ui.theatreMode = theatreMode;
  }
};
