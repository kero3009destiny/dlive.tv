import { MutationTree } from 'vuex';
import { GlobalInfoState, GlobalInfo } from './types';
import {
  SidebarRecommendation,
  VCategoryLivestreamFrag
} from '@/graphql/types';

export const mutations: MutationTree<GlobalInfoState> = {
  setGlobalInfo(state, globalInfo: GlobalInfo) {
    state.globalInfo = globalInfo;
  },
  setGlobalInfoRecommend(
    state,
    globalInfoRecommend: SidebarRecommendation.RecommendChannels[]
  ) {
    state.globalInfo.recommendChannels = globalInfoRecommend;
  },
  setGlobalInfoCryptoChannels(
    state,
    globalInfoCryptoChannels: VCategoryLivestreamFrag.List[]
  ) {
    state.globalInfo.cryptoChannels = globalInfoCryptoChannels;
  },
  setGlobalInfoBlockchainChannels(
    state,
    globalInfoBlockchainChannels: VCategoryLivestreamFrag.List[]
  ) {
    state.globalInfo.blockchainChannels = globalInfoBlockchainChannels;
  }
};
