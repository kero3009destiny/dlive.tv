import { FollowFrag } from '@/graphql/types';
import ApolloClient from 'apollo-client';
import FOLLOW_FRAG from '@/graphql/fragments/FollowFrag.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

// This should only be called if logged in and `isFollowing` and `isMe` is in cache.
export const writeFollowCache = (
  client: ApolloClient<NormalizedCacheObject>,
  state: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: FOLLOW_FRAG
  };
  let data: FollowFrag.Fragment | null;
  try {
    data = client.readFragment<FollowFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${id}`);
  }
  if (data.isFollowing === state) {
    return new InternalError(
      `invalid state with id: ${id}, state; ${state}, cache: ${data}`
    );
  }
  if (data.isFollowing !== undefined && data.followers !== undefined) {
    data.isFollowing = state;
    data.followers.totalCount += state ? 1 : -1;
    client.writeFragment({
      ...param,
      data
    });
  }
};
