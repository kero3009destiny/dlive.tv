import TWO_FACTOR_ADD from '@/graphql/mutations/TwoFactorAdd.graphql';
import TWO_FACTOR_DELETE from '@/graphql/mutations/TwoFactorDelete.graphql';
import TWO_FACTOR_ACTIVATE from '@/graphql/mutations/TwoFactorActivate.graphql';
import LOGIN_WITH_TWO_FACTOR from '@/graphql/mutations/LoginWithTwoFactor.graphql';
import {
  TwoFactorAdd,
  TwoFactorActivate,
  TwoFactorDelete,
  LoginWithTwoFactor
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import { setMeTwoFactorEnabled } from '@/apollo/cache/me';

export const twoFactorAdd = async (
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
): Promise<TwoFactorAdd.TwoFactorAdd> => {
  const { data } = await vue.$apollo.mutate<TwoFactorAdd.Mutation>({
    mutation: TWO_FACTOR_ADD
  });
  const resp = data.twoFactorAdd;
  vue.$handleError(resp.err, TWO_FACTOR_ADD);
  return resp;
};

export const twoFactorActivate = async (
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
  code: string
): Promise<void> => {
  const variables: TwoFactorActivate.Variables = {
    code
  };
  const { data } = await vue.$apollo.mutate<TwoFactorActivate.Mutation>({
    mutation: TWO_FACTOR_ACTIVATE,
    variables
  });
  const resp = data.twoFactorActivate;
  vue.$handleError(resp.err, TWO_FACTOR_ACTIVATE, variables);
  setMeTwoFactorEnabled(vue.$apollo.provider.defaultClient, true);
  vue.$success('Add Two-Factor successful');
};

export const twoFactorDelete = async (
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
  code: string
): Promise<void> => {
  const variables: TwoFactorDelete.Variables = {
    code
  };
  const { data } = await vue.$apollo.mutate<TwoFactorDelete.Mutation>({
    mutation: TWO_FACTOR_DELETE,
    variables
  });
  const resp = data.twoFactorDelete;
  vue.$handleError(resp.err, TWO_FACTOR_DELETE, variables);
  setMeTwoFactorEnabled(vue.$apollo.provider.defaultClient, false);
  vue.$success('Delete Two-Factor successful');
};

export const loginWithTwoFactor = async (
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
  twofactorToken: string,
  code: string
): Promise<LoginWithTwoFactor.LoginWithTwoFactor> => {
  const variables: LoginWithTwoFactor.Variables = {
    twofactorToken,
    code
  };
  const { data } = await vue.$apollo.mutate<LoginWithTwoFactor.Mutation>({
    mutation: LOGIN_WITH_TWO_FACTOR,
    variables
  });
  const resp = data.loginWithTwoFactor;
  vue.$handleError(resp.err, LOGIN_WITH_TWO_FACTOR, variables);
  vue.$success('Login Success');
  return resp;
};
