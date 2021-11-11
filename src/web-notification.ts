// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// import 'firebase/firestore';
// import 'firebase/messaging';

import Vue from 'vue';
import {
  browserRegisterNotification,
  browserDeregisterNotification
} from '@/apollo/mutation/notification';
import { DocumentNode } from 'graphql';
import { dataPoint } from '@/plugins/dataCollection';

const firebaseConfig = {
  apiKey: 'AIzaSyBYZZ4iDOXEGMukG_xidlHVFfgtY7nz4fM',
  authDomain: 'dlive-android.firebaseapp.com',
  databaseURL: 'https://dlive-android.firebaseio.com',
  projectId: 'dlive-android',
  storageBucket: 'dlive-android.appspot.com',
  messagingSenderId: '938938397136',
  appId: '1:938938397136:web:bc942f825a1f3c43'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let firebase: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let messaging: any = null;
let localVue:
  | (Vue & {
      $handleError(
        err: {
          code: number;
          message: string;
        } | null,
        mutation: DocumentNode,
        variables?: object
      ): void;
    })
  | null = null;

export const getToken = async (
  type: 'register' | 'unregister'
): Promise<void> => {
  if (!messaging) {
    return;
  }
  await messaging
    .getToken()
    .then(async (currentToken: string) => {
      if (currentToken) {
        if (localVue !== null) {
          if (type === 'register') {
            await browserRegisterNotification(localVue, currentToken);
          } else {
            await browserDeregisterNotification(localVue, currentToken);
          }
        }
      } else {
        // console.log('No Instance ID token available. Request permission to generate one.');
      }
    })
    .catch(() => {
      // console.log('An error occurred while retrieving token. ', err);
    });
};

const initFirebase = async (): Promise<void> => {
  try {
    firebase = await import('firebase/app');
    // await import('firebase/firestore');
    await import('firebase/messaging');
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    messaging = firebase.messaging();
    // console.log('messaging: ', messaging);
  } catch (e) {
    // console.log('init error: ', e);
  }
};

const check = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    // console.log('support service worker');
  } else {
    // console.log('not support service worker');
  }

  if ('PushManager' in window) {
    // console.log('Push API Support');
  } else {
    // console.log('No Push API Support');
  }
};

const registerServiceWorker = async (): Promise<
  ServiceWorkerRegistration | undefined
> => {
  try {
    const swRegistration = await navigator.serviceWorker.register(
      path.join(__dirname, 'firebase-messaging-sw.js')
    );
    swRegistration.update();
    firebase.messaging().useServiceWorker(swRegistration);
    return swRegistration;
  } catch (err) {
    // console.warn('register err: ', err);
  }
};

export const requestNotificationPermission = async (): Promise<void> => {
  try {
    Notification.requestPermission(permission => {
      // console.log('permission-request: ', permission);
      if (permission === 'granted') {
        getToken('register');
        dataPoint('notification', {
          eventCategory: 'granted'
        });
      } else if (permission === 'default') {
        dataPoint('notification', {
          eventCategory: 'default'
        });
      } else {
        dataPoint('notification', {
          eventCategory: 'denied'
        });
      }
    });
  } catch (err) {
    // console.log('permission err: ', err);
  }
};

const onMessage = (
  swRegistration: ServiceWorkerRegistration | undefined
): void => {
  if (!swRegistration) {
    return;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messaging.onMessage((payload: any) => {
      const options = payload.notification;
      if (localVue) {
        const title = options['title-loc-key'];
        if (title && localVue.$te(`Notification.${title}`)) {
          options.title = localVue.$t(
            `Notification.${title}`,
            options['title-loc-args']
          );
        }
        const body = options['loc-key'];
        if (body && localVue.$te(`Notification.${body}`)) {
          options.body = localVue.$t(
            `Notification.${body}`,
            options['loc-args']
          );
        }
      }
      swRegistration.showNotification(options.title, options);
    });
  } catch (e) {
    // console.log('onMessage error: ', e);
  }
};

const onToken = (): void => {
  try {
    if (!messaging) {
      return;
    }
    messaging.onTokenRefresh(() => {
      messaging
        .getToken()
        .then((refreshedToken: string) => {
          // console.log('Token refreshed.');
          if (localVue !== null) {
            browserRegisterNotification(localVue, refreshedToken);
          }
        })
        .catch(() => {
          // console.log('Unable to retrieve refreshed token ', err);
        });
    });
  } catch (e) {
    // console.log('onToken error: ', e);
  }
};

export const loginRegisterNotification = (): void => {
  if (Notification && Notification.permission === 'granted') {
    getToken('register');
  }
};

export const notificationStart = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
  }
): Promise<void> => {
  if (process.client) {
    localVue = vue;
    await initFirebase();
    await check();
    const swRegistration = await registerServiceWorker();
    onMessage(swRegistration);
    onToken();
  }
};
