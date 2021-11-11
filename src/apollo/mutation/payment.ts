import BANK_ADDRESS_ADD from '@/graphql/mutations/BankAddressAdd.graphql';
import BANK_ADDRESS_DELETE from '@/graphql/mutations/BankAddressDelete.graphql';
import CASH_OUT_REQUEST from '@/graphql/mutations/CashOutRequest.graphql';
import CASH_OUT_CODE_CHECK from '@/graphql/mutations/CashOutCodeCheck.graphql';
import TAX_INFO_ADD from '@/graphql/mutations/TaxInfoAdd.graphql';
import KYC_START from '@/graphql/mutations/KycStart.graphql';
import VERIFICATION_CODE_RESEND from '@/graphql/mutations/VerificationCodeResend.graphql';
import KYC_APPLICANT_ADD from '@/graphql/mutations/KycApplicantAdd.graphql';
import KYC_ONFIDO_TOKEN_GENERATE from '@/graphql/mutations/KycOnfidoTokenGenerate.graphql';
import TIPALTI_IFRAME_KEY from '@/graphql/mutations/TipaltiIFrameKey.graphql';
import {
  BankAddressAdd,
  BankAddressDelete,
  AddBankAddressInput,
  CashOutRequest,
  RequestCashOutInput,
  CashOutCodeCheck,
  AddTaxInfoInput,
  TaxInfoAdd,
  KycStart,
  VerificationCodeResend,
  KycApplicantAdd,
  KycOnfidoTokenGenerate,
  TipaltiIFrameKey
} from '@/graphql/types';
import {
  writeBankAddressAddCache,
  writeBankAddressDeleteCache
} from '../cache/payment';
import { DocumentNode } from 'graphql';
import Vue from 'vue';

export const bankAddressAdd = async (
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
  input: AddBankAddressInput,
  id: string
): Promise<BankAddressAdd.BankAddress | undefined> => {
  const variables: BankAddressAdd.Variables = {
    input
  };
  const { data } = await vue.$apollo.mutate<BankAddressAdd.Mutation>({
    mutation: BANK_ADDRESS_ADD,
    variables
  });
  const resp = data.bankAddressAdd;
  vue.$handleError(resp.err, BANK_ADDRESS_ADD, variables);
  vue.$success('Add address success');
  if (resp.bankAddress !== null) {
    const err = writeBankAddressAddCache(
      vue.$apollo.provider.defaultClient,
      resp.bankAddress,
      id
    );
    if (err !== undefined) {
      throw err;
    }
    return resp.bankAddress;
  }
};

export const bankAddressDelete = async (
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
  id: string,
  userId: string
): Promise<boolean | undefined> => {
  const variables: BankAddressDelete.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<BankAddressDelete.Mutation>({
    mutation: BANK_ADDRESS_DELETE,
    variables
  });
  const resp = data.bankAddressDelete;
  vue.$handleError(resp.err, BANK_ADDRESS_DELETE, variables);
  vue.$success('Delete address success');
  const err = writeBankAddressDeleteCache(
    vue.$apollo.provider.defaultClient,
    userId,
    id
  );
  if (err !== undefined) {
    throw err;
  }
  return true;
};

export const cashOutRequest = async (
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
  input: RequestCashOutInput
): Promise<CashOutRequest.CashOutRequest | undefined> => {
  const variables: CashOutRequest.Variables = {
    input
  };
  const { data } = await vue.$apollo.mutate<CashOutRequest.Mutation>({
    mutation: CASH_OUT_REQUEST,
    variables
  });
  const resp = data.cashOutRequest;
  vue.$handleError(resp.err, CASH_OUT_REQUEST, variables);
  return resp;
};

export const cashOutCodeCheck = async (
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
): Promise<CashOutCodeCheck.CashOutCodeCheck | undefined> => {
  const variables: CashOutCodeCheck.Variables = {
    code
  };
  const { data } = await vue.$apollo.mutate<CashOutCodeCheck.Mutation>({
    mutation: CASH_OUT_CODE_CHECK,
    variables
  });
  const resp = data.cashOutCodeCheck;
  vue.$handleError(resp.err, CASH_OUT_CODE_CHECK, variables);
  return resp;
};

export const taxInfoAdd = async (
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
  input: AddTaxInfoInput
): Promise<boolean | undefined> => {
  const variables: TaxInfoAdd.Variables = {
    input
  };
  const { data } = await vue.$apollo.mutate<TaxInfoAdd.Mutation>({
    mutation: TAX_INFO_ADD,
    variables
  });
  const resp = data.taxInfoAdd;
  vue.$handleError(resp.err, TAX_INFO_ADD, variables);
  vue.$success('Tax info added');
  return true;
};

export const kycStart = async (
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
): Promise<string | undefined> => {
  const { data } = await vue.$apollo.mutate<KycStart.Mutation>({
    mutation: KYC_START
  });
  const resp = data.kycStart;
  vue.$handleError(resp.err, KYC_START);
  if (resp.url !== null) {
    return resp.url;
  }
};

export const kycApplicantAdd = async (
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
  firstName: string,
  lastName: string
): Promise<void> => {
  const variables: KycApplicantAdd.Variables = {
    firstName,
    lastName
  };
  const { data } = await vue.$apollo.mutate<KycApplicantAdd.Mutation>({
    mutation: KYC_APPLICANT_ADD,
    variables
  });
  const resp = data.kycApplicantAdd;
  vue.$handleError(resp.err, KYC_START);
};

export const verificationCodeResend = async (
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
  }
): Promise<boolean | undefined> => {
  const { data } = await vue.$apollo.mutate<VerificationCodeResend.Mutation>({
    mutation: VERIFICATION_CODE_RESEND
  });
  const resp = data.verificationCodeResend;
  vue.$handleError(resp.err, VERIFICATION_CODE_RESEND);
  vue.$success('Resend success');
  return true;
};

export const kycOnfidoTokenGenerate = async (
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
  referrer: string
): Promise<string | undefined> => {
  const variables: KycOnfidoTokenGenerate.Variables = {
    referrer
  };
  const { data } = await vue.$apollo.mutate<KycOnfidoTokenGenerate.Mutation>({
    mutation: KYC_ONFIDO_TOKEN_GENERATE,
    variables
  });
  const resp = data.kycOnfidoTokenGenerate;
  vue.$handleError(resp.err, VERIFICATION_CODE_RESEND);
  return resp.token;
};

export const tipaltiIFrameKey = async (
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
  id: string
): Promise<string | undefined> => {
  const variables: TipaltiIFrameKey.Variables = {
    id
  };
  const { data } = await vue.$apollo.mutate<TipaltiIFrameKey.Mutation>({
    mutation: TIPALTI_IFRAME_KEY,
    variables
  });
  const resp = data.tipaltiIFrameKey;
  vue.$handleError(resp.err, TIPALTI_IFRAME_KEY, variables);
  return resp.key;
};
