interface GAData {
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  eventValue: string;
}

// GA -----------
const gaSetUser = (id: string | null): void => {
  ga('set', 'userId', id);
};

const gaDataPoint = (eventType: string, eventProperties: object): void => {
  const gaData: GAData = eventProperties as GAData;
  ga('send', {
    hitType: 'event',
    eventCategory: gaData.eventCategory,
    eventAction: eventType,
    eventLabel: gaData.eventLabel,
    eventValue: gaData.eventValue
  });
};

export const setUser = (id: string | null): void => {
  gaSetUser(id);
};

export const dataPoint = (eventType: string, eventProperties: object): void => {
  gaDataPoint(eventType, eventProperties);
};
