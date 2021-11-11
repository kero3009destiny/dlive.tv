import {
  PinnedSubOnGoingFrag,
  StreamMessageSubscription
} from '@/graphql/types';
import ApolloClient from 'apollo-client';
import PINNED_SUB_ON_GOING_FRAG from '@/graphql/fragments/PinnedSubOnGoing.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

export const writeOngoingGiftSubCache = (
  client: ApolloClient<NormalizedCacheObject>,
  chatGiftSub: StreamMessageSubscription.ChatGiftSubInlineFragment,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: PINNED_SUB_ON_GOING_FRAG,
    fragmentName: 'PinnedSubOnGoingFrag'
  };
  let data: PinnedSubOnGoingFrag.Fragment | null;
  try {
    data = client.readFragment<PinnedSubOnGoingFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no Gift Sub fragment found with id: ${id}`);
  }
  if (data.ongoingGiftSub !== undefined) {
    const ongoingObject: PinnedSubOnGoingFrag.OngoingGiftSub = {
      gifter: {
        __typename: 'User',
        id: chatGiftSub.sender.id,
        avatar: chatGiftSub.sender.avatar,
        displayname: chatGiftSub.sender.displayname,
        effect: chatGiftSub.sender.effect,
        partnerStatus: chatGiftSub.sender.partnerStatus
      },
      count: chatGiftSub.count ? chatGiftSub.count : 0
    };
    data.ongoingGiftSub = ongoingObject;
    data.ongoingGiftSub.__typename = 'GiftSub';
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const clearOngoingGiftSubCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: PINNED_SUB_ON_GOING_FRAG,
    fragmentName: 'PinnedSubOnGoingFrag'
  };
  let data: PinnedSubOnGoingFrag.Fragment | null;
  try {
    data = client.readFragment<PinnedSubOnGoingFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no Gift Sub fragment found with id: ${id}`);
  }
  if (data.ongoingGiftSub !== undefined) {
    data.ongoingGiftSub = null;
    client.writeFragment({
      ...param,
      data
    });
  }
};
