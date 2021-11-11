import { MutationTree } from 'vuex';
import { GlobalCategoryState } from './types';
import { VCategoryLivestreamFrag } from '@/graphql/types';

export const mutations: MutationTree<GlobalCategoryState> = {
  setGlobalCategoryCryptoChannels(
    state,
    GlobalCategoryCryptoChannels: VCategoryLivestreamFrag.List[]
  ) {
    state.globalCategory.cryptoChannels = GlobalCategoryCryptoChannels;
  },
  setGlobalCategoryBlockchainChannels(
    state,
    GlobalCategoryBlockchainChannels: VCategoryLivestreamFrag.List[]
  ) {
    state.globalCategory.blockchainChannels = GlobalCategoryBlockchainChannels;
  }
};
