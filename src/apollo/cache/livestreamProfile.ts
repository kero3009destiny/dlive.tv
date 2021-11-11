import {
  LivestreamProfileVideo,
  // ProfileAboutFrag,
  ProfileReplayFrag
} from '@/graphql/types';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { InternalError } from '@/models/error';
import { DataProxy } from 'apollo-cache';
import PROFILE_REPLAY_FRAG from '@/graphql/fragments/ProfileReplayFrag.graphql';

export const writeVideoDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  permlink: string,
  param: DataProxy.Query<LivestreamProfileVideo.Variables>
): void => {
  try {
    if (param === null) {
      return;
    }
    const data: LivestreamProfileVideo.Query | null = client.readQuery<
      LivestreamProfileVideo.Query,
      LivestreamProfileVideo.Variables
    >(param);
    if (
      data !== null &&
      data.userByDisplayName !== undefined &&
      data.userByDisplayName !== null
    ) {
      data.userByDisplayName.videos.list = data.userByDisplayName.videos.list.filter(
        video => {
          return video.permlink !== permlink;
        }
      );
      client.writeQuery({
        ...param,
        data
      });
    }
  } catch (err) {
    // TODO
  }
};

export const writePastbroadcastDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  permlink: string,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: PROFILE_REPLAY_FRAG,
    fragmentName: 'ProfileReplayFrag'
  };
  let data: ProfileReplayFrag.Fragment | null;
  try {
    data = client.readFragment<ProfileReplayFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }

  if (data === null) {
    return new InternalError(`no host setting fragment found with id: ${id}`);
  }

  if (data.pastBroadcasts !== undefined) {
    data.pastBroadcasts.list = data.pastBroadcasts.list.filter(replay => {
      return replay.permlink !== permlink;
    });
    data.pastBroadcasts.totalCount -= 1;
    client.writeFragment({
      ...param,
      data
    });
  }
};
