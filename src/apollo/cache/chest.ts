import {
  TreasureChestFrag,
  TreasureChestState,
  TreasureChestUserFrag
} from '@/graphql/types';
import TREASURE_CHEST_FRAG from '@/graphql/fragments/TreasureChestFrag.graphql';
import TREASURE_CHEST_FRAG_STREAMER from '@/graphql/fragments/TreasureChestStreamerFrag.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { InternalError } from '@/models/error';

export const writeClaimCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: TREASURE_CHEST_FRAG
  };
  let data: TreasureChestFrag.Fragment | null;
  try {
    data = client.readFragment<TreasureChestFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no treasure chest fragment found with id: ${id}`);
  }
  if (
    data.treasureChest !== undefined &&
    data.treasureChest.ongoingGiveaway !== null
  ) {
    data.treasureChest.ongoingGiveaway.claimed = true;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeOngoingGiveawayCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  ongoingGiveaway: TreasureChestUserFrag.OngoingGiveaway | null
): InternalError | undefined => {
  const param = {
    id,
    fragment: TREASURE_CHEST_FRAG
  };
  let data: TreasureChestFrag.Fragment | null;
  try {
    data = client.readFragment<TreasureChestFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no treasure chest fragment found with id: ${id}`);
  }
  if (data.treasureChest !== undefined) {
    if (ongoingGiveaway === null) {
      data.treasureChest.state = TreasureChestState.Collecting;
    } else {
      data.treasureChest.state = TreasureChestState.Claiming;
    }
    data.treasureChest.ongoingGiveaway = ongoingGiveaway;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeValueCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  value: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: TREASURE_CHEST_FRAG
  };
  let data: TreasureChestFrag.Fragment | null;
  try {
    data = client.readFragment<TreasureChestFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no treasure chest fragment found with id: ${id}`);
  }
  if (data.treasureChest !== undefined) {
    data.treasureChest.value = value;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeNextGiveawayThresholdAtCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  nextGiveawayThresholdAt: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: TREASURE_CHEST_FRAG_STREAMER
  };
  let data: TreasureChestFrag.Fragment | null;
  try {
    data = client.readFragment<TreasureChestFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no treasure chest fragment found with id: ${id}`);
  }
  if (data.treasureChest !== undefined) {
    data.treasureChest.nextGiveawayThresholdAt = nextGiveawayThresholdAt;
    client.writeFragment({
      ...param,
      data
    });
  }
};
