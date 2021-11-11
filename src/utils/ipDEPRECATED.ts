import request from '@/utils/request';

// ip api result will remain valid for 7 days.
const DEFAULT_IP_VALID_DURATION = 7;
const LOCAL_STORAGE_KEY = 'dlive_local_IP';

// return an object of ip info.
// @p validIn: int, the number of days that ip result is valid.
// see ipapi.co for more info.
// example
// asn: "AS7922"
// city: "Cupertino"
// continent_code: "NA"
// country: "US"
// country_calling_code: "+1"
// country_name: "United States"
// currency: "USD"
// expireAt: 1544215668948
// in_eu: false
// ip: "24.6.103.176"
// languages: "en-US,es-US,haw,fr"
// latitude: 37.318
// longitude: -122.0449
// org: "Comcast Cable Communications, LLC"
// postal: "95014"
// region: "California"
// region_code: "CA"
// timezone: "America/Los_Angeles"
// utc_offset: "-0800"
export default async function getIp(
  validIn: number = DEFAULT_IP_VALID_DURATION
): Promise<any> {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    try {
      const data = JSON.parse(localStorage.getItem(
        LOCAL_STORAGE_KEY
      ) as string);
      const ipStats = data;
      const time = new Date();
      const startTime = new Date(Date.UTC(2021, 0, 20, 8, 0, 0));
      const endTime = new Date(Date.UTC(2021, 0, 21, 7, 59, 0));
      if (
        ipStats.country_code === 'US' &&
        time >= startTime &&
        time <= endTime
      ) {
        validIn = 0.0035;
      }
      const expireAt = ipStats.fetchedAt + validIn * 60 * 60 * 24 * 1000;
      // valid ip info, do not need to refetch.
      if (ipStats.ip && ipStats.fetchedAt && +Date.now() < +expireAt) {
        return ipStats;
      }
    } catch (err) {
      // refetch.
    }
  }

  try {
    const res = await request({
      url:
        'https://ipapi.co/json/?key=9b5ead61b450c221612420e938ffccd5ca9a5f1a',
      method: 'get',
      timeout: 15000
    });
    const data = res.data;
    data.fetchedAt = +Date.now();

    if (data.ip !== '' && data.country !== '') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      return data;
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function getIpFromLocalStorage(): any | null {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    try {
      const ipStats = JSON.parse(localStorage.getItem(
        LOCAL_STORAGE_KEY
      ) as string);
      if (ipStats.ip) {
        return ipStats;
      }
    } catch (err) {
      // TODO(@ryan): Error handling
    }
  }
  return null;
}
