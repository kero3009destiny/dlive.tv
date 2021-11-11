export function encodeS3URI(url: string) {
  url = url.replace(/(^\w+:|^)\/\//, '');
  return (
    'https://' +
    encodeURI(url)
      .replace(/\+/, '%2B')
      .replace(/\"/, '%22')
      .replace(/\#/, '%23')
      .replace(/\$/, '%24')
      .replace(/\&/, '%26')
      .replace(/\+/, '%2B')
      .replace(/\,/, '%2C')
      .replace(/\:/, '%3A')
      .replace(/\;/, '%3B')
      .replace(/\=/, '%3D')
      .replace(/\?/, '%3F')
      .replace(/\@/, '%40')
  );
}
