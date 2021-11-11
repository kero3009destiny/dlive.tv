import Vue from 'vue';

type CallbackFunc = () => void;
interface Sub {
  event: string;
  cb: CallbackFunc;
}

class VueEventBus {
  private impl: Vue;
  private counter: number;
  private map: Map<number, Sub>;

  public constructor() {
    this.counter = 0;
    this.map = new Map<number, Sub>();
    this.impl = new Vue();
  }

  public subscribe(eventName: string, cb: CallbackFunc): number {
    if (process.client) {
      this.counter++;
      this.map.set(this.counter, {
        event: eventName,
        cb
      });
      if (process.client) {
        this.impl.$on(eventName, cb);
      }
      return this.counter;
    } else {
      // console.log('Error: calling subscribe on backend: ' + eventName);
      return 0;
    }
  }

  public unsubscribeAll(ids: number[]): void {
    for (const id of ids) {
      this.unsubscribe(id);
    }
  }

  public unsubscribe(id: number): void {
    if (!this.map.has(id)) {
      // console.log('Unsubscribing not exist id: ' + id);
      return;
    }
    const sub = this.map.get(id);
    if (sub === undefined || sub === null) {
      return;
    }
    this.impl.$off(sub.event, sub.cb);
    this.map.delete(id);
  }

  public publish(eventName: string, event: object): void {
    this.impl.$emit(eventName, event);
  }
}

export interface EventBus {
  subscribe: (eventName: string, cb: CallbackFunc) => number;
  unsubscribe: (id: number) => void;
  unsubscribeAll: (ids: number[]) => void;
  publish: (eventName: string, event: object) => void;
}

let GlobalEventBus: EventBus;

export function makeEventBus(): EventBus {
  GlobalEventBus = new VueEventBus();
  return GlobalEventBus;
}

export { GlobalEventBus };

// Global Events
export const enum EVENTS {
  OPEN_LOGIN = 'open_login',
  DRAWER_CLICKED = 'drawer_clicked',
  DRAWER_OPENED = 'drawer_opened',
  SHARE_TO_FAMCHAT = 'share_to_famchat',
  JOIN_FAMCHAT = 'join_famchat',
  SHOW_FANBASE = 'show_fanbase',
  HIDE_FANBASE = 'hide_fanbase',
  JOIN_DIRECTMESSAGE = 'join_directmessage',
  OPEN_DIRECTMESSAGE = 'open_directmessage',
  OPEN_GET_PAID = 'open_get_paid',
  GO_TO_WALLET = 'go_to_wallet',
  REFETCH_LIVESTREAM = 'refetch_livestream',
  REFETCH_ROOMS = 'refetch_rooms',
  REFETCH_ROOMS_NO_OPEN = 'refetch_rooms_no_open',
  REFETCH_FAMCHAT_USERS = 'refetch_famchat_users',
  LEAVE_FAMCHAT = 'leave_famchat',
  BAN_USER = 'ban_user',
  SEARCH_FAMCHAT = 'search_famchat',
  SELECT_FAMCHAT_NAV = 'select_famchat_nav',
  OPEN_MINI_VIDEO = 'open_mini_video',
  VOTE_GIFT = 'vote_gift',
  LIVE_STATUS_CHANGE = 'live_status_change',
  ADD_SUBSCRIPTION = 'add_subscription',
  ADD_MODERATOR = 'add_moderator',
  REMOVE_MODERATOR = 'remove_moderator',
  GIFT_ANIMATION = 'gift_animation',
  COIN_ANIMATION = 'coin_animation',
  REFETCH_LOGGEDIN = 'refetch_loggedin',
  GLOBAL_GIFT_NOTIFICATION = 'global_gift_notification',
  MINE_SPEED_CHANGE = 'mine_speed_change',
  DANMAKU_SEND = 'danmaku_send',
  DANMAKU_DRAW = 'danmaku_draw',
  SHOW_TREASURE_BOX = 'show_treasure_box'
}
