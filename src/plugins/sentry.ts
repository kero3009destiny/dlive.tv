import Vue from 'vue';
import * as Sentry from '@sentry/browser';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://752f65755df346989e7e544ef787707f@sentry.io/1402448',
    environment: process.env.VUE_APP_SENTRY_ENVIRONMENT,
    integrations: [
      new Sentry.Integrations.Vue({
        Vue,
        attachProps: true
      })
    ],
    ignoreErrors: [
      'ServerMutationError',
      'UnhandledRejection',
      'AbortError',
      'TypeError',
      'HierarchyRequestError',
      'NotAllowedErro',
      'RangeError',
      'SecurityError',
      'Error writing result to store for query',
      'recaptcha not resolved',
      'SOCKET_ERROR',
      'Network error',
      'InternalError',
      // 'ServerQueryError',
      'Error',
      'InvalidStateError',
      'ReferenceError',
      'UnknownError',
      'TimeoutError',
      'UnhandledRejection'
    ],
    release: process.env.VUE_APP_RELEASE
  });
}
