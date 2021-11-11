/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
const getMobileOperatingSystem = ():
  | 'Windows Phone'
  | 'Android'
  | 'iOS'
  | 'unknown' => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'unknown';
};

export const isIOS = (): boolean => {
  return getMobileOperatingSystem() === 'iOS';
};

export const isAndroid = (): boolean => {
  return getMobileOperatingSystem() === 'Android';
};

export const redirectToAndroid = (
  url: string,
  execte: boolean,
  callback?: () => void
): boolean => {
  if (!execte) {
    return false;
  }
  const rst = isAndroid();
  if (rst) {
    window.location.href = url;
    setTimeout(() => {
      if (callback !== undefined) {
        callback();
      }
    }, 1500);
  }
  return rst;
};

export const supportWebm = (): boolean => {
  const userAgent = navigator.userAgent;
  return userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1;
};
