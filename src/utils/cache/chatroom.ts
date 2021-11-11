import {
  ChatModeType,
  ChatModeFrag,
  ChatIntervalFrag,
  ChatBannedUsersFrag,
  ChatNoLinkModeFrag,
  ChatModeratorsFrag,
  EmoteBoardStreamerFrag,
  EmoteUserFrag,
  EmoteLevel,
  EmoteItemFrag,
  EmojiStreamerFrag,
  EmojiGroupFrag,
  ChatEmoteModeFrag,
  ChatVerifiedOnlyModeFrag,
  MeStreamChatModeSettingFrag,
  StreamChatModeSettingsFrag,
  FollowChatDelayType,
  ChatBannedEmoteFrag,
  ChatBannedEmojiFrag
} from '@/graphql/types';
import ApolloClient from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';
import { DataProxy } from 'apollo-cache';
import { OperationVariables } from 'node_modules/apollo-client/core/types';
import CHAT_BANNED_USERS_FRAG from '@/graphql/fragments/ChatBannedUsers.graphql';
import CHAT_MODERATORS_FRAG from '@/graphql/fragments/ChatModerators.graphql';
import CHAT_EMOTE_MODE_FRAG from '@/graphql/fragments/ChatEmoteMode.graphql';
import CHAT_VERIFIED_ONLY_MODE_FRAG from '@/graphql/fragments/ChatVerifiedOnlyModeFrag.graphql';
import CHAT_NO_LINK_MODE_FRAG from '@/graphql/fragments/ChatNoLinkModeFrag.graphql';
import ME_STREAM_MODE_SETTING_FRAG from '@/graphql/fragments/MeStreamChatModeSettingFrag.graphql';
import STREAM_CHAT_MODE_SETTINGS_FRAG from '@/graphql/fragments/StreamChatModeSettings.graphql';
import CHAT_BANNED_EMOTE_FRAG from '@/graphql/fragments/ChatBannedEmote.graphql';
import CHAT_BANNED_EMOJI_FRAG from '@/graphql/fragments/ChatBannedEmoji.graphql';

export const writeChatModeCache = (
  client: ApolloClient<NormalizedCacheObject>,
  mode: ChatModeType,
  param: DataProxy.Fragment<OperationVariables>
): void => {
  try {
    if (param === null) {
      return;
    }
    const data: ChatModeFrag.Fragment | null = client.readFragment(param);
    if (data !== null && data.chatMode !== undefined) {
      data.chatMode = mode;
      client.writeFragment({
        ...param,
        data
      });
    }
  } catch (err) {
    // TODO
  }
};

export const writeNoLinkChatCache = (
  client: ApolloClient<NormalizedCacheObject>,
  chatLinkDisabled: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_NO_LINK_MODE_FRAG
  };
  let data: ChatNoLinkModeFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no Chat No Link Mode fragment found with id: ${id}`
    );
  }
  if (data.chatLinkDisabled !== undefined) {
    data.chatLinkDisabled = chatLinkDisabled;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeVerifiedOnlyChatCache = (
  client: ApolloClient<NormalizedCacheObject>,
  verifiedOnly: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_VERIFIED_ONLY_MODE_FRAG
  };
  let data: ChatVerifiedOnlyModeFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no Chat Verified Only Mode fragment found with id: ${id}`
    );
  }
  if (data.chatVerifiedOnly !== undefined) {
    data.chatVerifiedOnly = verifiedOnly;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeFollowChatDelayCache = (
  client: ApolloClient<NormalizedCacheObject>,
  followChatDelay: FollowChatDelayType,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: STREAM_CHAT_MODE_SETTINGS_FRAG
  };
  let data: StreamChatModeSettingsFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no Chat Verified Only Mode fragment found with id: ${id}`
    );
  }
  if (data.followChatDelay !== undefined) {
    data.followChatDelay = followChatDelay;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmoteModeCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emoteMode: ChatEmoteModeFrag.EmoteMode,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_EMOTE_MODE_FRAG
  };
  let data: ChatEmoteModeFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no emote mode fragment found with id: ${id}`);
  }
  if (data.emoteMode !== undefined) {
    data.emoteMode = emoteMode;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeChatIntervalCache = (
  client: ApolloClient<NormalizedCacheObject>,
  seconds: number,
  param: DataProxy.Fragment<OperationVariables>
): void => {
  try {
    if (param === null) {
      return;
    }
    const data: ChatIntervalFrag.Fragment | null = client.readFragment(param);
    if (data !== null && data.chatInterval !== undefined) {
      data.chatInterval = seconds;
      client.writeFragment({
        ...param,
        data
      });
    }
  } catch (err) {
    // TODO
  }
};

export const writeUnbanCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  unbanUsername: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_BANNED_USERS_FRAG,
    fragmentName: 'ChatBannedUsersFrag'
  };
  let data: ChatBannedUsersFrag.Fragment | null;
  try {
    data = client.readFragment<ChatBannedUsersFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no banned users fragment found with id: ${id}`);
  }
  // XXX(jiayi): Handle not find the user
  if (data.chatBannedUsers !== undefined) {
    data.chatBannedUsers.list = data.chatBannedUsers.list.filter(
      user => user.username !== unbanUsername
    );
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeDisplaySettingCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  setting: MeStreamChatModeSettingFrag.DisplaySetting
): InternalError | undefined => {
  const param = {
    id,
    fragment: ME_STREAM_MODE_SETTING_FRAG
  };
  let data: MeStreamChatModeSettingFrag.Fragment | null;
  try {
    data = client.readFragment<MeStreamChatModeSettingFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no display setting fragment found with id: ${id}`
    );
  }
  // XXX(jiayi): Handle not find the user
  if (data.private !== undefined && data.private !== null) {
    const displaySetting = Object.assign({}, setting);
    displaySetting.__typename = 'DisplaySetting';
    data.private.displaySetting = displaySetting;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeRemoveModertorCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  username: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_MODERATORS_FRAG,
    fragmentName: 'ChatModeratorsFrag'
  };
  let data: ChatModeratorsFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no chat moderators fragment found with id: ${id}`
    );
  }
  if (data.chatModerators !== undefined) {
    data.chatModerators.list = data.chatModerators.list.filter(user => {
      return user.username !== username;
    });
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeAddModertorCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  user: ChatModeratorsFrag.List
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_MODERATORS_FRAG,
    fragmentName: 'ChatModeratorsFrag'
  };
  let data: ChatModeratorsFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no chat moderators fragment found with id: ${id}`
    );
  }
  if (data.chatModerators !== undefined) {
    if (
      !data.chatModerators.list.some(item => {
        return item.username === user.username;
      })
    ) {
      data.chatModerators.list.push(user);
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmoteAddCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emote: EmoteItemFrag.Fragment,
  param: DataProxy.Fragment<OperationVariables> | null
): InternalError | undefined => {
  if (param === null) {
    return;
  }
  let data: EmoteUserFrag.Fragment | null;
  try {
    data = client.readFragment<EmoteUserFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${param.id}`);
  }
  if (data.emote !== undefined) {
    if (emote.level === EmoteLevel.ChannelLevel) {
      data.emote.channel.list.push(emote);
    }
    if (emote.level === EmoteLevel.VipLevel) {
      data.emote.vip.list.push(emote);
    }
    if (emote.level === EmoteLevel.UserLevel) {
      data.emote.mine.list.push(emote);
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmojiAddCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emote: EmoteItemFrag.Fragment,
  param: DataProxy.Fragment<OperationVariables> | null
): InternalError | undefined => {
  if (param === null) {
    return;
  }
  let data: EmojiStreamerFrag.Fragment | null;
  try {
    data = client.readFragment<EmojiStreamerFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${param.id}`);
  }
  if (data.emoji !== undefined) {
    if (emote.level === EmoteLevel.VipLevel) {
      data.emoji.vip.list.push(emote);
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmojiSubAddCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emote: EmojiGroupFrag.List,
  param: DataProxy.Fragment<OperationVariables> | null
): InternalError | undefined => {
  if (param === null) {
    return;
  }
  let data: EmojiGroupFrag.Fragment | null;
  try {
    data = client.readFragment<EmojiGroupFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${param.id}`);
  }
  if (
    data.private &&
    data.private.subedStreamerEmojis &&
    data.private.subedStreamerEmojis.list
  ) {
    data.private.subedStreamerEmojis.list.unshift(emote);
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmoteDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emote: EmoteBoardStreamerFrag.List,
  param: DataProxy.Fragment<OperationVariables> | null
): InternalError | undefined => {
  if (param === null) {
    return;
  }
  let data: EmoteUserFrag.Fragment | null;
  try {
    data = client.readFragment<EmoteUserFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${param.id}`);
  }
  if (data.emote !== undefined) {
    if (emote.level === EmoteLevel.ChannelLevel) {
      data.emote.channel.list = data.emote.channel.list.filter(item => {
        return item.name !== emote.name;
      });
    }
    if (emote.level === EmoteLevel.VipLevel) {
      data.emote.vip.list = data.emote.vip.list.filter(item => {
        return item.name !== emote.name;
      });
    }
    if (emote.level === EmoteLevel.UserLevel) {
      data.emote.mine.list = data.emote.mine.list.filter(item => {
        return item.name !== emote.name;
      });
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmojiDeleteCache = (
  client: ApolloClient<NormalizedCacheObject>,
  emote: EmoteBoardStreamerFrag.List,
  param: DataProxy.Fragment<OperationVariables> | null
): InternalError | undefined => {
  if (param === null) {
    return;
  }
  let data: EmojiStreamerFrag.Fragment | null;
  try {
    data = client.readFragment<EmojiStreamerFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no follow fragment found with id: ${param.id}`);
  }
  if (data.emoji !== undefined) {
    if (emote.level === EmoteLevel.VipLevel) {
      data.emoji.vip.list = data.emoji.vip.list.filter(item => {
        return item.name !== emote.name;
      });
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmojiBanCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  emoteStr: string,
  type: 'ban' | 'unban'
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_BANNED_EMOJI_FRAG
  };
  let data: ChatBannedEmojiFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no chat banned emote fragment found with id: ${id}`
    );
  }
  if (data.chatBannedEmoji !== undefined) {
    if (type === 'ban') {
      data.chatBannedEmoji.push(emoteStr);
    } else {
      data.chatBannedEmoji = data.chatBannedEmoji.filter(emote => {
        return emote !== emoteStr;
      });
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeEmoteBanCache = (
  client: ApolloClient<NormalizedCacheObject>,
  id: string,
  emoteStr: string,
  type: 'ban' | 'unban'
): InternalError | undefined => {
  const param = {
    id,
    fragment: CHAT_BANNED_EMOTE_FRAG
  };
  let data: ChatBannedEmoteFrag.Fragment | null;
  try {
    data = client.readFragment(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no chat banned emote fragment found with id: ${id}`
    );
  }
  if (data.chatBannedEmote !== undefined) {
    if (type === 'ban') {
      data.chatBannedEmote.push(emoteStr);
    } else {
      data.chatBannedEmote = data.chatBannedEmote.filter(emote => {
        return emote !== emoteStr;
      });
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};
