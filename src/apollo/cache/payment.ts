import { BankAddressesFrag, DAddressCardFrag } from '@/graphql/types';
import ApolloClient from 'apollo-client';
import BANK_ADDRESSED_FRAG from '@/graphql/fragments/BankAddersses.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

// This should only be called if logged in and `isFollowing` and `isMe` is in cache.
export const writeBankAddressAddCache = (
  client: ApolloClient<NormalizedCacheObject>,
  bankAddress: DAddressCardFrag.Fragment,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: BANK_ADDRESSED_FRAG,
    fragmentName: 'BankAddressesFrag'
  };
  let data: BankAddressesFrag.Fragment | null;
  try {
    data = client.readFragment<BankAddressesFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no bank address fragment found with id: ${id}`);
  }
  if (
    data !== undefined &&
    data.private &&
    data.private.bankAddresses !== undefined
  ) {
    data.private.bankAddresses.push(bankAddress);
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeBankAddressDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  userId: string,
  id: string
): InternalError | undefined => {
  const param = {
    id: userId,
    fragment: BANK_ADDRESSED_FRAG,
    fragmentName: 'BankAddressesFrag'
  };
  let data: BankAddressesFrag.Fragment | null;
  try {
    data = client.readFragment<BankAddressesFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no bank address fragment found with id: ${id}`);
  }
  if (
    data !== undefined &&
    data.private &&
    data.private.bankAddresses !== undefined
  ) {
    data.private.bankAddresses = data.private.bankAddresses.filter(
      bankAddress => {
        return bankAddress.id !== id;
      }
    );
    client.writeFragment({
      ...param,
      data
    });
  }
};
