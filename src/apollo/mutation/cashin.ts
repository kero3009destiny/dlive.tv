import PAYMENT_ADD_EMAIL from '@/graphql/mutations/PaymentAddEmail.graphql';
import REPORT_CB_PAYMENT from '@/graphql/mutations/ReportCBPayment.graphql';
import AMAZON_PAYMENT_INITIATE from '@/graphql/mutations/AmazonPaymentInitiate.graphql';
import REBILLY_PAYMENT_PROCESS from '@/graphql/mutations/RebillyPaymentProcess.graphql';
import CASHIN_REFUND_REQUEST from '@/graphql/mutations/CashinRefundRequest.graphql';
import REBILLY_CARD_DEACTIVATE from '@/graphql/mutations/RebillyCardDeactivate.graphql';
import SKRILL_TOKEN from '@/graphql/mutations/SkrillToken.graphql';
import {
  PaymentAddEmail,
  ReportCbPayment,
  AmazonPaymentInitiate,
  InitiateAmazonPaymentInput,
  CashinRefundRequest,
  RebillyPaymentProcess,
  RebillyPaymentType,
  RebillyCardDeactivate,
  SkrillToken,
  SkrillPaymentType
} from '@/graphql/types';
import { writeRebillyCardsDeleteCache } from '../cache/cashin';
import Vue from 'vue';
import { DocumentNode } from 'graphql';

// FIXME: Don't catch error here. Ugly undefined
export const paymentAddEmail = async (
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
  email: string
): Promise<void> => {
  const variables: PaymentAddEmail.Variables = {
    email
  };
  const { data } = await vue.$apollo.mutate<PaymentAddEmail.Mutation>({
    mutation: PAYMENT_ADD_EMAIL,
    variables
  });
  const resp = data.paymentEmailAdd;
  vue.$handleError(resp.err, PAYMENT_ADD_EMAIL, variables);
};

export const reportCBPayment = async (
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
  txID: string
): Promise<void> => {
  const variables: ReportCbPayment.Variables = {
    txID
  };
  const { data } = await vue.$apollo.mutate<ReportCbPayment.Mutation>({
    mutation: REPORT_CB_PAYMENT,
    variables
  });
  const resp = data.reportCBPayment;
  vue.$handleError(resp.err, REPORT_CB_PAYMENT, variables);
};

export const amazonPaymentInitiate = async (
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
  input: InitiateAmazonPaymentInput
): Promise<AmazonPaymentInitiate.AmazonPaymentInitiate> => {
  const variables: AmazonPaymentInitiate.Variables = {
    input
  };
  const { data } = await vue.$apollo.mutate<AmazonPaymentInitiate.Mutation>({
    mutation: AMAZON_PAYMENT_INITIATE,
    variables
  });
  const resp = data.amazonPaymentInitiate;
  vue.$handleError(resp.err, AMAZON_PAYMENT_INITIATE, variables);
  return resp;
};

export const skrillToken = async (
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
  item: SkrillPaymentType,
  email: string
): Promise<SkrillToken.SkrillToken> => {
  const variables: SkrillToken.Variables = {
    item,
    email
  };
  const { data } = await vue.$apollo.mutate<SkrillToken.Mutation>({
    mutation: SKRILL_TOKEN,
    variables
  });
  const resp = data.skrillToken;
  vue.$handleError(resp.err, SKRILL_TOKEN, variables);
  return resp;
};

export const cashinRefundRequest = async (
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
  id: string,
  reason: string
): Promise<void> => {
  const variables: CashinRefundRequest.Variables = {
    id,
    reason
  };
  const { data } = await vue.$apollo.mutate<CashinRefundRequest.Mutation>({
    mutation: CASHIN_REFUND_REQUEST,
    variables
  });
  const resp = data.cashinRefundRequest;
  vue.$handleError(resp.err, CASHIN_REFUND_REQUEST, variables);
};

export const rebillyPaymentProcess = async (
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
  item: RebillyPaymentType,
  cardID: string,
  token: string,
  save: boolean
): Promise<void> => {
  const variables: RebillyPaymentProcess.Variables = {
    item,
    cardID,
    token,
    save
  };
  const { data } = await vue.$apollo.mutate<RebillyPaymentProcess.Mutation>({
    mutation: REBILLY_PAYMENT_PROCESS,
    variables
  });
  const resp = data.rebillyPaymentProcess;
  vue.$handleError(resp.err, REBILLY_PAYMENT_PROCESS, variables);
};

export const rebillyCardDeactivate = async (
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
  cardID: string,
  id: string
): Promise<void> => {
  const variables: RebillyCardDeactivate.Variables = {
    cardID
  };
  const { data } = await vue.$apollo.mutate<RebillyCardDeactivate.Mutation>({
    mutation: REBILLY_CARD_DEACTIVATE,
    variables
  });
  const resp = data.rebillyCardDeactivate;
  vue.$handleError(resp.err, REBILLY_CARD_DEACTIVATE, variables);
  vue.$success('Delete address success');
  const err = writeRebillyCardsDeleteCache(
    vue.$apollo.provider.defaultClient,
    cardID,
    id
  );
  if (err !== undefined) {
    throw err;
  }
};
