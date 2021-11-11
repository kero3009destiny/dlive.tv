export const COIN_PER_LINO = 100000;

// backend limits
export const LINO_TOP_CREATORS_DUMMY_DELTA = 10000;

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
  CHAT_DELETE = 'chat_delete',
  CHANGE_LANGUAGE = 'change_language',
  BC_CONTENT_LENGTH = 1000,
  BC_TITLE_LENGTH = 50,
  LINO_TAG_LENGTH = 26,
  LINO_TAG_NUMBER = 3,
  CHAT_SEND = 'chat_send',
  GIFT_DONATE = 'gift_donate',
  PINNED_GIFT = 'pinned_gift',
  CHEST_ENGAGEMENT = 'chest_engagement',
  SHOW_TREASURE_BOX = 'show_treasure_box',
  PAGE_SCROLL_EVENT = 'page_scroll_event',
  SIDEBAR_SCROLL_EVENT = 'sidebar_scroll_event',
  SHARE_ANIMATION = 'share_animation',
  OPEN_SHARE_DIALOG = 'open_share_dialog',
  TOGGLE_REGISTER_RECOMMEND = 'toggle_register_recommend',
  ACTIVITY_FEED = 'activity_feed',
  CLIP_CLICK = 'clip_click',
  CLIP_INPUT_FOCUS = 'clip_input_focus',
  CHANNEL_PLAYER_PLAY = 'channel_player_play',
  EMOTE_BOARD_SUB = 'emote_board_sub',
  SUB_CLICKED = 'sub_clicked',
  GIFT_SUCCESSED = 'gift_successed',
  SUB_SUCCESSED = 'sub_successed',
  EMOTE_DIALOG = 'emote_dialog'
}

// reference program get parameter key.
export const REF_KEY = 'ref';
export const REF_KEY_STREAMER = 'streamref';
export const REFER_KEY = 'refer';
export const enum REFER_TYPE {
  USER = 'user',
  STREAMER = 'streamer',
  HAPPY_HOUR = 'happy_hour'
}

export const GRECAPTCHA_SITE_KEY = '6Lf5BmkUAAAAAKYk6gV1OzK05pOv99MOQoXSIrgj';

export const ONE_DAY = 24 * 60 * 60 * 1000;
export const ONE_MONTH = 30 * ONE_DAY;

export const colorMap = new Map<string, string>([
  ['yellow', '255,211,0'],
  ['blue', '107,214,214'],
  ['red', '255,59,0'],
  ['white', '255,255,255'],
  ['grey', '173,173,173'],
  ['grey-darken-1', '121,122,126'],
  ['grey-darken-2', '58,60,63'],
  ['grey-darken-3', '44,47,51'],
  ['grey-darken-4', '32,34,37'],
  ['grey-darken-5', '25,27,31'],
  ['grey-darken-6', '18,21,23'],
  ['grey-darken-7', '15,18,20'],
  ['grey-darken-8', '176,175,166'],
  ['pending', '255,211,0'],
  ['processed', '144,193,250'],
  ['onhold', '206,132,232'],
  ['cancelled', '229,147,107'],
  ['rejected', '240,128,128'],
  ['failed', '253,109,65'],
  ['delivered', '107,214,214'],
  ['unverified', '173,173,173'],
  ['returned', '250,244,96'],
  ['completed', '144,193,250'],
  ['refund_pending', '255,211,0'],
  ['refund_unverified', '107,214,214'],
  ['refunded', '173,173,173']
]);
