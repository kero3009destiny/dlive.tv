import { GetterTree } from 'vuex';
import { UIState } from './types';
import { RootState } from '../types';
import { Mq, getMqByWidth } from '@/utils/breakpoints';

export const getters: GetterTree<UIState, RootState> = {
  viewPointWidth(state): number {
    const { ui } = state;
    return ui.viewPointWidth;
  },
  mq(state): Mq {
    let rst = state.ui.mq;
    if (process.client) {
      rst = getMqByWidth(state.ui.viewPointWidth);
    }
    if (rst === null) {
      return Mq.LinoMd;
    }
    return rst;
  },
  isMobile(state): boolean {
    if (state.ui.isMobile) {
      return true;
    }
    const mq = getMqByWidth(state.ui.viewPointWidth);
    if (process.client && (mq === Mq.LinoXs || mq === Mq.LinoSm)) {
      return true;
    }
    return state.ui.isMobile;
  },
  theatreMode(state): boolean {
    return state.ui.theatreMode;
  }
};
