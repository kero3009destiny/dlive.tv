import PARTNER_APPLICATION_ADD from '@/graphql/mutations/PartnerApplicationAdd.graphql';
import PARTNER_STATUS_RENEW from '@/graphql/mutations/PartnerStatusRenew.graphql';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import {
  PartnerApplicationInput,
  PartnerApplicationAdd,
  RenewPartnerStatus,
  PartnerStatus
} from '@/graphql/types';

export const partnerApplicationAdd = async (
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
  input: PartnerApplicationInput
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<PartnerApplicationAdd.Mutation>({
    mutation: PARTNER_APPLICATION_ADD,
    variables: { input }
  });
  const resp = data.partnerApplicationAdd;
  vue.$handleError(resp.err, PARTNER_APPLICATION_ADD, input);
  vue.$success('PartnerProgression.ApplySuccess');
};

export const partnerStatusRenew = async (
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
  partnerStatus: PartnerStatus
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<RenewPartnerStatus.Mutation>({
    mutation: PARTNER_STATUS_RENEW,
    variables: {
      partnerStatus
    }
  });
  const resp = data.partnerStatusRenew;
  vue.$handleError(resp.err, PARTNER_STATUS_RENEW, { partnerStatus });
  vue.$success('PartnerProgression.renewSuccess');
};
