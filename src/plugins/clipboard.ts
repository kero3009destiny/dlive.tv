import VueClipboard from 'vue-clipboard2';
import Vue from 'vue';

Vue.use(VueClipboard);

declare module 'vue-clipboard2' {
  // eslint-disable-next-line
  export const VueClipboard2: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $copyText: (url: string) => Promise<void>;
  }
}
