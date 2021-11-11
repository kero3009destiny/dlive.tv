export const hlsUrl = (username: string): string => {
  const domain = process.env.VUE_APP_MASTERPLAYLIST_URL;
  if (username && username.length > 0) {
    return `${domain}/hls/live/${username}.m3u8`;
  }
  // TODO(@ryan): error handling
  return '';
};
