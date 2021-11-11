export type ThirdParty = 'fb' | 'yt' | 'twitch';
export const THIRD_PARTY_OPTIONS = ['fb', 'yt', 'twitch'];
export type AllLogin = ThirdParty | 'wallet' | 'email';
export const ALL_LOGIN_OPTIONS = THIRD_PARTY_OPTIONS.concat([
  'wallet',
  'email'
]);
