import Vue from 'vue';
import { CompleteMe } from '@/store/me/types';
import CLAIM_WALLET_ACCOUNT from '@/graphql/mutations/ClaimLinoAccount.graphql';
import INSECURE_REFETCH from '@/graphql/queries/InsecureRefetch.graphql';
import { ClaimWalletAccount, InsecureRefetch } from '@/graphql/types';
import { DocumentNode } from 'graphql';
import { InternalError } from '@/models/error';

export const claimWalletAccount = async (
  vue: Vue & {
    me: CompleteMe | null;
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
  }
): Promise<void> => {
  const newWindow = window.open('', '_blank');
  const mutation = CLAIM_WALLET_ACCOUNT;
  const { data } = await vue.$apollo.mutate<ClaimWalletAccount.Mutation>({
    mutation
  });
  const resp = data.claimLinoAccount;
  vue.$handleError(resp.err, mutation, {});
  if (vue.me === null || vue.me.username === undefined) {
    throw new InternalError(
      `claimWalletAccount missing me or me.username, me: ${JSON.stringify(
        vue.me
      )}`
    );
  }
  if (resp.token === null) {
    vue.$handleInconsistentError(resp, ['token'], mutation, {});
    return;
  }

  // XXX(jiayi): Update insecure even user dosen't fresh page
  const variables: InsecureRefetch.Variables = {
    username: vue.me.username
  };
  vue.$apollo.query<InsecureRefetch.Query>({
    query: INSECURE_REFETCH,
    fetchPolicy: 'network-only',
    variables
  });
  if (newWindow) {
    newWindow.location.href = `${process.env.VUE_APP_WALLET_URL}/claim?token=${
      resp.token
    }&username=${vue.me.username}`;
  }
};
