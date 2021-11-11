import FOLLOW from '@/graphql/mutations/Follow.graphql';
import UNFOLLOW from '@/graphql/mutations/Unfollow.graphql';
import { FollowUser, UnfollowUser } from '@/graphql/types';
import { writeFollowCache } from '../cache/follow';
import Vue from 'vue';
import { dataPoint } from '@/plugins/dataCollection';
import { requestNotificationPermission } from '@/web-notification';
import { DocumentNode } from 'graphql';
import { minervaEvent } from '@/plugins/minerva';
import { Follow, Unfollow } from '@/plugins/types';

// FIXME: Don't catch error here. Ugly undefined
export const follow = async (
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
  // vue: VFollow,
  streamer: string,
  id: string
): Promise<void> => {
  const variables: FollowUser.Variables = {
    streamer
  };
  const test = await vue.$apollo.mutate<FollowUser.Mutation>({
    mutation: FOLLOW,
    variables
  });
  const { data } = test;
  const resp = data.follow;
  vue.$handleError(resp.err, FOLLOW, variables);
  const trackingInfo = vue.$store.getters['userMeta/trackingInfo'];
  dataPoint('follow', {
    eventCategory: trackingInfo.postStatus,
    eventLabel: streamer
  });
  const eventLabels: Follow.EventLabels = {
    id: streamer
  };
  minervaEvent(Follow.eventType, eventLabels);
  if (
    typeof Notification !== 'undefined' &&
    Notification.permission === 'default'
  ) {
    requestNotificationPermission();
  }
  const err = writeFollowCache(vue.$apollo.provider.defaultClient, true, id);
  if (err !== undefined) {
    throw err;
  }
};

// FIXME: Don't catch error here. Ugly undefined
export const unfollow = async (
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
  const variables: UnfollowUser.Variables = {
    streamer
  };
  const { data } = await vue.$apollo.mutate<UnfollowUser.Mutation>({
    mutation: UNFOLLOW,
    variables
  });
  const resp = data.unfollow;
  vue.$handleError(resp.err, UNFOLLOW, variables);
  const trackingInfo = vue.$store.getters['userMeta/trackingInfo'];
  dataPoint('unfollow', {
    eventCategory: trackingInfo.postStatus,
    eventLabel: streamer
  });
  const eventLabels: Unfollow.EventLabels = {
    id: streamer
  };
  minervaEvent(Unfollow.eventType, eventLabels);
  const err = writeFollowCache(vue.$apollo.provider.defaultClient, false, id);
  if (err !== undefined) {
    throw err;
  }
};
