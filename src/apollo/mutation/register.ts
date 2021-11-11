import {
  RegisterWithFb,
  RegisterResponseFrag,
  RegisterWithTw,
  RegisterWithYt,
  RegisterWithWallet,
  RegisterWithEmailStepTwo,
  SetEmailWithPassword
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import REGISTER_WITH_FB from '@/graphql/mutations/RegisterWithFB.graphql';
import REGISTER_WITH_YT from '@/graphql/mutations/RegisterWithYT.graphql';
import REGISTER_WITH_TW from '@/graphql/mutations/RegisterWithTW.graphql';
import REGISTER_WITH_WALLET from '@/graphql/mutations/RegisterWithWallet.graphql';
import REGISTER_WITH_EMAIL_STEP_TWO from '@/graphql/mutations/RegisterWithEmailStepTwo.graphql';
import SET_EMAIL_WITH_PASSWORD from '@/graphql/mutations/SetEmailWithPassword.graphql';
import { dataPoint } from '@/plugins/dataCollection';
import { minervaEvent } from '@/plugins/minerva';
import { Register } from '@/plugins/types';

export const registerFb = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $handleInconsistentError(
      resp: object,
      fields: string[],
      mutation: DocumentNode,
      variables?: object
    ): never;
  },
  variables: RegisterWithFb.Variables
): Promise<RegisterResponseFrag.Fragment> => {
  const { data } = await vue.$apollo.mutate<RegisterWithFb.Mutation>({
    mutation: REGISTER_WITH_FB,
    variables
  });
  const resp = data.registerWithFacebook;
  vue.$handleError(resp.err, REGISTER_WITH_FB, variables);
  if (
    resp.me === null ||
    resp.me.private === null ||
    resp.me.private.accessToken === ''
  ) {
    vue.$handleInconsistentError(
      resp,
      ['me.private.accessToken'],
      REGISTER_WITH_FB,
      variables
    );
  }
  if (resp.me !== null) {
    dataPoint('register', {
      eventCategory: 'facebook',
      eventLabel: resp.me.username
    });
    const eventLabels: Register.EventLabels = {
      gateway: 'facebook'
    };
    minervaEvent(Register.eventType, eventLabels);
  }
  return resp;
};

export const registerYt = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $handleInconsistentError(
      resp: object,
      fields: string[],
      mutation: DocumentNode,
      variables?: object
    ): never;
  },
  variables: RegisterWithYt.Variables
): Promise<RegisterResponseFrag.Fragment> => {
  const { data } = await vue.$apollo.mutate<RegisterWithYt.Mutation>({
    mutation: REGISTER_WITH_YT,
    variables
  });
  const resp = data.registerWithGoogle;
  vue.$handleError(resp.err, REGISTER_WITH_YT, variables);
  if (
    resp.me === null ||
    resp.me.private === null ||
    resp.me.private.accessToken === ''
  ) {
    vue.$handleInconsistentError(
      resp,
      ['me.private.accessToken'],
      REGISTER_WITH_YT,
      variables
    );
  }
  if (resp.me !== null) {
    dataPoint('register', {
      eventCategory: 'youtube',
      eventLabel: resp.me.username
    });
    const eventLabels: Register.EventLabels = {
      gateway: 'youtube'
    };
    minervaEvent(Register.eventType, eventLabels);
  }
  return resp;
};

export const registerTw = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $handleInconsistentError(
      resp: object,
      fields: string[],
      mutation: DocumentNode,
      variables?: object
    ): never;
  },
  variables: RegisterWithTw.Variables
): Promise<RegisterResponseFrag.Fragment> => {
  const { data } = await vue.$apollo.mutate<RegisterWithTw.Mutation>({
    mutation: REGISTER_WITH_TW,
    variables
  });
  const resp = data.registerWithTwitch;
  vue.$handleError(resp.err, REGISTER_WITH_TW, variables);
  if (
    resp.me === null ||
    resp.me.private === null ||
    resp.me.private.accessToken === ''
  ) {
    vue.$handleInconsistentError(
      resp,
      ['me.private.accessToken'],
      REGISTER_WITH_TW,
      variables
    );
  }
  if (resp.me !== null) {
    dataPoint('register', {
      eventCategory: 'twitch',
      eventLabel: resp.me.username
    });
    const eventLabels: Register.EventLabels = {
      gateway: 'twitch'
    };
    minervaEvent(Register.eventType, eventLabels);
  }
  return resp;
};

export const registerWallet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $handleInconsistentError(
      resp: object,
      fields: string[],
      mutation: DocumentNode,
      variables?: object
    ): never;
  },
  variables: RegisterWithWallet.Variables
): Promise<RegisterResponseFrag.Fragment> => {
  const { data } = await vue.$apollo.mutate<RegisterWithWallet.Mutation>({
    mutation: REGISTER_WITH_WALLET,
    variables
  });
  const resp = data.registerWithWallet;
  vue.$handleError(resp.err, REGISTER_WITH_WALLET, variables);
  if (
    resp.me === null ||
    resp.me.private === null ||
    resp.me.private.accessToken === ''
  ) {
    vue.$handleInconsistentError(
      resp,
      ['me.private.accessToken'],
      REGISTER_WITH_WALLET,
      variables
    );
  }
  if (resp.me !== null) {
    dataPoint('register', {
      eventCategory: 'wallet',
      eventLabel: resp.me.username
    });
  }
  return resp;
};

export const registerEmailStepTwo = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $handleInconsistentError(
      resp: object,
      fields: string[],
      mutation: DocumentNode,
      variables?: object
    ): never;
  },
  variables: RegisterWithEmailStepTwo.Variables
): Promise<RegisterResponseFrag.Fragment> => {
  const { data } = await vue.$apollo.mutate<RegisterWithEmailStepTwo.Mutation>({
    mutation: REGISTER_WITH_EMAIL_STEP_TWO,
    variables
  });
  const resp = data.registerWithEmailStep2;
  vue.$handleError(resp.err, REGISTER_WITH_EMAIL_STEP_TWO, variables);
  if (
    resp.me === null ||
    resp.me.private === null ||
    resp.me.private.accessToken === ''
  ) {
    vue.$handleInconsistentError(
      resp,
      ['me.private.accessToken'],
      REGISTER_WITH_EMAIL_STEP_TWO,
      variables
    );
  }
  if (resp.me !== null) {
    dataPoint('register', {
      eventCategory: 'email',
      eventLabel: resp.me.username
    });
    const eventLabels: Register.EventLabels = {
      gateway: 'email'
    };
    minervaEvent(Register.eventType, eventLabels);
  }
  return resp;
};

export const setEmailWithPassword = async (
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
  variables: SetEmailWithPassword.Variables
): Promise<SetEmailWithPassword.SetEmailWithPassword> => {
  const { data } = await vue.$apollo.mutate<SetEmailWithPassword.Mutation>({
    mutation: SET_EMAIL_WITH_PASSWORD,
    variables
  });
  const resp = data.setEmailWithPassword;
  vue.$handleError(resp.err, SET_EMAIL_WITH_PASSWORD, variables);
  vue.$success('NavLoginDialog.setEmailWithPasswordSuccess');
  return resp;
};
