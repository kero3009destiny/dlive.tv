import { GetterTree } from 'vuex';
import { GlobalInfoState, Language, CommunityUpdate } from './types';
import {
  SidebarRecommendation,
  WeeklyRewardFrag,
  VCategoryLivestreamFrag
} from '@/graphql/types';
import { RootState } from '../types';

export const getters: GetterTree<GlobalInfoState, RootState> = {
  languages(state): Language[] {
    const { globalInfo } = state;
    return globalInfo.languages;
  },
  communityUpdates(state): CommunityUpdate[] {
    const { globalInfo } = state;
    return globalInfo.communityUpdates;
  },
  recommendChannels(state): SidebarRecommendation.RecommendChannels[] {
    const { globalInfo } = state;
    return globalInfo.recommendChannels;
  },
  cryptoChannels(state): VCategoryLivestreamFrag.List[] {
    const { globalInfo } = state;
    return globalInfo.cryptoChannels;
  },
  blockchainChannels(state): VCategoryLivestreamFrag.List[] {
    const { globalInfo } = state;
    return globalInfo.blockchainChannels;
  },
  systemMessage(state): string | null {
    const { globalInfo } = state;
    return globalInfo.systemMessage;
  },
  weeklyReward(state): WeeklyRewardFrag.Fragment | null {
    const { globalInfo } = state;
    return globalInfo.weeklyReward;
  }
};
