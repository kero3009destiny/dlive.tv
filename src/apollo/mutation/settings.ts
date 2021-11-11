import USER_DEACTIVATE from '@/graphql/mutations/UserDeactivate.graphql';
import USER_DELETE from '@/graphql/mutations/UserDelete.graphql';
import RESET_PASSWORD_WITH_OLD_PASSWORD from '@/graphql/mutations/ResetPasswordWithOldPassword.graphql';
import SEND_VERIFICATION_LINK_TO_EMAIL from '@/graphql/mutations/SendVerificationLinkToEmail.graphql';
import VERIFY_EMAIL_LINK from '@/graphql/mutations/VerifyEmailLink.graphql';
import {
  UserDeactivate,
  UserDelete,
  ResetPasswordWithOldPassword,
  SetSubSettings,
  SettingsSubscribeFrag,
  SendVerificationLinkToEmail,
  VerifyEmailLink
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import { setMeSubSettings } from '@/apollo/cache/me';
import SET_SUB_SETTING from '@/graphql/mutations/SetSubSettings.graphql';

export const subSettings = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  variables: SetSubSettings.Variables
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<SetSubSettings.Mutation>({
    mutation: SET_SUB_SETTING,
    variables
  });
  const resp = data.subSettingSet;
  vue.$handleError(resp.err, SET_SUB_SETTING, variables);
  const userSubSetting: SettingsSubscribeFrag.SubSetting = {
    __typename: 'SubSetting',
    badgeColor: variables.badgeColor,
    badgeText: variables.badgeText,
    textColor: variables.textColor,
    backgroundImage:
      variables.backgroundImage === undefined ||
      variables.backgroundImage === null
        ? ''
        : variables.backgroundImage,
    streakTextColor: !variables.streakTextColor
      ? '#FFFFFF'
      : variables.streakTextColor,
    benefits: variables.benefits === undefined ? null : variables.benefits
  };
  const err = setMeSubSettings(
    vue.$apollo.provider.defaultClient,
    userSubSetting
  );
  if (err !== undefined) {
    throw err;
  }
  vue.$success('SettingsSubscribe.SubscriptionSettingUpdated');
};

export const userDeactivate = async (
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
  password: string
): Promise<void> => {
  const variables: UserDeactivate.Variables = {
    password
  };
  const { data } = await vue.$apollo.mutate<UserDeactivate.Mutation>({
    mutation: USER_DEACTIVATE,
    variables
  });
  const resp = data.userDeactivate;
  vue.$handleError(resp.err, USER_DEACTIVATE, variables);
};

export const userDelete = async (
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
  password: string
): Promise<void> => {
  const variables: UserDelete.Variables = {
    password
  };
  const { data } = await vue.$apollo.mutate<UserDelete.Mutation>({
    mutation: USER_DELETE,
    variables
  });
  const resp = data.userDelete;
  vue.$handleError(resp.err, USER_DELETE, variables);
};

export const resetPasswordWithOldPassword = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  oldPassword: string,
  newPassword: string
): Promise<string | null> => {
  const variables: ResetPasswordWithOldPassword.Variables = {
    oldPassword,
    newPassword
  };
  const { data } = await vue.$apollo.mutate<
    ResetPasswordWithOldPassword.Mutation
  >({
    mutation: RESET_PASSWORD_WITH_OLD_PASSWORD,
    variables
  });
  const resp = data.resetPasswordWithOldPassword;
  vue.$handleError(resp.err, RESET_PASSWORD_WITH_OLD_PASSWORD, variables);
  vue.$success('SettingsPassword.success');
  return resp.accessToken;
};

export const sendVerificationLinkToEmail = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  email: string
): Promise<boolean> => {
  const variables: SendVerificationLinkToEmail.Variables = {
    email
  };
  const { data } = await vue.$apollo.mutate<
    SendVerificationLinkToEmail.Mutation
  >({
    mutation: SEND_VERIFICATION_LINK_TO_EMAIL,
    variables
  });
  const resp = data.sendVerificationLinkToEmail;
  vue.$handleError(resp.err, SEND_VERIFICATION_LINK_TO_EMAIL, variables);
  vue.$success('SettingsEmail.SendLinkSuccess');
  return true;
  // return resp.accessToken;
};

export const verifyEmailLink = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  token: string
): Promise<VerifyEmailLink.VerifyEmailLink> => {
  const variables: VerifyEmailLink.Variables = {
    token
  };
  const { data } = await vue.$apollo.mutate<VerifyEmailLink.Mutation>({
    mutation: VERIFY_EMAIL_LINK,
    variables
  });
  const resp = data.verifyEmailLink;
  vue.$handleError(resp.err, VERIFY_EMAIL_LINK, variables);
  return resp;
  // vue.$success('SettingsPassword.success');
};
