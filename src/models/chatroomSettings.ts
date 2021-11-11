import { ChatModeType } from '@/graphql/types';

export class ChatMode {
  public mode: string;
  public label: string;
  public constructor(mode: string, label: string) {
    this.mode = mode;
    this.label = label;
  }
}

export const CHAT_MODE_DEFAULT = new ChatMode(
  ChatModeType.Default,
  'Public (All)'
);

export const CHAT_MODE_FOLLOWONLY = new ChatMode(
  ChatModeType.Followonly,
  'Followers Only'
);

export const CHAT_MODE_SUBONLY = new ChatMode(
  ChatModeType.Subonly,
  'Subscribers Only'
);

export const CHAT_MODES = [
  CHAT_MODE_DEFAULT,
  CHAT_MODE_FOLLOWONLY,
  CHAT_MODE_SUBONLY
];
