export type Gateway = 'email' | 'twitch' | 'youtube' | 'facebook';

export type Subscription = 'monthly' | '1m' | '3m' | '6m' | '12m';

export namespace Register {
  export const eventType = 'register';

  export interface EventLabels {
    gateway: Gateway;
  }
}

export namespace LoggedIn {
  export const eventType = 'loggedIn';
}

export namespace Follow {
  export const eventType = 'follow';

  export interface EventLabels {
    id: string;
  }
}

export namespace Unfollow {
  export const eventType = 'unfollow';

  export interface EventLabels {
    id: string;
  }
}

export namespace ChatInChatroom {
  export const eventType = 'chat_in_chatroom';

  export interface EventLabels {
    id: string;
  }
}

export namespace Subscribe {
  export const eventType = 'subscribe';

  export interface EventLabels {
    id: string;
    subscription: Subscription;
  }
}

export namespace DonateLivestream {
  export const eventType = 'donate_livestream';

  export interface EventLabels {
    id: string;
    category: string;
    language: string;
    value: string;
  }
}
