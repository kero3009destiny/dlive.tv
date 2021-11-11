import CHAT_DELETE from '@/graphql/mutations/ChatDelete.graphql';
import MODERATOR_ADD from '@/graphql/mutations/ModeratorAdd.graphql';
import MODERATOR_REMOVE from '@/graphql/mutations/ModeratorRemove.graphql';
import STREAM_CHAT_USER_BAN from '@/graphql/mutations/StreamChatUserBan.graphql';
import STREAM_CHAT_USER_GLOBAL_BAN from '@/graphql/mutations/StreamChatUserGlobalBan.graphql';
import STREAM_CHAT_USER_UNBAN from '@/graphql/mutations/StreamChatUserUnban.graphql';
import CHAT_MODE_SET from '@/graphql/mutations/ChatModeSet.graphql';
import CHAT_EMOTE_MODE_SET from '@/graphql/mutations/ChatEmoteModeSet.graphql';
import CHAT_VERIFIED_EMAIL_SET from '@/graphql/mutations/ChatVerifiedEmailSet.graphql';
import CHAT_NO_LINK_SET from '@/graphql/mutations/ChatNoLinkSet.graphql';
import EMOTE_ADD from '@/graphql/mutations/EmoteAdd.graphql';
import EMOTE_BAN from '@/graphql/mutations/EmoteBan.graphql';
import EMOJI_BAN from '@/graphql/mutations/EmojiBan.graphql';
import EMOTE_DELETE from '@/graphql/mutations/EmoteDelete.graphql';
import EMOTE_SAVE from '@/graphql/mutations/EmoteSave.graphql';
import SEND_STREAM_CHAT_MESSAGE from '@/graphql/mutations/SendStreamChatMessage.graphql';
import CHAT_INTERVAL_SET from '@/graphql/mutations/ChatIntervalSet.graphql';
import USER_TIMEOUT_SET from '@/graphql/mutations/UserTimeoutSet.graphql';
import DISPLAY_SETTING_SET from '@/graphql/mutations/DisplaySettingSet.graphql';
import SUB_STREAK_CHEER from '@/graphql/mutations/SubStreakCheer.graphql';
import FOLLOW_CHAT_DELAY_SET from '@/graphql/mutations/FollowChatDelaySet.graphql';
import EMOTE_UNBAN from '@/graphql/mutations/EmoteUnban.graphql';
import EMOJI_UNBAN from '@/graphql/mutations/EmojiUnban.graphql';
import SnackbarMixin from '@/mixins/SnackbarMixin';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import {
  AddModerator,
  DeleteChat,
  BanStreamChatUser,
  UnbanStreamChatUser,
  RemoveModerator,
  SetChatMode,
  ChatEmoteModeSet,
  ChatVerifiedEmailSet,
  ChatNoLinkSet,
  EmoteAdd,
  EmojiBan,
  EmoteDelete,
  EmoteBan,
  EmoteSave,
  SendStreamChatMessage,
  SetChatInterval,
  GlobalBanStreamChatUser,
  UserTimeoutSet,
  SetEmoteModeInput,
  ChatEmoteModeFrag,
  DisplaySettingSet,
  SetDisplaySettingInput,
  SubStreakCheer,
  FollowChatDelaySet,
  FollowChatDelayType,
  EmoteUnban,
  EmojiUnban
} from '@/graphql/types';
import {
  writeEmoteModeCache,
  writeVerifiedOnlyChatCache,
  writeNoLinkChatCache,
  writeDisplaySettingCache,
  writeFollowChatDelayCache,
  writeEmoteBanCache,
  writeEmojiBanCache
} from '@/utils/cache/chatroom';
import { dataPoint } from '@/plugins/dataCollection';
import { minervaEvent } from '@/plugins/minerva';
import { ChatInChatroom } from '@/plugins/types';

// XXX(jiayi): TODO refactor all mutation to use new error handler

export const displaySettingSet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  setting: SetDisplaySettingInput,
  id: string
): Promise<void> => {
  const variables: DisplaySettingSet.Variables = {
    setting
  };
  const { data } = await vue.$apollo.mutate<DisplaySettingSet.Mutation>({
    mutation: DISPLAY_SETTING_SET,
    variables
  });
  const resp = data.displaySettingSet;
  vue.$handleError(resp.err, DISPLAY_SETTING_SET, variables);
  writeDisplaySettingCache(vue.$apollo.provider.defaultClient, id, setting);
  // vue.$success('Success');
};

export const chatDelete = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string,
  id: string
): Promise<void> => {
  const variables: DeleteChat.Variables = {
    streamer,
    id
  };
  const { data } = await vue.$apollo.mutate<DeleteChat.Mutation>({
    mutation: CHAT_DELETE,
    variables
  });
  const resp = data.chatDelete;
  vue.$handleError(resp.err, CHAT_DELETE, variables);
  vue.$success('StreamChatProfileCard.ChatDelete');
};

export const streamChatUserBan = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string,
  username: string
): Promise<void> => {
  const variables: BanStreamChatUser.Variables = {
    streamer,
    username
  };
  const { data } = await vue.$apollo.mutate<BanStreamChatUser.Mutation>({
    mutation: STREAM_CHAT_USER_BAN,
    variables
  });
  const resp = data.streamchatUserBan;
  vue.$handleError(resp.err, STREAM_CHAT_USER_BAN, variables);
  vue.$success('StreamChatProfileCard.StreamChatUserBan');
  // XXX(jiayi): Write cache
};

export const streamChatUserUnban = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string,
  username: string
): Promise<void> => {
  const variables: UnbanStreamChatUser.Variables = {
    streamer,
    username
  };
  const { data } = await vue.$apollo.mutate<UnbanStreamChatUser.Mutation>({
    mutation: STREAM_CHAT_USER_UNBAN,
    variables
  });
  const resp = data.streamchatUserUnban;
  vue.$handleError(resp.err, STREAM_CHAT_USER_UNBAN, variables);
  vue.$success('StreamChatProfileCard.StreamChatUserUnban');
};

export const streamChatUserGlobalBan = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string,
  username: string
): Promise<void> => {
  const variables: GlobalBanStreamChatUser.Variables = {
    streamer,
    username
  };
  const { data } = await vue.$apollo.mutate<GlobalBanStreamChatUser.Mutation>({
    mutation: STREAM_CHAT_USER_GLOBAL_BAN,
    variables
  });
  const resp = data.streamchatUserGlobalBan;
  vue.$handleError(resp.err, STREAM_CHAT_USER_GLOBAL_BAN, variables);
  vue.$success('StreamChatProfileCard.StreamChatUserGlobalBan');
};

export const streamChatUserTimeoutSet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string,
  username: string
): Promise<void> => {
  const variables: UserTimeoutSet.Variables = {
    streamer,
    username,
    duration: 5
  };
  const { data } = await vue.$apollo.mutate<UserTimeoutSet.Mutation>({
    mutation: USER_TIMEOUT_SET,
    variables
  });
  const resp = data.userTimeoutSet;
  vue.$handleError(resp.err, USER_TIMEOUT_SET, variables);
  vue.$success('StreamChatProfileCard.StreamChatUserTimeoutSet');
};

export const moderatorAdd = async (
  vue: SnackbarMixin,
  variables: AddModerator.Variables
): Promise<void> => {
  try {
    const { data } = await vue.$apollo.mutate<AddModerator.Mutation>({
      mutation: MODERATOR_ADD,
      variables
    });
    const resp = data.moderatorAdd;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('StreamChatProfileCard.ModeratorAdd');
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const moderatorRemove = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  username: string,
  streamer: string
): Promise<void> => {
  const variables: RemoveModerator.Variables = {
    username,
    streamer
  };
  const { data } = await vue.$apollo.mutate<RemoveModerator.Mutation>({
    mutation: MODERATOR_REMOVE,
    variables
  });
  const resp = data.moderatorRemove;
  vue.$handleError(resp.err, STREAM_CHAT_USER_UNBAN, variables);
  vue.$success('StreamChatProfileCard.ModeratorRemove');
};

export const chatModeSet = async (
  vue: SnackbarMixin,
  variables: SetChatMode.Variables
): Promise<SetChatMode.ChatModeSet | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<SetChatMode.Mutation>({
      mutation: CHAT_MODE_SET,
      variables
    });
    const resp = data.chatModeSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('StreamChatModeSettings.ChatModeSet');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};
export const verifiedEmailChatSet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  verifiedOnly: boolean,
  id: string
): Promise<void> => {
  const variables: ChatVerifiedEmailSet.Variables = {
    verifiedOnly
  };
  const { data } = await vue.$apollo.mutate<ChatVerifiedEmailSet.Mutation>({
    mutation: CHAT_VERIFIED_EMAIL_SET,
    variables
  });
  const resp = data.chatVerifiedOnlySet;
  vue.$handleError(resp.err, CHAT_VERIFIED_EMAIL_SET, variables);
  vue.$success('StreamChatModeSettings.VerifiedEmailChatSet');
  const err = writeVerifiedOnlyChatCache(
    vue.$apollo.provider.defaultClient,
    verifiedOnly,
    id
  );
  if (err !== undefined) {
    throw err;
  }
};
export const noLinkChatSet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  disable: boolean,
  id: string
): Promise<void> => {
  const variables: ChatNoLinkSet.Variables = {
    disable
  };
  const { data } = await vue.$apollo.mutate<ChatNoLinkSet.Mutation>({
    mutation: CHAT_NO_LINK_SET,
    variables
  });
  const resp = data.chatLinkDisabledSet;
  vue.$handleError(resp.err, CHAT_NO_LINK_SET, variables);
  vue.$success('StreamChatModeSettings.NoLinkChatSet');
  const err = writeNoLinkChatCache(
    vue.$apollo.provider.defaultClient,
    disable,
    id
  );
  if (err !== undefined) {
    throw err;
  }
};
export const emoteModeSet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  emoteMode: SetEmoteModeInput,
  id: string
): Promise<void> => {
  const variables: ChatEmoteModeSet.Variables = {
    emoteMode
  };
  const { data } = await vue.$apollo.mutate<ChatEmoteModeSet.Mutation>({
    mutation: CHAT_EMOTE_MODE_SET,
    variables
  });
  const resp = data.emoteModeSet;
  vue.$handleError(resp.err, CHAT_EMOTE_MODE_SET, variables);
  vue.$success('StreamChatModeSettings.StickerModeSet');
  const emoteModes: ChatEmoteModeFrag.EmoteMode = {
    __typename: 'EmoteModes',
    NoMineEmote: emoteMode.NoMineEmote,
    NoGlobalEmote: emoteMode.NoGlobalEmote,
    NoAllEmote: emoteMode.NoAllEmote
  };
  const err = writeEmoteModeCache(
    vue.$apollo.provider.defaultClient,
    emoteModes,
    id
  );
  if (err !== undefined) {
    throw err;
  }
};

export const emoteAdd = async (
  vue: SnackbarMixin,
  variables: EmoteAdd.Variables
): Promise<EmoteAdd.AddEmote | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<EmoteAdd.Mutation>({
      mutation: EMOTE_ADD,
      variables
    });
    const resp = data.addEmote;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('EmoteBoard.StickerUploaded');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const emoteDelete = async (
  vue: SnackbarMixin,
  variables: EmoteDelete.Variables
): Promise<EmoteDelete.DeleteEmote | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<EmoteDelete.Mutation>({
      mutation: EMOTE_DELETE,
      variables
    });
    const resp = data.deleteEmote;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
    } else {
      vue.$success('EmoteBoard.StickerDeleted');
    }
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const emoteBan = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  emoteStr: string,
  streamer: string,
  id: string
): Promise<void> => {
  const variables: EmoteBan.Variables = {
    emoteStr,
    streamer
  };
  const { data } = await vue.$apollo.mutate<EmoteBan.Mutation>({
    mutation: EMOTE_BAN,
    variables
  });
  const resp = data.emoteBan;
  vue.$handleError(resp.err, EMOTE_BAN, variables);
  vue.$success('EmoteBoard.StickerBanned');
  writeEmoteBanCache(vue.$apollo.provider.defaultClient, id, emoteStr, 'ban');
};

export const emojiBan = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  emoteStr: string,
  streamer: string,
  id: string
): Promise<void> => {
  const variables: EmojiBan.Variables = {
    emoteStr,
    streamer
  };
  const { data } = await vue.$apollo.mutate<EmojiBan.Mutation>({
    mutation: EMOJI_BAN,
    variables
  });
  const resp = data.emojiBan;
  vue.$handleError(resp.err, EMOJI_BAN, variables);
  vue.$success('EmoteBoard.EmoteBanned');
  writeEmojiBanCache(vue.$apollo.provider.defaultClient, id, emoteStr, 'ban');
};

export const emoteSave = async (
  vue: SnackbarMixin,
  variables: EmoteSave.Variables
): Promise<EmoteSave.SaveEmote | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<EmoteSave.Mutation>({
      mutation: EMOTE_SAVE,
      variables
    });
    const resp = data.saveEmote;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
    } else {
      vue.$success('EmoteBoard.StickerSaved');
    }
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const sendStreamChatMessage = async (
  vue: SnackbarMixin,
  variables: SendStreamChatMessage.Variables
): Promise<SendStreamChatMessage.SendStreamchatMessage> => {
  const { data } = await vue.$apollo.mutate<SendStreamChatMessage.Mutation>({
    mutation: SEND_STREAM_CHAT_MESSAGE,
    variables
  });
  const resp = data.sendStreamchatMessage;
  if (resp.err) {
    return resp;
  }
  const trackingInfo = vue.$store.getters['userMeta/trackingInfo'];
  dataPoint('chat_in_chatroom', {
    eventCategory: trackingInfo.postStatus,
    eventLabel: variables.input.streamer
  });
  const eventLabels: ChatInChatroom.EventLabels = {
    id: variables.input.streamer
  };
  minervaEvent(ChatInChatroom.eventType, eventLabels);
  return resp;
};

export const chatIntervalSet = async (
  vue: SnackbarMixin,
  variables: SetChatInterval.Variables
): Promise<SetChatInterval.ChatIntervalSet | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<SetChatInterval.Mutation>({
      mutation: CHAT_INTERVAL_SET,
      variables
    });
    const resp = data.chatIntervalSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
    } else {
      vue.$success('StreamChatModeSettings.ChatIntervalSet');
    }
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const subStreakCheer = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  streamer: string
): Promise<void> => {
  const variables: SubStreakCheer.Variables = {
    streamer
  };
  const { data } = await vue.$apollo.mutate<SubStreakCheer.Mutation>({
    mutation: SUB_STREAK_CHEER,
    variables
  });
  const resp = data.subStreakCheer;
  vue.$handleError(resp.err, SUB_STREAK_CHEER, variables);
};

export const followChatDelaySet = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  followChatDelay: FollowChatDelayType,
  id: string
): Promise<void> => {
  const variables: FollowChatDelaySet.Variables = {
    followChatDelay
  };
  const { data } = await vue.$apollo.mutate<FollowChatDelaySet.Mutation>({
    mutation: FOLLOW_CHAT_DELAY_SET,
    variables
  });
  const resp = data.followChatDelaySet;
  vue.$handleError(resp.err, FOLLOW_CHAT_DELAY_SET, variables);
  vue.$success('Set chat delay success');
  writeFollowChatDelayCache(
    vue.$apollo.provider.defaultClient,
    followChatDelay,
    id
  );
};

export const emoteUnban = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  emoteStr: string,
  streamer: string,
  id: string
): Promise<void> => {
  const variables: EmoteUnban.Variables = {
    emoteStr,
    streamer
  };
  const { data } = await vue.$apollo.mutate<EmoteUnban.Mutation>({
    mutation: EMOTE_UNBAN,
    variables
  });
  const resp = data.emoteUnban;
  vue.$handleError(resp.err, EMOTE_UNBAN, variables);
  vue.$success('EmoteBoard.StickerUnbanned');
  writeEmoteBanCache(vue.$apollo.provider.defaultClient, id, emoteStr, 'unban');
};

export const emojiUnban = async (
  vue: Vue & {
    $handleError(
      err: {
        code: number;
        message: string;
      } | null,
      mutation: DocumentNode,
      variables?: object
    ): void;
    $success(i18nMsg: string): void;
  },
  emoteStr: string,
  streamer: string,
  id: string
): Promise<void> => {
  const variables: EmojiUnban.Variables = {
    emoteStr,
    streamer
  };
  const { data } = await vue.$apollo.mutate<EmojiUnban.Mutation>({
    mutation: EMOJI_UNBAN,
    variables
  });
  const resp = data.emojiUnban;
  vue.$handleError(resp.err, EMOJI_UNBAN, variables);
  vue.$success('EmoteBoard.EmoteUnbanned');
  writeEmojiBanCache(vue.$apollo.provider.defaultClient, id, emoteStr, 'unban');
};
