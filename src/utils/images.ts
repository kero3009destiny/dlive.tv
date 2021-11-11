export const SIH_RESIZE_AVATAR_MINI = '25x25';
export const SIH_RESIZE_AVATAR_SMALL = '50x50';
export const SIH_RESIZE_AVATAR_LARGE = '120x120';
// export const SIH_RESIZE_THUMBNAIL_MEDIAN = '256x256';
export const SIH_RESIZE_THUMBNAIL_MEDIAN = '360x360';
export const SIH_RESIZE_THUMBNAIL_LARGE = '480x480';
export const SIH_RESIZE_CATEGORY_SMALL = '100x100';
export const SIH_RESIZE_CATEGORY_MEDIUM = '200x200';
export const SIH_RESIZE_CATEGORY_LARGE = '254x254';
export const SIH_RESIZE_OFFLINE_IMAGE = '1920x1920';
export const SIH_RESIZE_FEATURED_POST_SMALL = '151x151';
export const SIH_RESIZE_FEATURED_POST_MEDIUM = '280x280';
export const SIH_RESIZE_FEATURED_POST_LARGE = '812x812';

const imgUrl = process.env.VUE_APP_IMG_URL as string; // TODO(@ryan): maybe handle/error out undefined case
const imgUrlSih = process.env.VUE_APP_IMG_URL_SIH as string;

// eg: SIHresize(this.src, '50x50')
const RESIZE_FITIN_CMD = 'fit-in';
const QUALITY = 'filters:quality(90)';
export function SIHresize(url: string, size: string): string {
  // if not specified, stge
  return url.replace(
    imgUrl,
    imgUrlSih + RESIZE_FITIN_CMD + '/' + size + '/' + QUALITY + '/'
  );
}
