import { GetterTree } from 'vuex';
import { GlobalCategoryState } from './types';
import { VCategoryLivestreamFrag } from '@/graphql/types';
import { RootState } from '../types';

export const getters: GetterTree<GlobalCategoryState, RootState> = {
  cryptoChannels(state): VCategoryLivestreamFrag.List[] {
    const { globalCategory } = state;
    return globalCategory.cryptoChannels;
  },
  blockchainChannels(state): VCategoryLivestreamFrag.List[] {
    const { globalCategory } = state;
    return globalCategory.blockchainChannels;
  }
};
