import Router, { Route, Location, RouteConfig } from 'vue-router';
import Meta from 'vue-meta';
import { RootState } from './store/types';
import { Store } from 'vuex';
import Vue, { AsyncComponent } from 'vue';
import { Dga } from './api/dga';
Vue.use(Router);
Vue.use(Meta);

const lazy = (name: string): AsyncComponent => {
  return () => import(`@/views/${name}.vue`);
};

export const ROUTE_HOME = 'Home';
export const ROUTE_MOBILE_HOME = 'MobileHome';
export const ROUTE_MOBILE_SEARCH = 'MobileSearch';
export const ROUTE_LIVESTREAM = 'Livestream';
export const ROUTE_DASHBOARD = 'Dashboard';
export const ROUTE_MOBILE_DASHBOARD = 'MobileDashboard';
export const ROUTE_FOLLOWING = 'Following';
export const ROUTE_RANKLIST = 'RankList';
export const ROUTE_PARTNER_PROGRESS = 'PartnerProgress';
export const ROUTE_SEARCH = 'Search';
export const ROUTE_BROWSE = 'Browse';
export const ROUTE_VIDEO = 'Video';
export const ROUTE_PAST_BROADCAST = 'PastBroadcast';
export const ROUTE_SETTINGS = 'Settings';
export const CB_PAYMENT_SUCCESS = 'PaymentSuccess';
export const CB_PAYMENT_FAIL = 'PaymentFail';
export const CB_PAYMENT_EPIN_COMPLETE = 'PaymentEpinComplete';
export const ROUTE_MY_SUBSCRIPTIONS = 'MySubscriptions';
export const CB_SUB_PAYMENT_SUCCESS = 'SubPaymentSuccess';
export const CB_SUB_PAYMENT_FAIL = 'GiftPaymentFail';
export const CB_GIFT_PAYMENT_SUCCESS = 'GiftPaymentSuccess';
export const CB_GIFT_PAYMENT_FAIL = 'SubPaymentFail';
export const ROUTE_MY_PURCHASE = 'MyPurchase';
export const ROUTE_UPLOAD = 'Upload';
export const ROUTE_GAME = 'Game';
export const ROUTE_GAME_NAME = 'GameName';
// export const ROUTE_REFERRAL = 'Referral';
export const ROUTE_USER_REFERRAL = 'UserReferral';
export const ROUTE_POPUP_CHAT = 'PopupChat';
export const ROUTE_POPUP_ACTIVITY_FEED = 'PopupActivityFeed';
export const ROUTE_NOT_FOUND = '404';
export const LIVESTREAM_USERNAME = 'LivestreamUsername';
export const ROUTE_PAYMENT = 'Payment';
export const ROUTE_VERIFY = 'Verify';
export const ROUTE_CLIP_PUBLISH = 'ClipPublish';
export const ROUTE_CLIP_MANAGE = 'ClipManage';
export const ROUTE_CLIP = 'Clip';
export const ROUTE_HIGHLIGHT = 'Highlight';
export const ROUTE_CLIP_IFRAME = 'ClipIframe';
export const ROUTE_LIVESTREAM_IFRAME = 'LivestreamIframe';
export const ROUTE_KYC_VERIFY = 'KycVerify';
export const CB_PAYMENT_ADDRESS_SUCCESS = 'PaymentAddressSuccess';
export const ROUTE_STAKE = 'Stake';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: ROUTE_HOME,
    component: lazy('Home'),
    props: route => ({ from: route.params.from }),
    meta: { requiresDesktop: true, mobileUrl: '/m/home' }
  },
  {
    path: '/m/home',
    name: ROUTE_MOBILE_HOME,
    component: lazy('MobileHome'),
    meta: { requiresMobile: true, desktopUrl: '/' }
  },
  {
    path: '/m/search',
    name: ROUTE_MOBILE_SEARCH,
    component: lazy('MobileSearch'),
    meta: { requiresMobile: true, desktopUrl: '/' }
  },
  {
    path: '/s/dashboard',
    name: ROUTE_DASHBOARD,
    component: lazy('Dashboard')
  },
  {
    path: '/m/dashboard',
    name: ROUTE_MOBILE_DASHBOARD,
    component: lazy('MobileDashboard'),
    meta: { requiresMobile: true }
  },
  {
    path: '/s/following',
    name: ROUTE_FOLLOWING,
    component: lazy('Following')
  },
  {
    path: '/s/ranklist',
    name: ROUTE_RANKLIST,
    component: lazy('RankList')
  },
  {
    path: '/s/partner-progress',
    name: ROUTE_PARTNER_PROGRESS,
    component: lazy('PartnerProgress')
    // meta: { requiresAuth: true }
  },
  {
    path: '/s/kyc',
    name: ROUTE_KYC_VERIFY,
    component: lazy('KycVerify')
    // props: true
    // meta: { requiresAuth: true }
  },
  // {
  //   path: '/s/search/:keyword',
  //   name: ROUTE_SEARCH,
  //   component: lazy('Search'),
  //   props: true
  // },
  {
    path: '/s/browse',
    name: ROUTE_BROWSE,
    component: lazy('Browse')
  },
  {
    path: '/s/stake',
    name: ROUTE_STAKE,
    component: lazy('Stake')
  },
  // {
  //   path: '/s/referral',
  //   name: ROUTE_REFERRAL,
  //   component: lazy('StreamerReferral')
  // },
  {
    path: '/s/userreferral',
    name: ROUTE_USER_REFERRAL,
    component: lazy('UserReferral')
  },
  {
    path: '/s/payment',
    name: ROUTE_PAYMENT,
    component: lazy('Payment')
  },
  {
    path: '/s/developer-only',
    name: 'test',
    component: lazy('Developer')
    // meta: { requiresAuth: true }
  },
  {
    path: '/v/:permlink',
    name: ROUTE_VIDEO,
    component: lazy('Video'),
    props: true
  },
  {
    path: '/p/:permlink',
    name: ROUTE_PAST_BROADCAST,
    component: lazy('PastBroadcast'),
    props: true
  },
  {
    path: '/u/:username',
    name: LIVESTREAM_USERNAME,
    component: lazy('LivestreamUsername'),
    props: true
  },
  {
    path: '/s/settings',
    name: ROUTE_SETTINGS,
    component: lazy('Settings'),
    props: route => ({ openTab: route.query.open })
  },
  {
    path: '/cb/payment/success',
    name: CB_PAYMENT_SUCCESS,
    component: lazy('Home')
  },
  {
    path: '/cb/subscription/recurring/:payment/fail/:displayname',
    name: CB_SUB_PAYMENT_FAIL,
    component: lazy('Livestream'),
    props: route => ({
      displayname: route.params.displayname,
      payment: route.params.payment
    })
  },
  {
    path: '/cb/subscription/gift/:payment/success/:displayname',
    name: CB_GIFT_PAYMENT_SUCCESS,
    component: lazy('Livestream'),
    props: route => ({
      displayname: route.params.displayname,
      payment: route.params.payment
    })
  },
  {
    path: '/cb/subscription/gift/:payment/fail/:displayname',
    name: CB_GIFT_PAYMENT_FAIL,
    component: lazy('Livestream'),
    props: route => ({
      displayname: route.params.displayname,
      payment: route.params.payment
    })
  },
  {
    path: '/cb/subscription/recurring/:payment/success/:displayname',
    name: CB_SUB_PAYMENT_SUCCESS,
    component: lazy('Livestream'),
    props: route => ({
      displayname: route.params.displayname,
      payment: route.params.payment
    })
  },
  {
    path: '/cb/payment/epin/complete',
    name: CB_PAYMENT_EPIN_COMPLETE,
    component: lazy('Home')
  },
  {
    path: '/cb/payment/address/success',
    name: CB_PAYMENT_ADDRESS_SUCCESS,
    component: lazy('PaymentAddressSuccess')
  },
  {
    path: '/cb/payment/fail',
    name: CB_PAYMENT_FAIL,
    component: lazy('Home')
  },
  {
    path: '/s/mysubscriptions',
    name: ROUTE_MY_SUBSCRIPTIONS,
    component: lazy('MySubscriptions')
  },
  {
    path: '/s/mypurchase',
    name: ROUTE_MY_PURCHASE,
    component: lazy('MyPurchase')
  },
  {
    path: '/s/verify',
    name: ROUTE_VERIFY,
    component: lazy('Settings'),
    props: () => ({
      openTab: 'email'
    })
  },
  {
    path: '/s/upload',
    name: ROUTE_UPLOAD,
    component: lazy('Upload')
  },
  {
    path: '/s/browse/:categoryID',
    name: ROUTE_GAME,
    component: lazy('CategoryLivestreams'),
    props: route => ({
      categoryID: route.params.categoryID
    })
  },
  {
    path: '/s/browse/:categoryID/:categoryName',
    name: ROUTE_GAME_NAME,
    component: lazy('CategoryLivestreams'),
    props: route => ({
      categoryID: route.params.categoryID,
      categoryName: route.params.categoryName
    })
  },
  {
    path: '/clip/:clipID',
    name: ROUTE_CLIP,
    component: lazy('ClipPage'),
    props: true
  },
  {
    path: '/highlight/:clipID',
    name: ROUTE_HIGHLIGHT,
    component: lazy('ClipPage'),
    props: true
  },
  {
    path: '/embed/:clipID',
    name: ROUTE_CLIP_IFRAME,
    component: lazy('ClipIframe'),
    props: true
  },
  {
    path: '/embed/livestream/:displayname',
    name: ROUTE_LIVESTREAM_IFRAME,
    component: lazy('LivestreamIframe'),
    props: true
  },
  {
    path: '/s/clippublish/:username',
    name: ROUTE_CLIP_PUBLISH,
    component: lazy('ClipPublish'),
    props: route => ({
      username: route.params.username
    })
  },
  {
    path: '/s/clipmanage',
    name: ROUTE_CLIP_MANAGE,
    component: lazy('ClipManage'),
    props: true
  },
  {
    path: '/c/activity',
    name: ROUTE_POPUP_ACTIVITY_FEED,
    component: lazy('ActivityFeedPopup'),
    props: true
  },
  {
    path: '/c/:displayname/:permlink',
    name: ROUTE_POPUP_CHAT,
    component: lazy('LivestreamChatroomPopup'),
    props: true
  },
  {
    path: '/:displayname',
    name: ROUTE_LIVESTREAM,
    component: lazy('Livestream'),
    props: true
  },
  {
    path: '*',
    name: ROUTE_NOT_FOUND,
    redirect: '/'
  }
];

function hasQueryGXC(route: Route): boolean {
  return route.query.gxc !== undefined;
}

export const beforeEach = (
  store: Store<RootState>,
  to: Route,
  from: Route,
  next: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to?: string | false | void | Location | ((vm: Vue) => any) | undefined
  ) => void
): void => {
  if (process.client) {
    Dga('set', 'page', to.path);
    Dga('send', 'pageview');
  }
  // if (
  //   to.matched.some(record => record.meta.requiresAuth) &&
  //   !store.getters['accessToken/token']
  // ) {
  //   next('/');
  if (to.query.signup === '1') {
    store.commit('dialog/setLoginDialog', 'signup');
  }
  store.commit('ui/resetViewPointWidth');

  if (process.client && !store.getters['ui/isMobile']) {
    const temp = to.matched.filter(record => record.meta.requiresMobile);
    if (temp.length > 0) {
      next(temp[0].meta.desktopUrl);
    } else {
      if (!hasQueryGXC(to) && hasQueryGXC(from)) {
        next({ name: to.name + '', params: to.params, query: { gxc: 'true' } });
      } else {
        next();
      }
    }
  } else if (process.client && store.getters['ui/isMobile']) {
    const temp = to.matched.filter(record => record.meta.requiresDesktop);
    if (temp.length > 0) {
      if (!hasQueryGXC(to) && hasQueryGXC(from)) {
        next(temp[0].meta.mobileUrl + to.fullPath + '?gxc=true');
      } else {
        next(temp[0].meta.mobileUrl + to.fullPath);
      }
    } else {
      if (!hasQueryGXC(to) && hasQueryGXC(from)) {
        next({ name: to.name + '', params: to.params, query: { gxc: 'true' } });
      } else {
        next();
      }
    }
  } else {
    next();
  }
};

export function createRouter(store: Store<RootState>): Router {
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });
  router.beforeEach((to, from, next) => beforeEach(store, to, from, next));
  return router;
}

export const replaceWithoutQueryAndHash = (vue: Vue): void => {
  const currentRoute = vue.$router.currentRoute;
  vue.$router.replace({
    name: currentRoute.name + '',
    params: currentRoute.params
  });
};
