import dateFns from 'date-fns';

export const orDefaultAvatar = (avatar: string | null | undefined): string => {
  if (avatar === undefined || avatar === null || avatar === '') {
    return require('@/assets/icon/defaultAvatar0.png');
  }
  return avatar;
};

export const coinToLino = (coinStr: string, fraction: number = 5): string => {
  if (!coinStr) {
    return '0';
  }
  const numFraction = fraction;
  // TODO(@ryan): no need to null check
  // if (coinStr == null) {
  //   return coinStr;
  // }
  let negative = false;
  if (coinStr.charAt(0) === '-') {
    coinStr = coinStr.substring(1, coinStr.length);
    negative = true;
  }
  while (coinStr.length > numFraction && coinStr.charAt(0) === '0') {
    coinStr = coinStr.substring(1, coinStr.length);
  }
  while (coinStr.length <= numFraction) {
    coinStr = '0' + coinStr;
  }
  let last = coinStr.length - 1;
  const ts =
    coinStr.slice(0, last - numFraction + 1) +
    '.' +
    coinStr.slice(last - numFraction + 1, last + 1);
  last = ts.length - 1;
  while (last >= 0 && ts[last] !== '.') {
    last--;
  }
  // XXX(yumin): 2 digits after `.`.
  const twoAfterDotIndex = ts.length - numFraction + 1;
  if (last < twoAfterDotIndex) {
    last = twoAfterDotIndex;
  }
  let res = ts.slice(0, last + 1);
  if (negative) {
    res = '-' + res;
  }
  return res;
};

export const linoToBMK = (linoStr: string, decimal: number = 2): string => {
  const short = ['', 'K', 'M', 'B'];
  let unit = 0;
  let last = linoStr.indexOf('.');
  if (last < 4) {
    if (decimal === 1) {
      linoStr = linoStr.substring(0, linoStr.length - 1);
    }
    if (decimal === 0) {
      linoStr = linoStr.substring(0, last);
    }
    return linoStr;
  }
  while (last >= 4 && unit <= 3) {
    last -= 3;
    unit += 1;
  }
  const before = linoStr.slice(0, last);
  const after = linoStr.slice(last, last + decimal);
  if (decimal === 0) {
    return before + short[unit];
  }
  return before + '.' + after + short[unit];
};

export const numberToBMK = (num: number, decimal: number = 2): string => {
  let str = num.toString();
  if (num >= 1000) {
    str = Number(num).toFixed(0);
  } else {
    return str;
  }
  const short = ['', 'K', 'M', 'B'];
  let unit = 0;
  let last = str.length;
  if (last < 4 || str.indexOf('.') !== -1) {
    return str;
  }
  while (last >= 4 && unit <= 3) {
    last -= 3;
    unit += 1;
  }
  const before = str.slice(0, last);
  const after = str.slice(last, last + decimal);
  return before + '.' + after + short[unit];
};

export const formatVideoLength = (ts: string): string => {
  let formatStr = '';
  if (Number(ts) > 59 * 60 + 59) {
    formatStr = 'HH:mm:ss';
  } else if (Number(ts) > 9 * 60 + 59) {
    formatStr = 'mm:ss';
  } else {
    formatStr = 'm:ss';
  }
  let day = dateFns.startOfToday();
  day = dateFns.addSeconds(day, Number(ts));
  return dateFns.format(day, formatStr);
};

export const formatStreamHistoryLength = (ts: string): string => {
  const formatStr = 'HH:mm:ss';
  let day = dateFns.startOfToday();
  day = dateFns.addSeconds(day, Number(ts));
  return dateFns.format(day, formatStr);
};

export const formatTimeFromNow = (ts: string): string => {
  return dateFns.distanceInWordsStrict(new Date(), dateFns.parse(Number(ts)), {
    addSuffix: true
  });
};

export const formatTime = (ts: string, format: string): string => {
  const date = dateFns.parse(Number(ts));
  return dateFns.format(date, format);
};

export const formatTime30Days = (ts: string): string => {
  const date = dateFns.addMonths(dateFns.parse(Number(ts)), 1);
  return dateFns.format(date, 'MMM DD, YYYY');
};
export const formatTimeDays = (ts: string): string => {
  const date = dateFns.parse(Number(ts));
  return dateFns.format(date, 'MMM DD, YYYY');
};
export const formatLogTime = (ts: string): string => {
  const date = dateFns.parse(Number(ts));
  return dateFns.format(date, 'HH:mm:ss - MMM DD, YYYY');
};
export const textLimitLength = (ts: string, maxLength: number): string => {
  if (!ts) {
    return '';
  }
  if (ts.length > maxLength) {
    return ts.slice(0, maxLength) + '...';
  }
  return ts;
};

export const xtrim = (content: string): string => {
  return content.replace(/^\s+|\s+$/g, '');
};

export const emojiUrl = (content: string): string => {
  return process.env.VUE_APP_IMG_URL + 'emoji/' + content;
};

// https://vuejs.org/v2/guide/filters.html
export const allcap = (content: string): string => {
  if (!content) {
    return '';
  }
  const value = content.toString();
  return value.toUpperCase();
};

export const commaForDigits = (digits: string): string => {
  const parts = digits.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

export const removeDigitsAfterDot = (linoStr: string): string => {
  const array = linoStr.split('.');
  return array[0];
};

export const linoToUSD = (linoStr: string): string => {
  const linoNum = parseFloat(linoStr);
  return (linoNum * 0.012).toFixed(2);
};

export const formatTimeFromNowNoSuffix = (ts: string): string => {
  if (Date.now() > Number(ts)) {
    return '0 min';
  }
  // less than 1 hour use min
  if (Number(ts) - Date.now() < 3600000) {
    return dateFns.distanceInWordsStrict(
      Date.now(),
      dateFns.parse(Number(ts)),
      {
        // partialMethod: 'ceil',
        unit: 'm'
      }
    );
  }
  // less than 1 day use hour
  if (Number(ts) - Date.now() < 3600000 * 24) {
    return dateFns.distanceInWordsStrict(
      Date.now(),
      dateFns.parse(Number(ts)),
      {
        // partialMethod: 'ceil',
        unit: 'h'
      }
    );
  }
  return dateFns.distanceInWordsStrict(Date.now(), dateFns.parse(Number(ts)), {
    // partialMethod: 'ceil',
    unit: 'd'
  });
};
