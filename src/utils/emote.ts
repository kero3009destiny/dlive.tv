// Emote Format  :type/level/username/name:
// Emote imageUrl  cdn/emote/name

import { EmoteLevel, EmoteItemFrag } from '@/graphql/types';

const EMOTE_SIZE = 80;
const EMOTE_BREAK = ':';

// FIXME(@ryan): remove lint ignore
// eslint-disable-next-line no-useless-escape
export const emoteRegex = /:(emote|emoji)\/(global|channel|vip|mine)\/[^\/]+?\/[a-z0-9]+_[0-9]{6}:/g;

export const getEmoteHeight = (value: string): string => {
  const index = value.lastIndexOf('_');
  if (index < 0) {
    return '';
  }
  const width = parseInt(value.substring(index + 1, index + 4), 10);
  const height = parseInt(value.substring(index + 4, index + 7), 10);
  if (width <= EMOTE_SIZE) {
    return `height: ${height}px`;
  } else {
    return `height: ${(height * EMOTE_SIZE) / width}px`;
  }
};

export const levelMap = new Map<string, EmoteLevel>([
  ['mine', EmoteLevel.UserLevel],
  ['channel', EmoteLevel.ChannelLevel],
  ['global', EmoteLevel.GlobalLevel],
  ['vip', EmoteLevel.VipLevel]
]);

export const emoteMessageFormat = (emote: EmoteItemFrag.Fragment): string => {
  let level = '';
  switch (emote.level) {
    case EmoteLevel.UserLevel:
      level = 'mine';
      break;
    case EmoteLevel.ChannelLevel:
      level = 'channel';
      break;
    case EmoteLevel.GlobalLevel:
      level = 'global';
      break;
    case EmoteLevel.VipLevel:
      level = 'vip';
      break;
  }
  const message =
    EMOTE_BREAK +
    'emote' +
    `/${level}` +
    `/${emote.username}` +
    `/${emote.name}` +
    EMOTE_BREAK;
  return message;
};
export const filterEmote = (msg: string): string => {
  return msg.replace(emoteRegex, '');
};
export const parseEmote = (msg: string): string => {
  const items = msg.split('/');
  const value =
    process.env.VUE_APP_IMG_URL +
    items[0].slice(1) +
    '/' +
    items[3].slice(0, items[3].length - 1);
  return value;
};
