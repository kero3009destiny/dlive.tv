import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client';

import { createApp } from './main';

createApp(
  false,
  '',
  async ({ router }) => {
    await loadAsyncComponents({ router });
  },
  ({ app, router }) => {
    router.onReady(() => {
      app.$mount('#app');
    });
  }
);
