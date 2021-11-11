import { MutationTree } from 'vuex';
import { MeState } from './types';
import { MeComplete } from '@/graphql/types';
// import Vue from 'vue';
import * as Sentry from '@sentry/browser';
// import { CompleteMe } from './types';
// import { State } from 'vuex-class';
// import { PartnerProgressPage, SubscribingList } from '@/graphql/types';

export const mutations: MutationTree<MeState> = {
  setMe(state, me: MeComplete.Me) {
    state.me = me;
    const user: Sentry.User = {
      id: me.username,
      username: me.displayname
      // TODO(@ryan): IP
    };
    Sentry.configureScope(scope => {
      scope.setUser(user);
    });
  },
  resetMe(state) {
    Sentry.configureScope(scope => {
      // TODO(@ryan): IP
      scope.setUser({});
    });
    state.me = null;
  }
};
