import Vue from 'vue';
import App from './App.vue';
import { createProvider } from './plugins/apollo';
import { getApolloManager } from './plugins/apolloManager';
import { minervaEvent } from './plugins/minerva';
import { createRouter } from './router';
import { createStore, restoreFromLocal } from './store';
import { createI18n } from './i18n';
import { makeEventBus } from './utils/eventbus';
import VueRouter from 'vue-router';
import ApolloSSR from 'vue-apollo/ssr';

import './plugins';

import '@/assets/stylus/index.styl';
import { Store } from 'vuex';
import { RootState } from './store/types';
import VueApollo from 'vue-apollo';
import { dataPoint } from './plugins/dataCollection';

Vue.config.productionTip = false;

declare global {
  interface Window {
    tronWeb: any;
    billingAgreementId: string;
    amazon: any;
    buyerBillingAgreementConsentStatus: string;
    onAmazonPaymentsReady: any;
  }
}

export async function createApp(
  isMobile: boolean,
  region: string,
  beforeApp?: (a: {
    router: VueRouter;
    store: Store<RootState>;
    apolloProvider: VueApollo;
  }) => void,
  afterApp?: (a: {
    router: VueRouter;
    store: Store<RootState>;
    apolloProvider: VueApollo;
    app: Vue;
  }) => void
): Promise<{
  app: Vue;
  router: VueRouter;
  store: Store<RootState>;
  apolloProvider: VueApollo;
}> {
  if (process.env.NODE_ENV === 'production') {
    // console.error(process.memoryUsage());
  }
  const store = createStore();
  if (process.server) {
    store.commit('ui/initializeMq', isMobile);
    store.commit('ui/setIsMobile', isMobile);
  }

  let i18n;

  if (process.client) {
    if (window.__INITIAL_STATE__) {
      // @ts-ignore
      store.replaceState(window.__INITIAL_STATE__);
    }
    restoreFromLocal(store);
    i18n = await createI18n(store.getters['userMeta/langCode']);
    // minervaInit();
  } else {
    i18n = await createI18n(region);
  }

  const router = createRouter(store);

  let apolloProvider;
  if (process.server && global.enableApolloCache === 'true') {
    let Manager;
    Manager = getApolloManager();
    if (Manager.checkProvider()) {
      let previousProvider = Manager.getProvider() as VueApollo | null;
      apolloProvider = createProvider(store);
      const previousState = ApolloSSR.getStates(previousProvider);
      apolloProvider.defaultClient.cache.restore(previousState.defaultClient);
      previousProvider = null;
      Manager.setProvider(apolloProvider, false);
    } else {
      apolloProvider = createProvider(store);
      Manager.setProvider(apolloProvider, true);
    }
  } else {
    apolloProvider = createProvider(store);
  }

  if (beforeApp) {
    await beforeApp({
      router,
      store,
      apolloProvider
    });
  }

  makeEventBus();

  const app = new Vue({
    router,
    store,
    i18n,
    apolloProvider,
    render: h => h(App)
  });

  const lazyloadCropper = (): Promise<typeof import('*.vue')> =>
    import('./components/VImageCropper.vue' /* webpackChunkName: "cropper" */);
  const lazyloadInfiniteLoading = (): Promise<typeof import('*.vue')> =>
    import('vue-infinite-loading' /* webpackChunkName: "infiniteload" */);
  if (process.client) {
    Vue.component('VImageCropper', lazyloadCropper);
    Vue.component('InfiniteLoading', lazyloadInfiniteLoading);
  }

  const result = {
    app,
    router,
    store,
    apolloProvider
  };

  if (afterApp) {
    await afterApp(result);
  }

  if (process.client) {
    minervaEvent('active');
    dataPoint('active', {});
  }
  return result;
}
