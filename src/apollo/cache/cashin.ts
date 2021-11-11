import { MeRebillyCardsFrag } from '@/graphql/types';
import ApolloClient from 'apollo-client';
import ME_REBILLY_CARDS_FRAG from '@/graphql/fragments/MeRebillyCardsFrag.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

export const writeRebillyCardsDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  cardID: string,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: ME_REBILLY_CARDS_FRAG
  };
  let data: MeRebillyCardsFrag.Fragment | null;
  try {
    data = client.readFragment<MeRebillyCardsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no me rebilly cards fragment found with id: ${id}`
    );
  }
  if (
    data !== undefined &&
    data.private &&
    data.private.userRebillyCards !== undefined
  ) {
    data.private.userRebillyCards = data.private.userRebillyCards.filter(
      card => {
        return card.id !== cardID;
      }
    );
    client.writeFragment({
      ...param,
      data
    });
  }
};
