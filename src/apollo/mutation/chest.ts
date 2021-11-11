import GIVEAWAY_CLAIM from '@/graphql/mutations/GiveawayClaim.graphql';
import GIVEAWAY_START from '@/graphql/mutations/GiveawayStart.graphql';
import CHEST_USER_TRANSFER from '@/graphql/mutations/ChestUserTransfer.graphql';
import {
  GiveawayClaim,
  GiveawayStart,
  ChestUserTransfer
} from '@/graphql/types';
import { writeClaimCache } from '../cache/chest';
import Vue from 'vue';
import { dataPoint } from '@/plugins/dataCollection';
import { DocumentNode } from 'graphql';

export const giveawayClaim = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
  },
  streamer: string,
  id: string
): Promise<void> => {
  const variables: GiveawayClaim.Variables = {
    streamer
  };
  const { data } = await vue.$apollo.mutate<GiveawayClaim.Mutation>({
    mutation: GIVEAWAY_CLAIM,
    variables
  });
  const resp = data.giveawayClaim;
  vue.$handleError(resp.err, GIVEAWAY_CLAIM, variables);
  dataPoint('claim_chest', {
    eventCategory: 'channel(live)',
    eventLabel: streamer
  });
  const err = writeClaimCache(vue.$apollo.provider.defaultClient, id);
  if (err !== undefined) {
    throw err;
  }
};

export const giveawayStart = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
  }
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<GiveawayStart.Mutation>({
    mutation: GIVEAWAY_START
  });
  const resp = data.giveawayStart;
  vue.$handleError(resp.err, GIVEAWAY_START, {});
};

export const chestUserTransfer = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
  },
  variables: ChestUserTransfer.Variables
): Promise<ChestUserTransfer.TreasureChestUserTransfer | undefined> => {
  const { data } = await vue.$apollo.mutate<ChestUserTransfer.Mutation>({
    mutation: CHEST_USER_TRANSFER,
    variables
  });
  const resp = data.treasureChestUserTransfer;
  vue.$handleError(resp.err, CHEST_USER_TRANSFER, variables);
  return resp;
};
