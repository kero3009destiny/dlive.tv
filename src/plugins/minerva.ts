// let minerva: import('@dlive/minerva-js').Minerva;

// type retry = () => void;

// const retryQ: retry[] = [];

export const minervaInit = async (): Promise<void> => {
  // const m = await import('@dlive/minerva-js');
  // minerva = m.minerva;
  // minerva.getInstance().init(
  //   'test',
  //   undefined,
  //   {
  //     apiEndpoint: process.env.VUE_APP_MINERVA_URL
  //   },
  //   () => {
  //     retryQ.forEach(f => {
  //       f();
  //     });
  //   }
  // );
};

// eslint-disable-line @typescript-eslint/no-unused-vars
export const minervaEvent = (eventType: string, eventLabels?: object): void => {
  if (eventType && eventLabels) {
    //
  }
  // const f = (): void => {
  //   minerva.getInstance().logEvent(eventType, eventLabels);
  // };
  // if (minerva === undefined) {
  //   retryQ.push(f);
  //   return;
  // }
  // f();
  return;
};

export const minervaSetUser = (id: string | null): void => {
  if (id === null) {
    //
  }
  // const f = (): void => {
  //   minerva.getInstance().setUserId(id);
  //   if (id === null) {
  //     minerva.getInstance().regenerateDeviceId();
  //   }
  // };
  // if (minerva === undefined) {
  //   retryQ.push(f);
  //   return;
  // }
  // f();
};

export const minervaSetUserLabels = (userLabels: object): void => {
  if (userLabels) {
    //
  }
  // const f = (): void => {
  //   minerva.getInstance().setUserProperties(userLabels);
  // };
  // if (minerva === undefined) {
  //   retryQ.push(f);
  //   return;
  // }
  // f();
};
