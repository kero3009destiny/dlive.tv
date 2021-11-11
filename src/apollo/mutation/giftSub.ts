import ADD_GIFT_SUB from '@/graphql/mutations/AddGiftSub.graphql';
import ADD_GIFT_SUB_CLAIM from '@/graphql/mutations/AddGiftSubClaim.graphql';
import ADD_GIFT_SUB_DISMISS from '@/graphql/mutations/AddGiftSubDismiss.graphql';
import {
  AddGiftSub,
  AddGiftSubClaim,
  AddGiftSubDismiss
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';

import SKRILL_GIFT_SUB_PAYMENT_TOKEN from '@/graphql/mutations/SkrillGiftSubPaymentToken.graphql';
import STRIPE_GIFT_SUB_PAYMENT_TOKEN from '@/graphql/mutations/StripeGiftSubPaymentToken.graphql';
import GET_AMAZON_SUBSCRIPTION_SIGNATURE from '@/graphql/mutations/GetAmazonSubscriptionSignature.graphql';
import {
  SkrillGiftSubPaymentToken,
  StripeGiftSubPaymentToken,
  GetAmazonSubscriptionSignature
} from '@/graphql/types';

export const amazonGiftSubscriptionSignature = async (
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
  receiver: string | null,
  subMonths: number,
  giftCount: number,
  returnUrl: string,
  cancelReturnUrl: string,
  amount: string,
  currency: string
): Promise<GetAmazonSubscriptionSignature.GetAmazonSubscriptionSignature> => {
  const variables: GetAmazonSubscriptionSignature.Variables = {
    streamer,
    giftCount,
    subMonths,
    receiver,
    returnUrl,
    cancelReturnUrl,
    amount,
    currency
  };
  const { data } = await vue.$apollo.mutate<
    GetAmazonSubscriptionSignature.Mutation
  >({
    mutation: GET_AMAZON_SUBSCRIPTION_SIGNATURE,
    variables
  });
  const resp = data.GetAmazonSubscriptionSignature;
  vue.$handleError(resp.err, GET_AMAZON_SUBSCRIPTION_SIGNATURE, variables);
  return resp;
};

export const skrillGiftSubToken = async (
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
  giftCount: number,
  subMonths: number,
  receiver: string | null
): Promise<SkrillGiftSubPaymentToken.SkrillGiftSubPaymentToken> => {
  const variables: SkrillGiftSubPaymentToken.Variables = {
    streamer,
    giftCount,
    subMonths,
    receiver
  };
  const { data } = await vue.$apollo.mutate<SkrillGiftSubPaymentToken.Mutation>(
    {
      mutation: SKRILL_GIFT_SUB_PAYMENT_TOKEN,
      variables
    }
  );
  const resp = data.SkrillGiftSubPaymentToken;
  vue.$handleError(resp.err, SKRILL_GIFT_SUB_PAYMENT_TOKEN, variables);
  return resp;
};

export const stripeGiftSubToken = async (
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
  giftCount: number,
  subMonths: number,
  receiver: string | null
): Promise<StripeGiftSubPaymentToken.StripeGiftSubPaymentToken> => {
  const variables: StripeGiftSubPaymentToken.Variables = {
    streamer,
    giftCount,
    subMonths,
    receiver
  };
  const { data } = await vue.$apollo.mutate<StripeGiftSubPaymentToken.Mutation>(
    {
      mutation: STRIPE_GIFT_SUB_PAYMENT_TOKEN,
      variables
    }
  );
  const resp = data.StripeGiftSubPaymentToken;
  vue.$handleError(resp.err, STRIPE_GIFT_SUB_PAYMENT_TOKEN, variables);
  return resp;
};

export const addGiftSub = async (
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
  toUser: string | null,
  count: number | null
): Promise<void> => {
  const variables: AddGiftSub.Variables = {
    streamer,
    toUser,
    count
  };
  const { data } = await vue.$apollo.mutate<AddGiftSub.Mutation>({
    mutation: ADD_GIFT_SUB,
    variables
  });
  const resp = data.giftSub;
  vue.$handleError(resp.err, ADD_GIFT_SUB, variables);
};

export const addGiftSubClaim = async (
  vue: Vue,
  streamer: string
): Promise<AddGiftSubClaim.GiftSubClaim> => {
  const variables: AddGiftSubClaim.Variables = {
    streamer
  };
  const { data } = await vue.$apollo.mutate<AddGiftSubClaim.Mutation>({
    mutation: ADD_GIFT_SUB_CLAIM,
    variables
  });
  const resp = data.giftSubClaim;
  return resp;
};

export const addGiftSubDismiss = async (
  vue: Vue,
  streamer: string
): Promise<AddGiftSubDismiss.GiftSubDismiss> => {
  const variables: AddGiftSubDismiss.Variables = {
    streamer
  };
  const { data } = await vue.$apollo.mutate<AddGiftSubDismiss.Mutation>({
    mutation: ADD_GIFT_SUB_DISMISS,
    variables
  });
  const resp = data.giftSubDismiss;
  return resp;
};
