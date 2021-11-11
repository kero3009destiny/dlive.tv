import {
  InMemoryCache,
  defaultDataIdFromObject,
  NormalizedCacheObject,
  IntrospectionFragmentMatcher,
  IdGetterObj
} from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { OperationDefinitionNode } from 'graphql';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { Store } from 'vuex';
import fetch from 'node-fetch';
import MessageTypes from 'subscriptions-transport-ws/dist/message-types';
import { RootState } from '../store/types';
import { onError } from 'apollo-link-error';
import { ServerQueryError } from '@/models/error';
import * as Sentry from '@sentry/browser';

// @ts-ignore
import introspectionQueryResultData from '../fragmentTypes.json';

Vue.use(VueApollo);

// FIXME: cannot use SubscriptionClient to replace any since the connect method is private
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function restartWebsockets(wsClient: any): void {
  // Copy current operations
  const operations = Object.assign({}, wsClient.operations);

  // Close connection
  wsClient.close(true);

  // Open a new one
  wsClient.connect();

  // Push all current operations to the new connection
  Object.keys(operations).forEach(id => {
    wsClient.sendMessage(id, MessageTypes.GQL_START, operations[id].options);
  });
}

// Manually call this when user log in
export async function onLogin(
  apolloClient: ApolloClient<NormalizedCacheObject> & {
    wsClient?: SubscriptionClient;
  }
): Promise<void> {
  if (apolloClient.wsClient) {
    restartWebsockets(apolloClient.wsClient);
  }
  try {
    apolloClient.resetStore();
  } catch (e) {
    // console.log('%cError on cache reset (login)', 'color: orange;', e.message);
  }
  // Set Access Token after apolloClient.resetStore finish for GlobalMe
  // to query me afterwards
}

// Manually call this when user log out
export async function onLogout(
  apolloClient: ApolloClient<NormalizedCacheObject> & {
    wsClient?: SubscriptionClient;
  }
): Promise<void> {
  if (apolloClient.wsClient) {
    restartWebsockets(apolloClient.wsClient);
  }
  try {
    await apolloClient.resetStore();
  } catch (e) {
    // console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
  }
}

export function createProvider(
  store: Store<RootState>,
  options = {}
): VueApollo {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });

  const cache = new InMemoryCache({
    fragmentMatcher,
    // Custom cache id since we don't have a universal unique id for each object
    // This requires the query to include `__typename`
    dataIdFromObject: (object: IdGetterObj) => {
      if (object.__typename === 'StreamchatUser') {
        return 'StreamchatUser' + Math.random();
      } else if (object.id !== undefined) {
        return object.id;
      } else {
        return defaultDataIdFromObject(object);
      }
    }
  });
  if (process.client) {
    const apolloState = window.__APOLLO_STATE__;
    if (apolloState) {
      cache.restore(apolloState.defaultClient);
    }
  }

  // Create an http link:
  const httpLink = new HttpLink({
    uri:
      (global.backendURL ? global.backendURL : '') ||
      process.env.VUE_APP_GRAPHQL_HTTP ||
      'https://graphigo.stg.dlive.tv/',
    fetch
  });
  const apqLink = createPersistedQueryLink();

  const errorLink = onError(({ operation, graphQLErrors }) => {
    if (graphQLErrors !== undefined) {
      const error = new ServerQueryError(
        graphQLErrors,
        operation.operationName,
        operation.variables
      );
      Sentry.captureException(error);
    }
  });

  const ipLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so hif ttpLink can read them
    if (process.client) {
      await store.dispatch('userMeta/fetchFingerprint');
    }
    const authorization = store.getters['accessToken/token'];
    const fingerprint = store.getters['userMeta/fingerprint'];
    const authorizationHeader = authorization !== null ? { authorization } : {};
    const IP = store.getters['userMeta/ip'];
    const dliveIP = IP && process.server ? { 'dlive-client-ip': IP } : {};
    const Xdlive = {
      'x-dlive-mtype': 'web',
      'x-dlive-mid': fingerprint,
      'x-dlive-mversion': process.env.VUE_APP_RELEASE || 'local'
    };
    let gacid;
    if (process.client && typeof ga !== 'undefined') {
      // FIXME(@ning)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ga((tracker: any) => {
        gacid = tracker.get('clientId');
      });
    }
    return {
      headers: {
        gacid,
        fingerprint,
        ...headers,
        ...authorizationHeader,
        ...dliveIP,
        ...Xdlive
      }
    };
  });

  const timeoutLink = new ApolloLinkTimeout(process.client ? 10000 : 3000); // 3 second timeout

  const concatLink = process.server
    ? ApolloLink.from([timeoutLink, errorLink, httpLink])
    : ApolloLink.from([errorLink, httpLink]);

  const httpIpLink = ipLink.concat(concatLink);

  let link;

  if (process.client) {
    const websocketLink = new WebSocketLink({
      uri: process.env.VUE_APP_GRAPHQL_WS || '',
      options: {
        lazy: true,
        reconnect: true
      }
    });
    link = split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      websocketLink,
      httpIpLink
    );
  } else {
    link = httpIpLink;
  }

  const state = withClientState({
    cache,
    defaults: {},
    resolvers: {}
    // ...{
    //   defaults,
    //   resolvers
    // }
  });

  link = ApolloLink.from([apqLink, state, link]);
  const defaultOptions = {
    ...(process.server
      ? {}
      : {
          ssrForceFetchDelay: 10000,
          // Apollo devtools
          connectToDevTools: process.env.NODE_ENV !== 'production'
        }),
    cache,
    link
  };

  const apolloClient = new ApolloClient({
    ...defaultOptions,
    defaultOptions: {
      watchQuery: {
        errorPolicy: process.server ? 'none' : 'all'
      },
      query: {
        errorPolicy: process.server ? 'none' : 'all'
      }
    },
    ...options
  });

  if (state) {
    // FIXME(@ning)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apolloClient.onResetStore(state.writeDefaults as any);
  }
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  });
  return apolloProvider;
}
