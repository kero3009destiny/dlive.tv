import BROWSER_REGISTER_NOTIFICATION from '@/graphql/mutations/BrowserRegisterNotification.graphql';
import BROWSER_DEREGISTER_NOTIFICATION from '@/graphql/mutations/BrowserDeregisterNotification.graphql';
import UPDATE_FOLLOWEE_NOTIFICATION_SETTING from '@/graphql/mutations/UpdateFolloweeNotificationSetting.graphql';
import {
  BrowserRegisterNotification,
  BrowserDeregisterNotification,
  UpdateFolloweeNotificationSetting
} from '@/graphql/types';
import { DocumentNode } from 'graphql';
import Vue from 'vue';

export const browserRegisterNotification = async (
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
  token: string
): Promise<void> => {
  const variables: BrowserRegisterNotification.Variables = {
    token
  };
  const { data } = await vue.$apollo.mutate<
    BrowserRegisterNotification.Mutation
  >({
    mutation: BROWSER_REGISTER_NOTIFICATION,
    variables
  });
  const resp = data.browserRegisterNotification;
  vue.$handleError(resp.err, BROWSER_REGISTER_NOTIFICATION, variables);
};

export const browserDeregisterNotification = async (
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
  token: string
): Promise<void> => {
  const variables: BrowserDeregisterNotification.Variables = {
    token
  };
  const { data } = await vue.$apollo.mutate<
    BrowserDeregisterNotification.Mutation
  >({
    mutation: BROWSER_DEREGISTER_NOTIFICATION,
    variables
  });
  const resp = data.browserDeregisterNotification;
  vue.$handleError(resp.err, BROWSER_DEREGISTER_NOTIFICATION, variables);
};

export const updateFolloweeNotification = async (
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
  followee: string,
  enabled: boolean
): Promise<void> => {
  const variables: UpdateFolloweeNotificationSetting.Variables = {
    followee,
    enabled
  };
  const { data } = await vue.$apollo.mutate<
    UpdateFolloweeNotificationSetting.Mutation
  >({
    mutation: UPDATE_FOLLOWEE_NOTIFICATION_SETTING,
    variables
  });
  const resp = data.updateFolloweeNotificationSetting;
  vue.$handleError(resp.err, UPDATE_FOLLOWEE_NOTIFICATION_SETTING, variables);
};
