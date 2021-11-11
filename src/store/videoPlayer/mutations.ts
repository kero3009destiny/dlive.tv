import { MutationTree } from 'vuex';
import { VideoPlayerState } from './types';

export const mutations: MutationTree<VideoPlayerState> = {
  setTwitchResourceLoaded(state, loaded: boolean) {
    state.twitch.resourceLoaded = loaded;
  }
};
