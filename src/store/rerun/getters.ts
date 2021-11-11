import { GetterTree } from 'vuex';
import { RerunState } from './types';
import { RootState } from '../types';
import { RerunReplayFrag } from '@/graphql/types';

export const getters: GetterTree<RerunState, RootState> = {
  currentRerun(state): RerunReplayFrag.Fragment | null {
    return state.rerun.currentRerun;
  }
};
