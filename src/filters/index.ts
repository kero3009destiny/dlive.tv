import _Vue from 'vue';
import {
  orDefaultAvatar,
  coinToLino,
  linoToBMK,
  textLimitLength,
  formatVideoLength,
  formatTimeFromNow,
  formatTime,
  xtrim,
  allcap,
  formatTime30Days,
  formatTimeDays,
  formatLogTime,
  formatStreamHistoryLength,
  commaForDigits,
  removeDigitsAfterDot,
  formatTimeFromNowNoSuffix,
  numberToBMK,
  linoToUSD,
  emojiUrl
} from './filters';

export function FilterPlugin(Vue: typeof _Vue): void {
  Vue.filter('orDefaultAvatar', orDefaultAvatar);
  Vue.filter('coinToLino', coinToLino);
  Vue.filter('linoToBMK', linoToBMK);
  Vue.filter('textLimitLength', textLimitLength);
  Vue.filter('formatVideoLength', formatVideoLength);
  Vue.filter('formatTimeFromNow', formatTimeFromNow);
  Vue.filter('formatStreamHistoryLength', formatStreamHistoryLength);
  Vue.filter('formatTime', formatTime);
  Vue.filter('xtrim', xtrim);
  Vue.filter('allcap', allcap);
  Vue.filter('formatTime30Days', formatTime30Days);
  Vue.filter('formatTimeDays', formatTimeDays);
  Vue.filter('formatLogTime', formatLogTime);
  Vue.filter('commaForDigits', commaForDigits);
  Vue.filter('removeDigitsAfterDot', removeDigitsAfterDot);
  Vue.filter('formatTimeFromNowNoSuffix', formatTimeFromNowNoSuffix);
  Vue.filter('numberToBMK', numberToBMK);
  Vue.filter('linoToUSD', linoToUSD);
  Vue.filter('emojiUrl', emojiUrl);
}

export class FilterOptions {}
