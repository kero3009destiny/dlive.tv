import SKRILL_SUB_RECURRING_PAYMENT_TOKEN from '@/graphql/mutations/SkrillSubRecurringPaymentToken.graphql';
import STRIPE_RECURRING_SUBSCRIPTION_TOKEN from '@/graphql/mutations/stripeRecurringSubscriptionToken.graphql';
import {
  SkrillSubRecurringPaymentToken,
  RecurringSubPaymentType,
  StripeSubRecurringPaymentToken
} from '@/graphql/types';
import Vue from 'vue';
import { DocumentNode } from 'graphql';

export const skrillRecurringToken = async (
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
  paymentType: RecurringSubPaymentType
): Promise<SkrillSubRecurringPaymentToken.SkrillSubRecurringPaymentToken> => {
  const variables: SkrillSubRecurringPaymentToken.Variables = {
    streamer,
    paymentType
  };
  const { data } = await vue.$apollo.mutate<
    SkrillSubRecurringPaymentToken.Mutation
  >({
    mutation: SKRILL_SUB_RECURRING_PAYMENT_TOKEN,
    variables
  });
  const resp = data.SkrillSubRecurringPaymentToken;
  vue.$handleError(resp.err, SKRILL_SUB_RECURRING_PAYMENT_TOKEN, variables);
  return resp;
};

export const stripeRecurringToken = async (
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
  priceId: string,
  paymentType: RecurringSubPaymentType
): Promise<StripeSubRecurringPaymentToken.StripeSubRecurringPaymentToken> => {
  const variables: StripeSubRecurringPaymentToken.Variables = {
    streamer,
    priceId,
    paymentType
  };
  const { data } = await vue.$apollo.mutate<
    StripeSubRecurringPaymentToken.Mutation
  >({
    mutation: STRIPE_RECURRING_SUBSCRIPTION_TOKEN,
    variables
  });
  const resp = data.stripeRecurringSubscriptionToken;
  vue.$handleError(resp.err, SKRILL_SUB_RECURRING_PAYMENT_TOKEN, variables);
  return resp;
};
