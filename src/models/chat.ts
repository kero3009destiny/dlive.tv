export class ChatText {
  public value: string;
  public type: 'text' | 'mention' | 'email' | 'url' | 'emote' | 'emoji';
  public href: string;
  public className: string;
  public constructor(
    value: string,
    type: 'text' | 'mention' | 'email' | 'url' | 'emote' | 'emoji',
    href: string,
    className: string
  ) {
    this.value = value;
    this.type = type;
    this.href = href;
    this.className = className;
  }
}

export interface ChatData {
  type: 'ka' | 'connection_ack' | 'error';
  payload: [];
}
