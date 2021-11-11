import {
  VCategoryLivestreamFrag,
  HomePageCategories,
  ClipCommentFrag,
  VCategoryCardFrag
} from '@/graphql/types';

export function getLivestreamUrl(streamer: string): string {
  const domain = process.env.VUE_APP_MASTERPLAYLIST_URL;
  if (streamer !== '') {
    return `${domain}/hls/live/${streamer}.m3u8`;
  }
  return '';
}

export function duplicateLivestream(
  livestreams: VCategoryLivestreamFrag.Fragment
): VCategoryLivestreamFrag.List[] {
  const result = [];
  const obj: { [x: string]: boolean } = {};
  for (const i of livestreams.list.keys()) {
    if (!obj[livestreams.list[i].permlink]) {
      result.push(livestreams.list[i]);
      obj[livestreams.list[i].permlink] = true;
    }
  }
  return result;
}

export function duplicateCategory(
  categories: HomePageCategories.Categories
): VCategoryCardFrag.Fragment[] {
  const result = [];
  const obj: { [x: string]: boolean } = {};
  for (const i of categories.list.keys()) {
    if (!obj[categories.list[i].id]) {
      result.push(categories.list[i]);
      obj[categories.list[i].id] = true;
    }
  }
  return result;
}

export function duplicateClipComment(
  comments: ClipCommentFrag.ClipComments
): ClipCommentFrag.List[] {
  const result = [];
  const obj: { [x: string]: boolean } = {};
  result.push(...comments.list);
  for (const i of comments.list.keys()) {
    if (!obj[comments.list[i].id]) {
      result.push(comments.list[i]);
      obj[comments.list[i].id] = true;
    }
  }
  return result;
}
