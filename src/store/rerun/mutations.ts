import { MutationTree } from 'vuex';
import { RerunState } from './types';
import { RerunReplayFrag } from '@/graphql/types';

export const mutations: MutationTree<RerunState> = {
  setCurrentRerun(state, currentRerun: RerunReplayFrag.Fragment | null) {
    state.rerun.currentRerun = currentRerun;
  }
};
