import { Module } from 'vuex';
import { mutations } from './mutations';
import { VideoPlayerState } from './types';
import { RootState } from '../types';
import { getters } from './getters';

function createState(): VideoPlayerState {
  return {
    twitch: { resourceLoaded: false }
  };
}

const namespaced = true;

export function createVideoPlayer(): Module<VideoPlayerState, RootState> {
  const state = createState();
  return {
    namespaced,
    state,
    mutations,
    getters
  };
}
