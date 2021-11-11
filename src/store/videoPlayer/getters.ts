import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { VideoPlayerState } from './types';

export const getters: GetterTree<VideoPlayerState, RootState> = {
  twitchResourceLoaded(state): boolean {
    return state.twitch.resourceLoaded;
  }
};
