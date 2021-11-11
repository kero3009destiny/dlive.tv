type RequestIdleCallbackHandle = any;
interface RequestIdleCallbackOptions {
  timeout: number;
}
interface RequestIdleCallbackDeadline {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
}

declare global {
  interface Window {
    requestIdleCallback: (
      callback: (deadline: RequestIdleCallbackDeadline) => void,
      opts?: RequestIdleCallbackOptions
    ) => RequestIdleCallbackHandle;
    cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
  }
}
export function getFingerprint() {
  return new Promise<string>((resolve, _) => {
    import('fingerprintjs2' /* webpackChunkName: "fp" */).then(fp => {
      if (process.client && window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          // @ts-ignore
          fp.get({}, (result, __) => {
            // result is murmur hash fingerprint
            // components is array of {key: 'foo', value: 'component value'}
            const values = result.map((component: any) => component.value);
            // @ts-ignore
            const murmur = fp.x64hash128(values.join(''), 31);
            resolve(murmur);
          });
        });
      } else {
        // @ts-ignore
        fp.get({}, (result, __) => {
          // result is murmur hash fingerprint
          // components is array of {key: 'foo', value: 'component value'}
          const values = result.map((component: any) => component.value);
          // @ts-ignore
          const murmur = fp.x64hash128(values.join(''), 31);
          resolve(murmur);
        });
      }
    });
  });
}
