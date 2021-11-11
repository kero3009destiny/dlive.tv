export type Maybe<T> = T | null;

export interface CategoriesOption {
  first?: Maybe<number>;

  after?: Maybe<string>;

  languageID?: Maybe<number>;
}

export interface CategoryLivestreamsOption {
  first?: Maybe<number>;

  after?: Maybe<string>;

  languageID?: Maybe<number>;

  showNSFW?: Maybe<boolean>;

  order?: Maybe<LivestreamSortOrder>;
}

export interface UserRankedUserOption {
  first?: Maybe<number>;

  after?: Maybe<string>;

  type: UserRankedUserType;
}

export interface ListModLogsInput {
  operator?: Maybe<string>;

  operation?: Maybe<string>;

  start?: Maybe<number>;

  end?: Maybe<number>;

  first?: Maybe<number>;

  after?: Maybe<string>;
}

export interface SuperchatInput {
  from: string;

  to: string;

  type: DonationType;
}

export interface RankListPerDayInput {
  time: string;

  first?: Maybe<number>;

  after?: Maybe<string>;
}

export interface RegionInfo {
  ip: string;

  city: string;

  region: string;

  regionCode: string;

  country: string;

  countryCode: string;

  continentCode: string;

  utcOffset: string;
}

export interface LivestreamsOption {
  first?: Maybe<number>;

  after?: Maybe<string>;

  languageID?: Maybe<number>;

  categoryID?: Maybe<number>;

  showNSFW?: Maybe<boolean>;

  order?: Maybe<LivestreamSortOrder>;

  userLanguageCode?: Maybe<string>;

  showMatureContent?: Maybe<boolean>;
}

export interface ListOfNewFollowersCountStatsInput {
  since: string;

  limit: number;

  isEnglish: boolean;
}

export interface RedirectLinkOption {
  ua: string;

  screenWidth: string;

  screenHeight: string;

  pixelRatio?: Maybe<string>;
}

export interface ListCashinRecordsInput {
  username?: Maybe<string>;

  vendor?: Maybe<CashinVendorType>;

  item?: Maybe<string>;

  price?: Maybe<string>;

  currency?: Maybe<string>;

  ip?: Maybe<string>;

  country?: Maybe<string>;

  status?: Maybe<CashinStatusType>;

  comment?: Maybe<string>;

  commitHash?: Maybe<string>;

  startTime: number;

  endTime: number;

  limit?: Maybe<number>;

  asc?: Maybe<boolean>;
}

export interface ListCashoutDashboardInput {
  username?: Maybe<string>;

  email?: Maybe<string>;

  method: CashOutMethodType;

  status: CashOutStatus;

  btcAddress?: Maybe<string>;

  txId?: Maybe<string>;

  country?: Maybe<string>;

  tag?: Maybe<string>;

  startRequestTime?: Maybe<number>;

  endRequestTime?: Maybe<number>;

  startProcessTime?: Maybe<number>;

  endProcessTime?: Maybe<number>;

  startAmount?: Maybe<number>;

  endAmount?: Maybe<number>;

  limit?: Maybe<number>;

  Asc?: Maybe<boolean>;

  partnerStatus?: Maybe<PartnerStatus>;
}

export interface ListBankAddressDashboardInput {
  username?: Maybe<string>;

  status?: Maybe<BankAddressStatusType>;

  startTime: number;

  endTime: number;

  limit?: Maybe<number>;

  asc?: Maybe<boolean>;

  beneId?: Maybe<string>;
}

export interface CashinDailyRecordInput {
  start: number;

  numDays: number;
}

export interface RankedUserOption {
  first?: Maybe<number>;

  after?: Maybe<string>;

  type: RankedUserType;
}

export interface ThirdPartyApplicationInput {
  appName: string;

  appDomains: string;

  appIcon: string;

  policyUrl: string;

  tosUrl: string;

  contactEmail: string;
}

export interface DonateInput {
  permlink: string;

  type: DonationType;

  count: number;

  message?: Maybe<string>;
}

export interface AddEmoteInput {
  type: EmoteType;

  level: EmoteLevel;

  mimeType: string;

  url: string;

  name?: Maybe<string>;

  streamer?: Maybe<string>;
}

export interface DeleteEmoteInput {
  type: EmoteType;

  level: EmoteLevel;

  name: string;

  streamer?: Maybe<string>;
}

export interface SaveEmoteInput {
  type: EmoteType;

  level: EmoteLevel;

  myLevel: EmoteLevel;

  name: string;

  streamer?: Maybe<string>;
}

export interface AddHighlightInput {
  permlink: string;

  thumbnailUrl: string;

  title: string;

  categoryId: number;
}

export interface SeenHighlight {
  permlink: string;

  username: string;

  createdAt: string;
}

export interface SetStreamTemplateInput {
  title: string;

  ageRestriction: boolean;

  earnRestriction: boolean;

  thumbnailUrl: string;

  disableAlert: boolean;

  categoryID: number;

  languageID: number;

  offlineImage?: Maybe<string>;

  saveReplay?: Maybe<boolean>;
}

export interface PanelAddInput {
  type: PanelType;
}

export interface PanelDeleteInput {
  id: number;
}

export interface PanelUpdateInput {
  id: number;

  title: string;

  imageURL: string;

  imageLinkURL: string;

  body: string;
}

export interface PanelOrderInput {
  ids: number[];
}

export interface PartnerApplicationInput {
  partnerStatus: PartnerStatus;

  username: string;

  displayname: string;

  realName: string;

  email: string;

  phone: string;

  language: string;

  country: string;

  twitter?: Maybe<string>;

  facebook?: Maybe<string>;

  instagram?: Maybe<string>;

  discord?: Maybe<string>;

  youtube?: Maybe<string>;

  twitch?: Maybe<string>;

  mixer?: Maybe<string>;

  other?: Maybe<string>;

  questionnaire: string;

  vouchers: string[];
}

export interface AndroidPurchaseInput {
  orderID?: Maybe<string>;

  packageName: string;

  purchaseTime?: Maybe<string>;

  signature?: Maybe<string>;

  sku: string;

  purchaseToken: string;

  streamer?: Maybe<string>;

  giftSubReceiver?: Maybe<string>;

  giftSubCount?: Maybe<number>;
}

export interface AddBankAddressInput {
  method: CashOutMethodType;

  BankAddress?: Maybe<BankAddressInput>;

  BTCAddress?: Maybe<BtcAddressInput>;

  BTTAddress?: Maybe<BtcAddressInput>;

  TRXAddress?: Maybe<BtcAddressInput>;

  USDTAddress?: Maybe<BtcAddressInput>;

  TUSDAddress?: Maybe<BtcAddressInput>;

  nickname: string;
}

export interface BankAddressInput {
  name: string;

  address1: string;

  address2: string;

  city: string;

  country: string;

  region: string;

  postalCode: string;

  accountNumber: string;

  routingNumber: string;

  beneficiaryBankBranchName: string;

  contactName: string;

  accountType: BankAccountType;

  bankInfo?: Maybe<BankInfoInput>;

  classification: BankClassificationType;

  iban?: Maybe<string>;

  phone?: Maybe<string>;

  beneficiaryCPF?: Maybe<string>;

  agencyCode?: Maybe<string>;
}

export interface BankInfoInput {
  bankName: string;

  address1: string;

  address2: string;

  city: string;

  region: string;

  country: string;

  postalCode: string;

  swiftBic: string;
}

export interface BtcAddressInput {
  address: string;

  country: string;
}

export interface RequestCashOutInput {
  method: CashOutMethodType;

  linoAmount: string;

  addressID: string;
}

export interface AddTaxInfoInput {
  fullName: string;

  businessName: string;

  taxPayerID: string;

  taxPayerType: string;

  taxClassification: string;

  exemptPayeeCode: string;

  exemptFATCACode: string;

  address: string;

  city: string;

  state: string;

  zipcode: string;

  signature: string;

  signatureDate: string;

  electronicDelivery: boolean;
}

export interface InitiateAmazonPaymentInput {
  item: AmazonPaymentType;

  returnURL: string;

  cancelReturnURL: string;
}

export interface ProcessCashoutsInput {
  id: string[];
}

export interface ProcessRefundInput {
  id: string;

  comment: string;
}

export interface UpdateCashinRefundStatusInput {
  id: string;

  remark: string;

  status: CashinStatusType;
}

export interface UpdateCashoutStatusInput {
  id: string;

  remark: string;

  status: CashOutStatus;
}

export interface UpdateSuspiciousStatusInput {
  username: string;

  status: SuspiciousStatus;

  reason: string;
}

export interface DeleteSuspiciousStatusInput {
  username: string;
}

export interface UpdateBankAddressStatusInput {
  id: string;

  status: BankAddressStatusType;

  err: string;
}

export interface SendStreamchatMessageInput {
  streamer: string;

  message: string;

  roomRole: RoomRole;

  subscribing: boolean;

  emojis?: Maybe<number[]>;
}

export interface SetEmoteModeInput {
  NoMineEmote: boolean;

  NoGlobalEmote: boolean;

  NoAllEmote: boolean;
}

export interface SetDisplaySettingInput {
  lemon: boolean;

  icecream: boolean;

  diamond: boolean;

  ninjaghini: boolean;

  ninjet: boolean;

  follow: boolean;

  subscription: boolean;

  hosting: boolean;

  moderation: boolean;

  chat: boolean;

  stickers: boolean;
}

export interface SetActivitySettingInput {
  lemon: boolean;

  icecream: boolean;

  diamond: boolean;

  ninjaghini: boolean;

  ninjet: boolean;

  follow: boolean;

  subscription: boolean;

  hosting: boolean;

  moderation: boolean;
}

export interface WearBadgeInput {
  badge: BadgeType;

  wore: boolean;
}

export interface SubSettingInput {
  badgeText: string;

  badgeColor: string;

  textColor: string;

  streakTextColor?: Maybe<string>;

  benefits?: Maybe<string[]>;

  backgroundImage?: Maybe<string>;
}

export interface ThirdPartyRegisterInput {
  recaptchaToken: string;

  username: string;

  displayname: string;

  avatar: string;

  accessToken: string;

  deviceType: DeviceType;

  referrer?: Maybe<string>;

  referralSource?: Maybe<ReferralSource>;

  deviceID?: Maybe<string>;

  language?: Maybe<string>;

  geetestResp?: Maybe<GeetestValidateResponse>;
}

export interface GeetestValidateResponse {
  sessionID: string;

  challenge: string;

  validate: string;

  seccode: string;
}

export interface UpdateUserInput {
  avatar?: Maybe<string>;

  displayname?: Maybe<string>;

  language?: Maybe<string>;

  about?: Maybe<string>;
}

export interface AddVideoInput {
  permlink: string;

  thumbnailUrl: string;

  title: string;

  content: string;

  filename: string;

  bucketName: string;

  region: string;

  categoryId: number;

  languageId: number;
}

export enum LivestreamSortOrder {
  New = 'NEW',
  Trending = 'TRENDING'
}

export enum PartnerStatus {
  None = 'NONE',
  VerifiedPartner = 'VERIFIED_PARTNER',
  GlobalPartner = 'GLOBAL_PARTNER',
  GlobalPartnerSuspended = 'GLOBAL_PARTNER_SUSPENDED',
  Affiliate = 'AFFILIATE'
}

export enum Role {
  None = 'None',
  Staff = 'Staff',
  Guardian = 'Guardian',
  Bot = 'Bot'
}

export enum RoomRole {
  Member = 'Member',
  Moderator = 'Moderator',
  Owner = 'Owner'
}

export enum BadgeType {
  EngagementBadge = 'ENGAGEMENT_BADGE',
  FoundingMember = 'FOUNDING_MEMBER',
  CryptoSuperstar = 'CRYPTO_SUPERSTAR',
  ChristmasTree = 'CHRISTMAS_TREE',
  Santa = 'SANTA',
  ValentineBadge = 'VALENTINE_BADGE'
}

export enum ContributionSummaryRule {
  ThisMonth = 'THIS_MONTH',
  AllTime = 'ALL_TIME'
}

export enum RelationSortOrder {
  Az = 'AZ',
  Za = 'ZA',
  New = 'NEW',
  Old = 'OLD',
  Earning = 'EARNING',
  Follower = 'FOLLOWER'
}

export enum VideoSortOrder {
  New = 'New',
  Old = 'Old',
  Trending = 'Trending',
  Views = 'Views'
}

export enum VoteStatus {
  None = 'None',
  Upvote = 'Upvote',
  Downvote = 'Downvote'
}

export enum SubscriptionStatus {
  Pending = 'pending',
  Active = 'active',
  PCancel = 'p_cancel',
  Cancelled = 'cancelled',
  Terminated = 'terminated',
  GracePeriod = 'grace_period'
}

export enum SubPlatform {
  Ios = 'ios',
  Android = 'android',
  Skrill = 'skrill',
  Amazon = 'amazon',
  Paybros = 'paybros',
  Others = 'others'
}

export enum SubType {
  Recurring = 'recurring',
  Once = 'once'
}

export enum ReferralState {
  Current = 'CURRENT',
  Expired = 'EXPIRED',
  Completed = 'COMPLETED'
}

export enum RegistrationType {
  Facebook = 'Facebook',
  Google = 'Google',
  Twitch = 'Twitch',
  Lino = 'Lino',
  Email = 'Email'
}

export enum CashinStatusType {
  All = 'ALL',
  Completed = 'COMPLETED',
  Overpaid = 'OVERPAID',
  Underpaid = 'UNDERPAID',
  Refunded = 'REFUNDED',
  Pending = 'PENDING',
  RefundPending = 'REFUND_PENDING',
  RefundUnverified = 'REFUND_UNVERIFIED',
  Other = 'OTHER',
  RefundRejected = 'REFUND_REJECTED',
  RefundReturned = 'REFUND_RETURNED'
}

export enum CashinVendorType {
  All = 'All',
  Android = 'Android',
  Apple = 'Apple',
  Xsolla = 'Xsolla',
  Coinbase = 'Coinbase',
  Paybros = 'Paybros',
  Amazon = 'Amazon',
  Paypal = 'Paypal',
  Stripe = 'Stripe',
  RebillyProcessor = 'RebillyProcessor',
  Skrill = 'Skrill',
  Epin = 'Epin'
}

export enum RebillyCardType {
  Visa = 'Visa',
  MasterCard = 'MasterCard',
  Amex = 'Amex',
  Discover = 'Discover',
  Dci = 'DCI',
  Jcb = 'JCB'
}

export enum ClipCommentOrderOption {
  Latest = 'Latest',
  MostLike = 'MostLike'
}

export enum EmoteLevel {
  UserLevel = 'USER_LEVEL',
  ChannelLevel = 'CHANNEL_LEVEL',
  GlobalLevel = 'GLOBAL_LEVEL',
  VipLevel = 'VIP_LEVEL'
}

export enum EmoteType {
  Emoji = 'EMOJI',
  Emote = 'EMOTE'
}

export enum PartnerApplicationStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

export enum KycStatus {
  Ready = 'Ready',
  Pending = 'Pending',
  Failed = 'Failed',
  Denied = 'Denied',
  Approved = 'Approved',
  TooManyAttempts = 'TooManyAttempts',
  NoApplicant = 'NoApplicant'
}

export enum BankAddressStatusType {
  All = 'ALL',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
  Incorrect = 'INCORRECT'
}

export enum CashOutMethodType {
  All = 'ALL',
  Btc = 'BTC',
  Bank = 'BANK',
  Tipalti = 'TIPALTI',
  Btt = 'BTT',
  Trx = 'TRX',
  Usdt = 'USDT',
  Tusd = 'TUSD'
}

export enum CashOutStatus {
  All = 'All',
  Pending = 'Pending',
  Cancelled = 'Cancelled',
  Processed = 'Processed',
  Onhold = 'Onhold',
  Rejected = 'Rejected',
  Returned = 'Returned',
  Failed = 'Failed',
  Unverified = 'Unverified',
  Delivered = 'Delivered',
  Processing = 'Processing'
}

export enum ChatType {
  Message = 'Message',
  Gift = 'Gift',
  Live = 'Live',
  Offline = 'Offline',
  Follow = 'Follow',
  Subscription = 'Subscription',
  ExtendSub = 'ExtendSub',
  Delete = 'Delete',
  Host = 'Host',
  ChatMode = 'ChatMode',
  Ban = 'Ban',
  Moderator = 'Moderator',
  Mod = 'Mod',
  Emote = 'Emote',
  Timeout = 'Timeout',
  TcValue = 'TCValue',
  Homepage = 'Homepage',
  GiftSub = 'GiftSub',
  GiftSubReceive = 'GiftSubReceive',
  Clip = 'Clip',
  SubStreak = 'SubStreak'
}

export enum ChatModeType {
  Default = 'DEFAULT',
  Subonly = 'SUBONLY',
  Followonly = 'FOLLOWONLY'
}

export enum FollowChatDelayType {
  None = 'NONE',
  TenMin = 'TEN_MIN',
  OneHour = 'ONE_HOUR',
  OneDay = 'ONE_DAY'
}

export enum DonationType {
  Lemon = 'LEMON',
  IceCream = 'ICE_CREAM',
  Diamond = 'DIAMOND',
  Ninjaghini = 'NINJAGHINI',
  MiniLemon = 'MINI_LEMON',
  Ninjet = 'NINJET',
  MiniGhini = 'MINI_GHINI',
  MiniJet = 'MINI_JET',
  MiniDiamond = 'MINI_DIAMOND',
  MiniIcecream = 'MINI_ICECREAM',
  Lino = 'LINO',
  Btt = 'BTT',
  Trx = 'TRX'
}

export enum ChannelAction {
  Ban = 'Ban',
  Unban = 'Unban',
  GlobalBan = 'GlobalBan',
  SetModerator = 'SetModerator',
  RemoveModerator = 'RemoveModerator',
  Delete = 'Delete',
  SetTimeout = 'SetTimeout'
}

export enum UserRankedUserType {
  Engagement = 'Engagement'
}

export enum BanStatus {
  NoBan = 'NO_BAN',
  BanFromStreaming = 'BAN_FROM_STREAMING',
  AccountSuspended = 'ACCOUNT_SUSPENDED'
}

export enum TreasureChestState {
  Collecting = 'COLLECTING',
  Claiming = 'CLAIMING'
}

export enum TreasureChestBuffType {
  Verifiedpartnerbuff = 'VERIFIEDPARTNERBUFF',
  Globalpartnerbuff = 'GLOBALPARTNERBUFF',
  Partnerdayeventbuff = 'PARTNERDAYEVENTBUFF'
}

export enum GiveawayRewardType {
  Money = 'MONEY',
  Happyhourticket = 'HAPPYHOURTICKET'
}

export enum TcUserTransferResultType {
  Success = 'Success',
  InvalidAmount = 'InvalidAmount',
  ExceedWeeklyLimit = 'ExceedWeeklyLimit',
  InternalError = 'InternalError'
}

export enum SortableHappyHourField {
  Score = 'SCORE',
  DonationReceived = 'DONATION_RECEIVED',
  DonationGiven = 'DONATION_GIVEN',
  MaxChatCount = 'MAX_CHAT_COUNT',
  FollowerIncrement = 'FOLLOWER_INCREMENT',
  NonPartner = 'NON_PARTNER',
  BigStreamer = 'BIG_STREAMER',
  SmallStreamer = 'SMALL_STREAMER'
}

export enum ClipSortOrder {
  CreatedAt = 'CreatedAt',
  Upvotes = 'Upvotes',
  PickTime = 'PickTime',
  Views = 'Views'
}

export enum PanelType {
  Default = 'DEFAULT'
}

export enum TronToken {
  Btt = 'BTT',
  Trx = 'TRX'
}

export enum HappyHourTicketType {
  DonationTicket = 'DONATION_TICKET',
  ReferTicket = 'REFER_TICKET',
  FreeTicket = 'FREE_TICKET',
  ShareTicket = 'SHARE_TICKET',
  MobileTicket = 'MOBILE_TICKET',
  ChestTicket = 'CHEST_TICKET',
  StreamTicket = 'STREAM_TICKET'
}

export enum HappyHourTicketTag {
  WaterTicket = 'WATER_TICKET',
  AirTicket = 'AIR_TICKET',
  EarthTicket = 'EARTH_TICKET',
  FireTicket = 'FIRE_TICKET'
}

export enum BttMethod {
  StakeIn = 'StakeIn',
  StakeOut = 'StakeOut',
  ClaimReward = 'ClaimReward',
  ClaimPendingStakeOut = 'ClaimPendingStakeOut'
}

export enum CarouselType {
  Livestream = 'LIVESTREAM',
  Poster = 'POSTER',
  User = 'USER',
  Video = 'VIDEO'
}

export enum NotificaionCategory {
  AllCategory = 'ALL_CATEGORY',
  Event = 'EVENT',
  General = 'GENERAL',
  Golive = 'GOLIVE',
  User = 'USER'
}

export enum PermissionType {
  Admin = 'ADMIN',
  Cashier = 'CASHIER',
  Guardian = 'GUARDIAN'
}

export enum SuspiciousStatus {
  Trusted = 'Trusted',
  Fraud = 'Fraud'
}

export enum RewardStatsResult {
  Ok = 'OK',
  InvalidArgument = 'INVALID_ARGUMENT',
  InternalError = 'INTERNAL_ERROR'
}

export enum RankedUserType {
  GlobalUserEngagement = 'GlobalUserEngagement',
  GlobalLastUserEngagement = 'GlobalLastUserEngagement',
  GlobalChannelEngagement = 'GlobalChannelEngagement',
  GlobalSmallChannelEngagement = 'GlobalSmallChannelEngagement',
  EventFollower = 'EventFollower',
  Leaderboard = 'Leaderboard',
  TreasureChest = 'TreasureChest'
}

export enum ApplicationUserRole {
  User = 'User',
  Owner = 'Owner',
  Admin = 'Admin',
  Bot = 'Bot'
}

export enum ClipCommentLikeAction {
  Like = 'Like',
  Unlike = 'Unlike'
}

export enum CommentVoteAction {
  Up = 'Up',
  Down = 'Down',
  Clear = 'Clear'
}

export enum KeyPartnerType {
  CocaCola = 'CocaCola'
}

export enum DeviceType {
  Web = 'WEB',
  Android = 'ANDROID',
  Ios = 'IOS'
}

export enum CountryCode {
  Tr = 'TR',
  En = 'EN'
}

export enum NotificationPlatform {
  Email = 'EMAIL',
  Browser = 'BROWSER',
  Push = 'PUSH'
}

export enum XsollaItemType {
  X88Linopoints = 'X88LINOPOINTS',
  X288Linopoints = 'X288LINOPOINTS',
  X688Linopoints = 'X688LINOPOINTS',
  X1188Linopoints = 'X1188LINOPOINTS',
  X2888Linopoints = 'X2888LINOPOINTS',
  X7888Linopoints = 'X7888LINOPOINTS',
  X78888Linopoints = 'X78888LINOPOINTS'
}

export enum CoinbaseItemType {
  C88Linopoints = 'C88LINOPOINTS',
  C288Linopoints = 'C288LINOPOINTS',
  C688Linopoints = 'C688LINOPOINTS',
  C1188Linopoints = 'C1188LINOPOINTS',
  C2888Linopoints = 'C2888LINOPOINTS',
  C7888Linopoints = 'C7888LINOPOINTS',
  C78888Linopoints = 'C78888LINOPOINTS'
}

export enum BankAccountType {
  None = 'NONE',
  Cacc = 'CACC',
  Svgs = 'SVGS'
}

export enum BankClassificationType {
  Individual = 'Individual',
  Business = 'Business'
}

export enum PaybrosPaymentType {
  P88 = 'P88',
  P288 = 'P288',
  P688 = 'P688',
  P1188 = 'P1188',
  P2888 = 'P2888',
  P7888 = 'P7888',
  P78888 = 'P78888'
}

export enum PaybrosPaymentChannelType {
  CreditCardPayment = 'CreditCardPayment'
}

export enum AmazonPaymentType {
  A88 = 'A88',
  A288 = 'A288',
  A688 = 'A688',
  A1188 = 'A1188',
  A2888 = 'A2888',
  A7888 = 'A7888',
  A78888 = 'A78888'
}

export enum RebillyPaymentType {
  R88 = 'R88',
  R288 = 'R288',
  R688 = 'R688',
  R1188 = 'R1188',
  R2888 = 'R2888',
  R7888 = 'R7888',
  R78888 = 'R78888'
}

export enum SkrillPaymentType {
  S88 = 'S88',
  S288 = 'S288',
  S688 = 'S688',
  S1188 = 'S1188',
  S2888 = 'S2888',
  S7888 = 'S7888',
  S78888 = 'S78888'
}

export enum RecurringSubPaymentType {
  Monthly = 'monthly',
  Quarterly = 'quarterly',
  HalfYearly = 'halfYearly',
  Yearly = 'yearly'
}

export enum EpinPaymentType {
  E88 = 'E88',
  E288 = 'E288',
  E688 = 'E688',
  E1188 = 'E1188',
  E2888 = 'E2888',
  E7888 = 'E7888',
  E78888 = 'E78888'
}
export enum StripePaymentType {
  S88 = 'S88',
  S288 = 'S288',
  S688 = 'S688',
  S1188 = 'S1188',
  S2888 = 'S2888',
  S7888 = 'S7888',
  S78888 = 'S78888'
}

export enum ReferralSource {
  HappyHour = 'HappyHour',
  Streamer = 'Streamer',
  Commission = 'Commission'
}

export enum HappyHourEventType {
  TicketReceived = 'TicketReceived'
}

export enum TreasureChestMessageType {
  ValueExpired = 'ValueExpired',
  ValueUpdated = 'ValueUpdated',
  ReadyToCollect = 'ReadyToCollect',
  GiveawayEnd = 'GiveawayEnd',
  GiveawayStarted = 'GiveawayStarted',
  ScheduledGiveawayStarted = 'ScheduledGiveawayStarted'
}

export type Url = string;

export type DateTime = string;

export type Coin = string;

export type Color = string;

export type PhoneNumber = string;

export type EmailAddress = string;

// ====================================================
// Documents
// ====================================================

export namespace ActivitySettingSet {
  export type Variables = {
    setting: SetActivitySettingInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    activitySettingSet: ActivitySettingSet;
  };

  export type ActivitySettingSet = {
    __typename?: 'SetActivitySettingResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace AddComment {
  export type Variables = {
    permlink: string;
    content: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    comment: Comment;
  };

  export type Comment = {
    __typename?: 'CommentResponse';

    comment: Maybe<_Comment>;

    err: Maybe<Err>;
  };

  export type _Comment = VVideoPbCommentItemFrag.Fragment;

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace AddCommentVote {
  export type Variables = {
    permlink: string;
    action: CommentVoteAction;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    commentVote: CommentVote;
  };

  export type CommentVote = {
    __typename?: 'CommentVoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace AddGiftSub {
  export type Variables = {
    streamer: string;
    toUser?: Maybe<string>;
    count?: Maybe<number>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    giftSub: GiftSub;
  };

  export type GiftSub = {
    __typename?: 'GiftSubResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace AddGiftSubClaim {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    giftSubClaim: GiftSubClaim;
  };

  export type GiftSubClaim = {
    __typename?: 'ClaimGiftSubResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace AddGiftSubDismiss {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    giftSubDismiss: GiftSubDismiss;
  };

  export type GiftSubDismiss = {
    __typename?: 'DismissGiftSubResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace AddSubscribe {
  export type Variables = {
    streamer: string;
    month?: Maybe<number>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    subscribeWithCashback: SubscribeWithCashback;
  };

  export type SubscribeWithCashback = {
    __typename?: 'SubscribeWithCashbackResponse';

    err: Maybe<Err>;

    cashbacked: Maybe<boolean>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UploadAddVideo {
  export type Variables = {
    video: AddVideoInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    videoAdd: VideoAdd;
  };

  export type VideoAdd = {
    __typename?: 'AddVideoResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace AddWatch {
  export type Variables = {
    permlink: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    watch: Watch;
  };

  export type Watch = {
    __typename?: 'WatchResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace AmazonConfirmSubscriptionAgreement {
  export type Variables = {
    agreementID: string;
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    AmazonConfirmSubscriptionAgreement: AmazonConfirmSubscriptionAgreement;
  };

  export type AmazonConfirmSubscriptionAgreement = {
    __typename?: 'AmazonConfirmSubscriptionAgreementResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace AmazonGiftSubscriptionPaymentSuccessNotification {
  export type Variables = {
    sellerOrderId: string;
    orderReferenceId: string;
    amount: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    AmazonGiftSubscriptionPaymentSuccessNotification: AmazonGiftSubscriptionPaymentSuccessNotification;
  };

  export type AmazonGiftSubscriptionPaymentSuccessNotification = {
    __typename?: 'AmazonGiftSubscriptionPaymentSuccessNotificationResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace AmazonPaymentInitiate {
  export type Variables = {
    input: InitiateAmazonPaymentInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    amazonPaymentInitiate: AmazonPaymentInitiate;
  };

  export type AmazonPaymentInitiate = {
    __typename?: 'InitiateAmazonPaymentResponse';

    signature: string;

    orderID: string;

    amount: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace AmazonSetSubscriptionAgreement {
  export type Variables = {
    agreementID: string;
    streamer: string;
    paymentType: RecurringSubPaymentType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    AmazonSetSubscriptionAgreement: AmazonSetSubscriptionAgreement;
  };

  export type AmazonSetSubscriptionAgreement = {
    __typename?: 'AmazonSetSubscriptionAgreementResponse';

    amazonBillingAgreementId: string;

    creationTimestamp: string;

    sellerNote: string;

    storeName: string;

    billingAgreementConsent: boolean;

    destination: Maybe<Destination>;

    err: Maybe<Err>;
  };

  export type Destination = {
    __typename?: 'AmazonDestination';

    type: Maybe<string>;

    city: Maybe<string>;

    countryCode: Maybe<string>;

    postalCode: Maybe<string>;

    stateOrRegion: Maybe<string>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace BankAddressAdd {
  export type Variables = {
    input: AddBankAddressInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    bankAddressAdd: BankAddressAdd;
  };

  export type BankAddressAdd = {
    __typename?: 'AddBankAddressResponse';

    bankAddress: Maybe<BankAddress>;

    err: Maybe<Err>;
  };

  export type BankAddress = DAddressCardFrag.Fragment;

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace BankAddressDelete {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    bankAddressDelete: BankAddressDelete;
  };

  export type BankAddressDelete = {
    __typename?: 'DeleteBankAddressResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace BrowserDeregisterNotification {
  export type Variables = {
    token: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    browserDeregisterNotification: BrowserDeregisterNotification;
  };

  export type BrowserDeregisterNotification = {
    __typename?: 'DeregisterPushNotificaionResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace BrowserRegisterNotification {
  export type Variables = {
    token: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    browserRegisterNotification: BrowserRegisterNotification;
  };

  export type BrowserRegisterNotification = {
    __typename?: 'RegisterPushNotificationResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace CancelSubscriptionReason {
  export type Variables = {
    streamer: string;
    reason: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    cancelSubscriptionReason: CancelSubscriptionReason;
  };

  export type CancelSubscriptionReason = {
    __typename?: 'CancelSubscriptionResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace CashinRefundRequest {
  export type Variables = {
    id: string;
    reason: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    cashinRefundRequest: CashinRefundRequest;
  };

  export type CashinRefundRequest = {
    __typename?: 'RequestCashInRefundResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace CashOutCodeCheck {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    cashOutCodeCheck: CashOutCodeCheck;
  };

  export type CashOutCodeCheck = {
    __typename?: 'CheckCashOutCodeResponse';

    viaWallet: boolean;

    id: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace CashOutRequest {
  export type Variables = {
    input: RequestCashOutInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    cashOutRequest: CashOutRequest;
  };

  export type CashOutRequest = {
    __typename?: 'RequestCashOutResponse';

    invoice: Maybe<Invoice>;

    needKyc: boolean;

    needTax: boolean;

    err: Maybe<Err>;
  };

  export type Invoice = {
    __typename?: 'CashOutInvoice';

    username: string;

    linoAmount: string;

    usdAmount: string;

    method: CashOutMethodType;

    address: string;

    fee: string;

    estimatedReceivedTime: string;

    currency: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace DeleteChat {
  export type Variables = {
    streamer: string;
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chatDelete: ChatDelete;
  };

  export type ChatDelete = {
    __typename?: 'DeleteChatResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ChatEmoteModeSet {
  export type Variables = {
    emoteMode: SetEmoteModeInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    emoteModeSet: EmoteModeSet;
  };

  export type EmoteModeSet = {
    __typename?: 'SetEmoteModeResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace SetChatInterval {
  export type Variables = {
    seconds: number;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chatIntervalSet: ChatIntervalSet;
  };

  export type ChatIntervalSet = {
    __typename?: 'SetChatIntervalResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace SetChatMode {
  export type Variables = {
    chatMode: ChatModeType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chatModeSet: ChatModeSet;
  };

  export type ChatModeSet = {
    __typename?: 'SetChatModeResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace ChatNoLinkSet {
  export type Variables = {
    disable: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chatLinkDisabledSet: ChatLinkDisabledSet;
  };

  export type ChatLinkDisabledSet = {
    __typename?: 'SetChatLinkDisabledResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ChatVerifiedEmailSet {
  export type Variables = {
    verifiedOnly: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chatVerifiedOnlySet: ChatVerifiedOnlySet;
  };

  export type ChatVerifiedOnlySet = {
    __typename?: 'SetChatVerifiedOnlyResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ChestUserTransfer {
  export type Variables = {
    amount: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    treasureChestUserTransfer: TreasureChestUserTransfer;
  };

  export type TreasureChestUserTransfer = {
    __typename?: 'TreasureChestUserTransferResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace ClaimWalletAccount {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    claimLinoAccount: ClaimLinoAccount;
  };

  export type ClaimLinoAccount = {
    __typename?: 'ClaimLinoAccountResponse';

    token: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipAdd {
  export type Variables = {
    permlink: string;
    url: string;
    streamer: string;
    startTime?: Maybe<number>;
    endTime?: Maybe<number>;
    description: string;
    thumbnailUrl: string;
    sendChat: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipAdd: ClipAdd;
  };

  export type ClipAdd = {
    __typename?: 'ClipAddResponse';

    id: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipCommentAdd {
  export type Variables = {
    content: string;
    clipID: string;
    commentID?: Maybe<string>;
    replyID?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipComment: ClipComment;
  };

  export type ClipComment = {
    __typename?: 'ClipCommentResponse';

    clipComment: Maybe<_ClipComment>;

    err: Maybe<Err>;
  };

  export type _ClipComment = ClipCommentItemFrag.Fragment;

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipCommentDelete {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipCommentDelete: ClipCommentDelete;
  };

  export type ClipCommentDelete = {
    __typename?: 'ClipCommentDeleteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipCommentDeleteAndMute {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipCommentDeleteAndMute: ClipCommentDeleteAndMute;
  };

  export type ClipCommentDeleteAndMute = {
    __typename?: 'ClipCommentDeleteAndMuteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipCommentLike {
  export type Variables = {
    id: string;
    action: ClipCommentLikeAction;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipCommentLike: ClipCommentLike;
  };

  export type ClipCommentLike = {
    __typename?: 'ClipCommentLikeResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipDelete {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipDelete: ClipDelete;
  };

  export type ClipDelete = {
    __typename?: 'ClipDeleteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipMomentAdd {
  export type Variables = {
    url: string;
    description: string;
    thumbnailUrl: string;
    duration: number;
    languageID: number;
    categoryID: number;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipMomentAdd: ClipMomentAdd;
  };

  export type ClipMomentAdd = {
    __typename?: 'clipMomentAddResponse';

    id: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipPick {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipPick: ClipPick;
  };

  export type ClipPick = {
    __typename?: 'ClipPickResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipPresignUrlGenerate {
  export type Variables = {
    streamer: string;
    format: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipPresignURLGenerate: ClipPresignUrlGenerate;
  };

  export type ClipPresignUrlGenerate = {
    __typename?: 'GenerateClipPresignURLResponse';

    presignURL: Maybe<PresignUrl>;

    err: Maybe<Err>;
  };

  export type PresignUrl = {
    __typename?: 'PresignURL';

    url: string;

    key: string;

    bucketName: string;

    region: string;

    videoURL: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace ClipShare {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipShare: ClipShare;
  };

  export type ClipShare = {
    __typename?: 'ClipShareResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipUnpick {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipUnpick: ClipUnpick;
  };

  export type ClipUnpick = {
    __typename?: 'ClipUnpickResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipUnvote {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipUnvote: ClipUnvote;
  };

  export type ClipUnvote = {
    __typename?: 'ClipUnvoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipUpvote {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipUpvote: ClipUpvote;
  };

  export type ClipUpvote = {
    __typename?: 'ClipUpvoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ClipViewAdd {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    clipViewAdd: ClipViewAdd;
  };

  export type ClipViewAdd = {
    __typename?: 'ClipViewAddResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace CoinbaseToken {
  export type Variables = {
    item: CoinbaseItemType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    coinbaseToken: CoinbaseToken;
  };

  export type CoinbaseToken = {
    __typename?: 'CoinbaseTokenResponse';

    token: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace CreateXsollaToken {
  export type Variables = {
    language?: Maybe<string>;
    item: XsollaItemType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    xsollaToken: XsollaToken;
  };

  export type XsollaToken = {
    __typename?: 'XsollaTokenResponse';

    token: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace DailyRewardClaim {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    dailyRewardClaim: DailyRewardClaim;
  };

  export type DailyRewardClaim = {
    __typename?: 'ClaimDailyRewardResponse';

    reward: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace DisplaySettingSet {
  export type Variables = {
    setting: SetDisplaySettingInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    displaySettingSet: DisplaySettingSet;
  };

  export type DisplaySettingSet = {
    __typename?: 'SetDisplaySettingResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace SendDownloadLink {
  export type Variables = {
    countryCode: CountryCode;
    phone: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    downloadLinkSend: DownloadLinkSend;
  };

  export type DownloadLinkSend = {
    __typename?: 'SendDownloadLinkResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace EmojiBan {
  export type Variables = {
    emoteStr: string;
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    emojiBan: EmojiBan;
  };

  export type EmojiBan = {
    __typename?: 'BanEmoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmojiUnban {
  export type Variables = {
    emoteStr: string;
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    emojiUnban: EmojiUnban;
  };

  export type EmojiUnban = {
    __typename?: 'UnbanEmoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace EmoteAdd {
  export type Variables = {
    input: AddEmoteInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    addEmote: AddEmote;
  };

  export type AddEmote = {
    __typename?: 'AddEmoteResponse';

    emote: Maybe<Emote>;

    err: Maybe<Err>;
  };

  export type Emote = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmoteBan {
  export type Variables = {
    emoteStr: string;
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    emoteBan: EmoteBan;
  };

  export type EmoteBan = {
    __typename?: 'BanEmoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmoteDelete {
  export type Variables = {
    input: DeleteEmoteInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    deleteEmote: DeleteEmote;
  };

  export type DeleteEmote = {
    __typename?: 'DeleteEmoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmoteSave {
  export type Variables = {
    input: SaveEmoteInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    saveEmote: SaveEmote;
  };

  export type SaveEmote = {
    __typename?: 'SaveEmoteResponse';

    emote: Maybe<Emote>;

    err: Maybe<Err>;
  };

  export type Emote = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmoteUnban {
  export type Variables = {
    emoteStr: string;
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    emoteUnban: EmoteUnban;
  };

  export type EmoteUnban = {
    __typename?: 'UnbanEmoteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}
export namespace StripeCreatePaymentIntent {
  export type Variables = {
    item: StripePaymentType;
    name: string;
    surname: string;
    email: string;
    currency: string;
    telephone: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    stripeCreatePaymentIntent: StripeCreatePaymentIntent;
  };

  export type StripeCreatePaymentIntent = {
    __typename?: 'StripeClientSecretResponse';

    clientSecret: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace EpinPaymentInitiate {
  export type Variables = {
    item: EpinPaymentType;
    name: string;
    surname: string;
    email: string;
    currency: string;
    telephone: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    epinPaymentInitiate: EpinPaymentInitiate;
  };

  export type EpinPaymentInitiate = {
    __typename?: 'EpinPaymentInitiateResponse';

    url: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace AddFilterWord {
  export type Variables = {
    word: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    filterWordAdd: FilterWordAdd;
  };

  export type FilterWordAdd = {
    __typename?: 'AddFilterWordResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace DeleteFilterWord {
  export type Variables = {
    word: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    filterWordDelete: FilterWordDelete;
  };

  export type FilterWordDelete = {
    __typename?: 'DeleteFilterWordResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace FollowUser {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    follow: Follow;
  };

  export type Follow = {
    __typename?: 'FollowResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace FollowChatDelaySet {
  export type Variables = {
    followChatDelay: FollowChatDelayType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    followChatDelaySet: FollowChatDelaySet;
  };

  export type FollowChatDelaySet = {
    __typename?: 'SetFollowChatDelayResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace GetAmazonSubscriptionSignature {
  export type Variables = {
    streamer: string;
    receiver?: Maybe<string>;
    subMonths: number;
    amount: string;
    currency: string;
    giftCount: number;
    returnUrl: string;
    cancelReturnUrl: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    GetAmazonSubscriptionSignature: GetAmazonSubscriptionSignature;
  };

  export type GetAmazonSubscriptionSignature = {
    __typename?: 'GetAmazonSubscriptionSignatureResponse';

    signature: string;

    orderID: string;

    sellerNote: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace GiveawayClaim {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    giveawayClaim: GiveawayClaim;
  };

  export type GiveawayClaim = {
    __typename?: 'ClaimGiveawayResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace GiveawayStart {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    giveawayStart: GiveawayStart;
  };

  export type GiveawayStart = {
    __typename?: 'StartGiveawayResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace KycApplicantAdd {
  export type Variables = {
    firstName: string;
    lastName: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    kycApplicantAdd: KycApplicantAdd;
  };

  export type KycApplicantAdd = {
    __typename?: 'AddKycApplicantResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace KycOnfidoTokenGenerate {
  export type Variables = {
    referrer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    kycOnfidoTokenGenerate: KycOnfidoTokenGenerate;
  };

  export type KycOnfidoTokenGenerate = {
    __typename?: 'GenerateOnfidoTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace KycStart {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    kycStart: KycStart;
  };

  export type KycStart = {
    __typename?: 'StartKycResponse';

    url: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace LoginWalletInitiate {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    initiateWalletLogin: InitiateWalletLogin;
  };

  export type InitiateWalletLogin = {
    __typename?: 'InitiateWalletLoginResponse';

    payload: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace EmailLogin {
  export type Variables = {
    email: string;
    password: string;
    recaptchaToken?: Maybe<string>;
    deviceType?: Maybe<DeviceType>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithEmail: LoginWithEmail;
  };

  export type LoginWithEmail = {
    __typename?: 'LoginResponse';

    me: Maybe<Me>;

    twofactorToken: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace LoginWithFb {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithFacebook: LoginWithFacebook;
  };

  export type LoginWithFacebook = LoginWithThirdParty.Fragment;
}

export namespace LoginWithTw {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithTwitch: LoginWithTwitch;
  };

  export type LoginWithTwitch = LoginWithThirdParty.Fragment;
}

export namespace LoginWithTwoFactor {
  export type Variables = {
    twofactorToken: string;
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithTwoFactor: LoginWithTwoFactor;
  };

  export type LoginWithTwoFactor = {
    __typename?: 'LoginResponse';

    me: Maybe<Me>;

    err: Maybe<Err>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace LoginWithWallet {
  export type Variables = {
    payload: string;
    signedPayload: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithWallet: LoginWithWallet;
  };

  export type LoginWithWallet = LoginWithThirdParty.Fragment;
}

export namespace LoginWithYt {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    loginWithGoogle: LoginWithGoogle;
  };

  export type LoginWithGoogle = LoginWithThirdParty.Fragment;
}

export namespace AddModerator {
  export type Variables = {
    username: string;
    streamer?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    moderatorAdd: ModeratorAdd;
  };

  export type ModeratorAdd = {
    __typename?: 'AddModeratorResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace RemoveModerator {
  export type Variables = {
    username: string;
    streamer?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    moderatorRemove: ModeratorRemove;
  };

  export type ModeratorRemove = {
    __typename?: 'RemoveModeratorResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace OpenChest {
  export type Variables = {
    token: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    chestOpen: ChestOpen;
  };

  export type ChestOpen = {
    __typename?: 'OpenChestResponse';

    bonus: Maybe<string>;

    nextChestTime: Maybe<number>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace PanelAddNew {
  export type Variables = {
    input: PanelAddInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    panelAdd: PanelAdd;
  };

  export type PanelAdd = {
    __typename?: 'PanelAddResponse';

    panel: Maybe<Panel>;

    err: Maybe<Err>;
  };

  export type Panel = {
    __typename?: 'Panel';

    id: number;

    type: PanelType;

    title: Maybe<string>;

    imageURL: Maybe<string>;

    imageLinkURL: Maybe<string>;

    body: Maybe<string>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PanelDeleteAbout {
  export type Variables = {
    input: PanelDeleteInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    panelDelete: PanelDelete;
  };

  export type PanelDelete = {
    __typename?: 'PanelDeleteResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PanelOrderChange {
  export type Variables = {
    input: PanelOrderInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    panelOrder: PanelOrder;
  };

  export type PanelOrder = {
    __typename?: 'PanelOrderResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PanelUpdateAbout {
  export type Variables = {
    input: PanelUpdateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    panelUpdate: PanelUpdate;
  };

  export type PanelUpdate = {
    __typename?: 'PanelUpdateResponse';

    panel: Maybe<Panel>;

    err: Maybe<Err>;
  };

  export type Panel = {
    __typename?: 'Panel';

    id: number;

    type: PanelType;

    title: Maybe<string>;

    imageURL: Maybe<string>;

    imageLinkURL: Maybe<string>;

    body: Maybe<string>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PartnerApplicationAdd {
  export type Variables = {
    input: PartnerApplicationInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    partnerApplicationAdd: PartnerApplicationAdd;
  };

  export type PartnerApplicationAdd = {
    __typename?: 'AddPartnerApplicationResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PartnerBttAddressSet {
  export type Variables = {
    address: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    partnerBTTAddressSet: PartnerBttAddressSet;
  };

  export type PartnerBttAddressSet = {
    __typename?: 'SetPartnerBTTAddressResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace RenewPartnerStatus {
  export type Variables = {
    partnerStatus: PartnerStatus;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    partnerStatusRenew: PartnerStatusRenew;
  };

  export type PartnerStatusRenew = {
    __typename?: 'RenewPartnerStatusResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PartnerUpdateTimezone {
  export type Variables = {
    timezone: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    partnerUpdateTimezone: PartnerUpdateTimezone;
  };

  export type PartnerUpdateTimezone = {
    __typename?: 'PartnerUpdateTimezoneResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace DeletePastbroadcast {
  export type Variables = {
    permlink: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    pastbroadcastDelete: PastbroadcastDelete;
  };

  export type PastbroadcastDelete = {
    __typename?: 'DeletePastbroadcastResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace PaybrosPaymentInitiate {
  export type Variables = {
    item: PaybrosPaymentType;
    channel: PaybrosPaymentChannelType;
    recaptchaToken: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    paybrosPaymentInitiate: PaybrosPaymentInitiate;
  };

  export type PaybrosPaymentInitiate = {
    __typename?: 'InitiatePaybrosPaymentResponse';

    url: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace PaymentAddEmail {
  export type Variables = {
    email: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    paymentEmailAdd: PaymentEmailAdd;
  };

  export type PaymentEmailAdd = {
    __typename?: 'AddPaymentEmailResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace PhoneVerify {
  export type Variables = {
    phone: string;
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    verifyPhone: VerifyPhone;
  };

  export type VerifyPhone = {
    __typename?: 'VerifyPhoneResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace RebillyCardDeactivate {
  export type Variables = {
    cardID: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    rebillyCardDeactivate: RebillyCardDeactivate;
  };

  export type RebillyCardDeactivate = {
    __typename?: 'DeactivateRebillyCardResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace RebillyPaymentProcess {
  export type Variables = {
    item: RebillyPaymentType;
    cardID: string;
    token: string;
    save: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    rebillyPaymentProcess: RebillyPaymentProcess;
  };

  export type RebillyPaymentProcess = {
    __typename?: 'ProcessRebillyPaymentResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace RegisterWithEmail {
  export type Variables = {
    email: string;
    password: string;
    recaptchaToken: string;
    deviceType: DeviceType;
    displayname: string;
    deviceID?: Maybe<string>;
    referrer?: Maybe<string>;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithEmail: RegisterWithEmail;
  };

  export type RegisterWithEmail = {
    __typename?: 'RegisterResponse';

    me: Maybe<Me>;

    bonus: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Me = {
    __typename?: 'User';

    username: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RegisterWithEmailStepOne {
  export type Variables = {
    email: string;
    code: string;
    password: string;
    recaptchaToken: string;
    deviceType: DeviceType;
    referrer?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithEmailStep1: RegisterWithEmailStep1;
  };

  export type RegisterWithEmailStep1 = {
    __typename?: 'RegisterWithEmailStep1Response';

    emailToken: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RegisterWithEmailStepTwo {
  export type Variables = {
    emailToken: string;
    displayname: string;
    avatar: string;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithEmailStep2: RegisterWithEmailStep2;
  };

  export type RegisterWithEmailStep2 = RegisterResponseFrag.Fragment;
}

export namespace RegisterWithFb {
  export type Variables = {
    recaptcha: string;
    displayname: string;
    avatar: string;
    accessToken: string;
    referrer?: Maybe<string>;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithFacebook: RegisterWithFacebook;
  };

  export type RegisterWithFacebook = RegisterResponseFrag.Fragment;
}

export namespace RegisterWithTw {
  export type Variables = {
    recaptcha: string;
    displayname: string;
    avatar: string;
    accessToken: string;
    referrer?: Maybe<string>;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithTwitch: RegisterWithTwitch;
  };

  export type RegisterWithTwitch = RegisterResponseFrag.Fragment;
}

export namespace RegisterWithWallet {
  export type Variables = {
    accessToken: string;
    displayname: string;
    avatar: string;
    referrer?: Maybe<string>;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithWallet: RegisterWithWallet;
  };

  export type RegisterWithWallet = RegisterResponseFrag.Fragment;
}

export namespace RegisterWithYt {
  export type Variables = {
    recaptcha: string;
    displayname: string;
    avatar: string;
    accessToken: string;
    referrer?: Maybe<string>;
    referralSource?: Maybe<ReferralSource>;
    language?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    registerWithGoogle: RegisterWithGoogle;
  };

  export type RegisterWithGoogle = RegisterResponseFrag.Fragment;
}

export namespace ReportCbPayment {
  export type Variables = {
    txID: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    reportCBPayment: ReportCbPayment;
  };

  export type ReportCbPayment = {
    __typename?: 'ReportCBPaymentResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RerunDisableSwitch {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    rerunDisable: RerunDisable;
  };

  export type RerunDisable = {
    __typename?: 'DisableRerunResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RerunEnableSwitch {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    rerunEnable: RerunEnable;
  };

  export type RerunEnable = {
    __typename?: 'EnableRerunResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RerunSetAdd {
  export type Variables = {
    permlink: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    rerunPresetAdd: RerunPresetAdd;
  };

  export type RerunPresetAdd = {
    __typename?: 'AddRerunPresetResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace RerunSetRemove {
  export type Variables = {
    permlink: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    rerunPresetRemove: RerunPresetRemove;
  };

  export type RerunPresetRemove = {
    __typename?: 'RemoveRerunPresetResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace ResetPasswordWithEmailCode {
  export type Variables = {
    email: string;
    code: string;
    newPassword: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    resetPasswordWithEmailCode: Maybe<ResetPasswordWithEmailCode>;
  };

  export type ResetPasswordWithEmailCode = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ResetPasswordWithOldPassword {
  export type Variables = {
    oldPassword?: Maybe<string>;
    newPassword: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    resetPasswordWithOldPassword: ResetPasswordWithOldPassword;
  };

  export type ResetPasswordWithOldPassword = {
    __typename?: 'ResetPasswordWithOldPasswordResponse';

    accessToken: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace SendResetPasswordCodeToEmail {
  export type Variables = {
    email: string;
    recaptchaToken: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    sendResetPasswordCodeToEmail: SendResetPasswordCodeToEmail;
  };

  export type SendResetPasswordCodeToEmail = {
    __typename?: 'SendVerificationCodeResponse';

    err: Maybe<Err>;

    remainSeconds: Maybe<number>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace SendStreamChatMessage {
  export type Variables = {
    input: SendStreamchatMessageInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    sendStreamchatMessage: SendStreamchatMessage;
  };

  export type SendStreamchatMessage = {
    __typename?: 'SendStreamchatMessageResponse';

    err: Maybe<Err>;

    message: Maybe<Message>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };

  export type Message = {
    __typename?: ChatTextInlineFragment['__typename'];

    type: ChatType;
  } & ChatTextInlineFragment;

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;

    emojis: Maybe<number[]>;

    content: string;

    createdAt: string;

    subLength: number;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace SendVerificationLinkToEmail {
  export type Variables = {
    email: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    sendVerificationLinkToEmail: SendVerificationLinkToEmail;
  };

  export type SendVerificationLinkToEmail = {
    __typename?: 'SendVerificationCodeResponse';

    err: Maybe<Err>;

    remainSeconds: Maybe<number>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace SetEmailWithPassword {
  export type Variables = {
    email: string;
    password: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    setEmailWithPassword: SetEmailWithPassword;
  };

  export type SetEmailWithPassword = {
    __typename?: 'SetEmailWithPasswordResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace SetSubSettings {
  export type Variables = {
    badgeText: string;
    badgeColor: string;
    textColor: string;
    backgroundImage?: Maybe<string>;
    streakTextColor?: Maybe<string>;
    benefits?: Maybe<string[]>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    subSettingSet: SubSettingSet;
  };

  export type SubSettingSet = {
    __typename?: 'SetSubSettingResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace GenerateSignUrl {
  export type Variables = {
    hash: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    signURLGenerate: SignUrlGenerate;
  };

  export type SignUrlGenerate = {
    __typename?: 'GenerateSignURLResponse';

    url: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace SkrillGiftSubPaymentToken {
  export type Variables = {
    streamer: string;
    giftCount: number;
    subMonths: number;
    receiver?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    SkrillGiftSubPaymentToken: SkrillGiftSubPaymentToken;
  };

  export type SkrillGiftSubPaymentToken = {
    __typename?: 'SkrillTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace StripeGiftSubPaymentToken {
  export type Variables = {
    streamer: string;
    giftCount: number;
    subMonths: number;
    receiver?: Maybe<string>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    StripeGiftSubPaymentToken: StripeGiftSubPaymentToken;
  };

  export type StripeGiftSubPaymentToken = {
    __typename?: 'StripeTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace SkrillSubRecurringPaymentToken {
  export type Variables = {
    streamer: string;
    paymentType: RecurringSubPaymentType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    SkrillSubRecurringPaymentToken: SkrillSubRecurringPaymentToken;
  };

  export type SkrillSubRecurringPaymentToken = {
    __typename?: 'SkrillTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace StripeSubRecurringPaymentToken {
  export type Variables = {
    streamer: string;
    priceId: string;
    paymentType: RecurringSubPaymentType;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    stripeRecurringSubscriptionToken: StripeSubRecurringPaymentToken;
  };

  export type StripeSubRecurringPaymentToken = {
    __typename?: 'stripeRecurringSubscriptionTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace SkrillToken {
  export type Variables = {
    item: SkrillPaymentType;
    email: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    skrillToken: SkrillToken;
  };

  export type SkrillToken = {
    __typename?: 'SkrillTokenResponse';

    token: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace BanStreamChatUser {
  export type Variables = {
    streamer: string;
    username: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    streamchatUserBan: StreamchatUserBan;
  };

  export type StreamchatUserBan = {
    __typename?: 'BanStreamchatUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace GlobalBanStreamChatUser {
  export type Variables = {
    streamer: string;
    username: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    streamchatUserGlobalBan: StreamchatUserGlobalBan;
  };

  export type StreamchatUserGlobalBan = {
    __typename?: 'BanStreamchatUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UnbanStreamChatUser {
  export type Variables = {
    streamer: string;
    username: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    streamchatUserUnban: StreamchatUserUnban;
  };

  export type StreamchatUserUnban = {
    __typename?: 'UnbanStreamchatUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace StreamDonate {
  export type Variables = {
    input: DonateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    donate: Donate;
  };

  export type Donate = {
    __typename?: 'DonateResponse';

    id: string;

    recentCount: number;

    expireDuration: number;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace StreamHostDelete {
  export type Variables = {
    username: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    hostDelete: HostDelete;
  };

  export type HostDelete = {
    __typename?: 'DeleteHostResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace StreamHostSet {
  export type Variables = {
    username: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    hostSet: HostSet;
  };

  export type HostSet = {
    __typename?: 'SetHostResponse';

    livestream: Maybe<Livestream>;

    err: Maybe<Err>;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    permlink: string;

    creator: Creator;
  } & VVideoPlayerFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace GenerateStreamKey {
  export type Variables = {
    recaptchaToken: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    streamKeyGenerate: StreamKeyGenerate;
  };

  export type StreamKeyGenerate = {
    __typename?: 'GenerateStreamKeyResponse';

    url: Maybe<string>;

    key: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace SetStreamTemplate {
  export type Variables = {
    template: SetStreamTemplateInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    streamTemplateSet: StreamTemplateSet;
  };

  export type StreamTemplateSet = {
    __typename?: 'SetStreamTemplateResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace SubStreakCheer {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    subStreakCheer: SubStreakCheer;
  };

  export type SubStreakCheer = {
    __typename?: 'SubStreakCheerResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace TaxInfoAdd {
  export type Variables = {
    input: AddTaxInfoInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    taxInfoAdd: TaxInfoAdd;
  };

  export type TaxInfoAdd = {
    __typename?: 'AddTaxInfoResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace TipaltiIFrameKey {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    tipaltiIFrameKey: TipaltiIFrameKey;
  };

  export type TipaltiIFrameKey = {
    __typename?: 'TipaltiIFrameKeyResponse';

    key: string;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace TronReceiverAddressSet {
  export type Variables = {
    address: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    tronReceiverAddressSet: TronReceiverAddressSet;
  };

  export type TronReceiverAddressSet = {
    __typename?: 'SetReceiverAddressResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace TronSenderAddressSet {
  export type Variables = {
    address: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    tronSenderAddressSet: TronSenderAddressSet;
  };

  export type TronSenderAddressSet = {
    __typename?: 'SetSenderAddressResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace TwoFactorActivate {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    twoFactorActivate: TwoFactorActivate;
  };

  export type TwoFactorActivate = {
    __typename?: 'ActivateTwoFactorResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace TwoFactorAdd {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    twoFactorAdd: TwoFactorAdd;
  };

  export type TwoFactorAdd = {
    __typename?: 'AddTwoFactorResponse';

    qrCode: Maybe<string>;

    secret: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace TwoFactorDelete {
  export type Variables = {
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    twoFactorDelete: TwoFactorDelete;
  };

  export type TwoFactorDelete = {
    __typename?: 'DeleteTwoFactorResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace UnfollowUser {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    unfollow: Unfollow;
  };

  export type Unfollow = {
    __typename?: 'UnfollowResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UserUnsubscribe {
  export type Variables = {
    streamer: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    unsubscribe: Unsubscribe;
  };

  export type Unsubscribe = {
    __typename?: 'UnsubscribeResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UpdateFolloweeNotificationSetting {
  export type Variables = {
    followee: string;
    enabled: boolean;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateFolloweeNotificationSetting: UpdateFolloweeNotificationSetting;
  };

  export type UpdateFolloweeNotificationSetting = {
    __typename?: 'UpdateFolloweeSettingResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace UploadGeneratePresignUrl {
  export type Variables = {
    hash: string;
    filename: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    presignURLGenerate: PresignUrlGenerate;
  };

  export type PresignUrlGenerate = {
    __typename?: 'GeneratePresignURLResponse';

    presignURL: Maybe<PresignUrl>;

    err: Maybe<Err>;
  };

  export type PresignUrl = {
    __typename?: 'PresignURL';

    url: string;

    key: string;

    bucketName: string;

    region: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace VideoPermlink {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    videoPermlinkGenerate: VideoPermlinkGenerate;
  };

  export type VideoPermlinkGenerate = {
    __typename?: 'GenerateVideoPermlinkResponse';

    permlink: Maybe<string>;

    permlinkToken: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UserDeactivate {
  export type Variables = {
    password: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userDeactivate: UserDeactivate;
  };

  export type UserDeactivate = {
    __typename?: 'DeactivateUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UserDelete {
  export type Variables = {
    password: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userDelete: UserDelete;
  };

  export type UserDelete = {
    __typename?: 'DeleteUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UserTimeoutSet {
  export type Variables = {
    streamer: string;
    username: string;
    duration: number;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userTimeoutSet: UserTimeoutSet;
  };

  export type UserTimeoutSet = {
    __typename?: 'SetUserTimeoutResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UserUpdateAbout {
  export type Variables = {
    about: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdate: UserUpdate;
  };

  export type UserUpdate = {
    __typename?: 'UpdateUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UserUpdateAvatar {
  export type Variables = {
    avatar: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdate: UserUpdate;
  };

  export type UserUpdate = {
    __typename?: 'UpdateUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UserUpdateDisplayName {
  export type Variables = {
    displayName: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdate: UserUpdate;
  };

  export type UserUpdate = {
    __typename?: 'UpdateUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UpdateUserEmail {
  export type Variables = {
    email: string;
    code: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdateEmail: UserUpdateEmail;
  };

  export type UserUpdateEmail = {
    __typename?: 'UpdateUserEmailResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UserUpdateLanguage {
  export type Variables = {
    language: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdate: UserUpdate;
  };

  export type UserUpdate = {
    __typename?: 'UpdateUserResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace UserUpdateOfflineImage {
  export type Variables = {
    offlineImage: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    userUpdateOfflineImage: UserUpdateOfflineImage;
  };

  export type UserUpdateOfflineImage = {
    __typename?: 'UpdateUserOfflineImageResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace UserUpdatePrefixName {
  export type Variables = {
    namePrefix: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateEmoteNamePrefix: Maybe<UpdateEmoteNamePrefix>;
  };

  export type UpdateEmoteNamePrefix = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace VerificationCodeEmail {
  export type Variables = {
    email: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    sendVerificationCodeToEmail: SendVerificationCodeToEmail;
  };

  export type SendVerificationCodeToEmail = {
    __typename?: 'SendVerificationCodeResponse';

    err: Maybe<Err>;

    remainSeconds: Maybe<number>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace VerificationCodePhone {
  export type Variables = {
    phone: string;
    recaptchaToken?: Maybe<string>;
    deviceType?: Maybe<DeviceType>;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    sendVerificationCodeToPhone: SendVerificationCodeToPhone;
  };

  export type SendVerificationCodeToPhone = {
    __typename?: 'SendVerificationCodeResponse';

    err: Maybe<Err>;

    remainSeconds: Maybe<number>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace VerificationCodeResend {
  export type Variables = {};

  export type Mutation = {
    __typename?: 'Mutation';

    verificationCodeResend: VerificationCodeResend;
  };

  export type VerificationCodeResend = {
    __typename?: 'ResendVerificationCodeResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace VerifyEmailLink {
  export type Variables = {
    token: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    verifyEmailLink: VerifyEmailLink;
  };

  export type VerifyEmailLink = {
    __typename?: 'VerifyEmailResponse';

    email: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    message: string;

    code: number;
  };
}

export namespace DeleteVideo {
  export type Variables = {
    permlink: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    videoDelete: VideoDelete;
  };

  export type VideoDelete = {
    __typename?: 'DeleteVideoResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace WearBadges {
  export type Variables = {
    badges: WearBadgeInput[];
  };

  export type Mutation = {
    __typename?: 'Mutation';

    wearBadges: WearBadges;
  };

  export type WearBadges = {
    __typename?: 'WearBadgesResponse';

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;
  };
}

export namespace AllowedActions {
  export type Variables = {
    username: string;
    streamer: string;
  };

  export type Query = {
    __typename?: 'Query';

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    allowedActionsIn: Maybe<ChannelAction[]>;
  };
}

export namespace BankInfoSearch {
  export type Variables = {
    country: string;
    key: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    payment: Maybe<Payment>;
  };

  export type Payment = {
    __typename?: 'Payment';

    bankInfoSearch: BankInfoSearch;
  };

  export type BankInfoSearch = {
    __typename?: 'BankInfoConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'BankInfoRecord';

    bankName: string;

    address1: string;

    address2: string;

    city: string;

    region: string;

    country: string;

    postalCode: string;

    swiftBic: string;

    routingCode: string;
  };
}

export namespace BrowsePageSearchCategory {
  export type Variables = {
    text: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = {
    __typename?: 'SearchResult';

    trendingCategories: TrendingCategories;
  };

  export type TrendingCategories = HomeCategoriesFrag.Fragment;
}

export namespace BttTransactionHistory {
  export type Variables = {
    addressBase58: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    limit: number;
    payID: number;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;

    me: Maybe<Me>;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    myBTTTransactionsV2: MyBttTransactionsV2;
  };

  export type MyBttTransactionsV2 = {
    __typename?: 'BTTTransactionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'BTTTransaction';

    addressBase58: string;

    addressBase16: string;

    txID: string;

    method: BttMethod;

    args: string;

    timestamp: string;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    partnerRewardTransactions: PartnerRewardTransactions[];
  };

  export type PartnerRewardTransactions = {
    __typename?: 'PartnerRewardTransaction';

    payID: number;

    username: string;

    tronAddr: string;

    amount: string;

    txID: string;

    status: number;

    updatedAt: string;
  };
}

export namespace CategoryDetail {
  export type Variables = {
    id: number;
  };

  export type Query = {
    __typename?: 'Query';

    category: Maybe<Category>;
  };

  export type Category = VCategoryCardFrag.Fragment;
}

export namespace CategoryLivestreamsPage {
  export type Variables = {
    id: number;
    opt?: Maybe<CategoryLivestreamsOption>;
  };

  export type Query = {
    __typename?: 'Query';

    category: Maybe<Category>;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;

    imgUrl: string;

    coverImgUrl: Maybe<string>;

    watchingCount: number;

    languages: Languages[];

    livestreams: Livestreams;
  };

  export type Languages = LanguageFrag.Fragment;

  export type Livestreams = VCategoryLivestreamFrag.Fragment;
}

export namespace ChannelCanBeGiftSubscription {
  export type Variables = {
    streamer: string;
  };

  export type Query = {
    __typename?: 'Query';

    channelCanBeGiftSubscription: ChannelCanBeGiftSubscription;
  };

  export type ChannelCanBeGiftSubscription = {
    __typename?: 'ChannelCanBeGiftSubscriptionResponse';

    can: boolean;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace CheckEmoteByName {
  export type Variables = {
    name: string;
  };

  export type Query = {
    __typename?: 'Query';

    emoteByName: EmoteByName;
  };

  export type EmoteByName = {
    __typename?: 'EmoteInfoResponse';

    emote: Emote;

    creator: Maybe<Creator>;

    err: Maybe<Err>;
  };

  export type Emote = {
    __typename?: 'Emote';

    name: string;

    sourceURL: string;

    level: EmoteLevel;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;

    username: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace CheckEmoteNameIsValid {
  export type Variables = {
    name: string;
  };

  export type Query = {
    __typename?: 'Query';

    emoteNameIsValid: boolean;
  };
}

export namespace CheckNamePrefixIsValid {
  export type Variables = {
    namePrefix: string;
  };

  export type Query = {
    __typename?: 'Query';

    namePrefixIsValid: boolean;
  };
}

export namespace ClipComment {
  export type Variables = {
    id: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    option?: Maybe<ClipCommentOrderOption>;
  };

  export type Query = {
    __typename?: 'Query';

    clip: Maybe<Clip>;
  };

  export type Clip = {
    __typename?: 'Clip';

    streamer: Streamer;
  } & ClipCommentFrag.Fragment;

  export type Streamer = {
    __typename?: 'User';

    id: string;

    username: string;
  };
}

export namespace ClipCommentReplies {
  export type Variables = {
    id: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    clipCommentReplies: Maybe<ClipCommentReplies>;
  };

  export type ClipCommentReplies = {
    __typename?: 'ClipCommentConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ClipCommentItemFrag.Fragment;
}

export namespace ClipIframe {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: 'Query';

    clip: Maybe<Clip>;
  };

  export type Clip = {
    __typename?: 'Clip';

    id: string;

    url: string;
  };
}

export namespace ClipPublishStreamer {
  export type Variables = {
    username: string;
  };

  export type Query = {
    __typename?: 'Query';

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    livestream: Maybe<Livestream>;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    currentClip: CurrentClip;
  };

  export type CurrentClip = {
    __typename?: 'CurrentClip';

    url: string;

    imgUrl: string;
  };
}

export namespace ClipView {
  export type Variables = {
    id: string;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    clip: Maybe<Clip>;
  };

  export type Clip = ClipViewFrag.Fragment;
}

export namespace CommitHashCheck {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: 'Query';

    payment: Maybe<Payment>;
  };

  export type Payment = {
    __typename?: 'Payment';

    commitHashCheck: boolean;
  };
}

export namespace DailyReport {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    avatar: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    dailyReport: Maybe<DailyReport>;
  };

  export type DailyReport = {
    __typename?: 'DailyReport';

    id: string;

    followers: Followers;

    subscribers: Subscribers;

    subAnniversaries: SubAnniversaries;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;

    list: List[];
  };

  export type List = {
    __typename?: 'User';

    id: string;

    displayname: string;

    avatar: string;
  };

  export type Subscribers = {
    __typename?: 'UserConnection';

    totalCount: number;

    list: _List[];
  };

  export type _List = {
    __typename?: 'User';

    id: string;

    displayname: string;

    avatar: string;
  };

  export type SubAnniversaries = {
    __typename?: 'UserConnection';

    totalCount: number;

    list: __List[];
  };

  export type __List = {
    __typename?: 'User';

    id: string;

    displayname: string;

    avatar: string;
  };
}

export namespace DashboardHostSearch {
  export type Variables = {
    text: string;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = {
    __typename?: 'SearchResult';

    host: Host;
  };

  export type Host = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace DashboardSearchCategories {
  export type Variables = {
    text: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = {
    __typename?: 'SearchResult';

    categories: Categories;
  };

  export type Categories = {
    __typename?: 'CategoryConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;
  };
}

export namespace DonationRankListPerDay {
  export type Variables = {
    input: RankListPerDayInput;
  };

  export type Query = {
    __typename?: 'Query';

    donationRankListPerDay: DonationRankListPerDay;
  };

  export type DonationRankListPerDay = {
    __typename?: 'RankListConnection';

    pageInfo: PageInfo;

    list: Maybe<List[]>;
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'RankPerDay';

    rank: string;

    user: User;

    amount: string;
  };

  export type User = {
    __typename?: 'User';

    avatar: string;

    displayname: string;
  };
}

export namespace DonationRankPerDay {
  export type Variables = {
    username: string;
    date: string;
  };

  export type Query = {
    __typename?: 'Query';

    getDonationRankPerDay: GetDonationRankPerDay;
  };

  export type GetDonationRankPerDay = {
    __typename?: 'RankPerDay';

    rank: string;

    user: User;

    amount: string;
  };

  export type User = {
    __typename?: 'User';

    avatar: string;

    displayname: string;
  };
}

export namespace EpinPrices {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    epinPrices: EpinPrices;
  };

  export type EpinPrices = {
    __typename?: 'EpinPrices';

    price88Points: string;

    price288Points: string;

    price688Points: string;

    price1188Points: string;

    price2888Points: string;

    price7888Points: string;

    price78888Points: string;
  };
}

export namespace FolloweesNotificationSetting {
  export type Variables = {
    followees: string[];
  };

  export type Query = {
    __typename?: 'Query';

    followeesNotificationSetting: FolloweesNotificationSetting[];
  };

  export type FolloweesNotificationSetting = {
    __typename?: 'FolloweeNotificaionSetting';

    followee: string;

    enabled: boolean;
  };
}

export namespace FollowingPageVideos {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    videosFollowing: Maybe<VideosFollowing>;
  };

  export type VideosFollowing = FollowingVideosFrag.Fragment;
}

export namespace GetSubStatus {
  export type Variables = {
    username: string;
  };

  export type Query = {
    __typename?: 'Query';

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    mySubscription: Maybe<MySubscription>;
  };

  export type MySubscription = {
    __typename?: 'Sub';

    backedLemon: number;

    status: SubscriptionStatus;
  };
}

export namespace GetUsernameByDisplayName {
  export type Variables = {
    displayname: string;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    username: string;
  };
}

export namespace GlobalInfoBttTransactions {
  export type Variables = {
    addressBase58: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    myBTTTransactionsV2: MyBttTransactionsV2;
  };

  export type MyBttTransactionsV2 = {
    __typename?: 'BTTTransactionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'BTTTransaction';

    addressBase58: string;

    addressBase16: string;

    txID: string;

    method: BttMethod;

    args: string;

    timestamp: string;
  };
}

export namespace GlobalInformation {
  export type Variables = {
    limit: number;
    languageCode?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    languages: Languages[];

    communityUpdates: CommunityUpdates[];

    systemMessage: Maybe<string>;
  } & SidebarRecommendation.Fragment;

  export type Languages = {
    __typename?: 'Language';

    id: string;

    backendID: number;

    language: string;

    code: string;
  };

  export type CommunityUpdates = {
    __typename?: 'CommunityUpdate';

    title: string;

    link: string;
  };
}

export namespace GlobalInformationLatestBttStats {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    latestBTTStats: LatestBttStats;

    latestPartnerBTTRewardStats: LatestPartnerBttRewardStats;
  };

  export type LatestBttStats = {
    __typename?: 'BTTGlobalStats';

    lastReward: string;

    lastStakes: string;

    currentStakes: string;

    lastUpdateTime: string;
  };

  export type LatestPartnerBttRewardStats = {
    __typename?: 'GlobalPartnerRewardStats';

    lastStakes: string;

    lastReward: string;
  };
}

export namespace GlobalInformationRecommend {
  export type Variables = {
    limit: number;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = SidebarRecommendation.Fragment;
}

export namespace GlobalInformationRegisterRecommend {
  export type Variables = {
    limit: number;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = RegisterRecommendation.Fragment;
}

export namespace GlobalMeSubedStreamerEmojis {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeSubedStreamerEmojis.Fragment;
}

export namespace HappyHourPopupInfo {
  export type Variables = {
    version?: Maybe<number>;
    first?: Maybe<number>;
    sortableField: SortableHappyHourField;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    happyHour: Maybe<HappyHour>;
  };

  export type HappyHour = {
    __typename?: 'HappyHour';

    ranks: Ranks[];

    winnerCount: number;
  };

  export type Ranks = {
    __typename?: 'HappyHourRanking';

    user: User;
  };

  export type User = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace HappyHourTickets {
  export type Variables = {
    version: number;
  };

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    happyHour: Maybe<HappyHour>;
  };

  export type HappyHour = {
    __typename?: 'HappyHour';

    myTickets: MyTickets[];
  };

  export type MyTickets = {
    __typename?: 'HappyHourTicket';

    id: string;

    startIndex: number;

    numOfTickets: number;

    ticketTag: HappyHourTicketTag;
  };
}

export namespace HomePageCarousel {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
    languageID?: Maybe<number>;
    categoryID?: Maybe<number>;
    showNSFW?: Maybe<boolean>;
    userLanguageCode?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    carousel: Carousel;
  };

  export type Carousel = CarouselFrag.Fragment;
}

export namespace HomePageCarousels {
  export type Variables = {
    count?: Maybe<number>;
    userLanguageCode?: Maybe<string>;
    watching?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    carousels: Carousels[];
  };

  export type Carousels = {
    __typename?: 'Carousel';

    type: CarouselType;

    item: Item;
  };

  export type Item = LivestreamInlineFragment | PosterInlineFragment;

  export type LivestreamInlineFragment = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    language: Language;

    category: Category;

    title: string;

    creator: Creator;
  } & VLivestreamSnapFrag.Fragment;

  export type Language = {
    __typename?: 'Language';

    id: string;

    backendID: number;

    language: string;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;

    imgUrl: string;
  };

  export type Creator = {
    __typename?: 'User';

    beta: Beta;
  };

  export type Beta = {
    __typename?: 'Beta';

    starfruitEnabled: boolean;
  };

  export type PosterInlineFragment = {
    __typename?: 'Poster';

    thumbnailURL: string;

    redirectLink: string;

    mobileThumbnailURL: string;
  };
}

export namespace HomePageCategories {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
    languageID?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    categories: Categories;
  };

  export type Categories = HomeCategoriesFrag.Fragment;
}

export namespace HomePageLeaderboard {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    leaderboard: Leaderboard;
  };

  export type Leaderboard = LeaderboardFrag.Fragment;
}

export namespace HomePageLivestream {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
    languageID?: Maybe<number>;
    categoryID?: Maybe<number>;
    showNSFW?: Maybe<boolean>;
    order?: Maybe<LivestreamSortOrder>;
    userLanguageCode?: Maybe<string>;
    showMatureContent?: Maybe<boolean>;
  };

  export type Query = {
    __typename?: 'Query';

    livestreams: Livestreams;
  };

  export type Livestreams = VCategoryLivestreamFrag.Fragment;
}

export namespace IbanValidate {
  export type Variables = {
    iban: string;
  };

  export type Query = {
    __typename?: 'Query';

    payment: Maybe<Payment>;
  };

  export type Payment = {
    __typename?: 'Payment';

    ibanValidate: boolean;
  };
}

export namespace InsecureRefetch {
  export type Variables = {
    username: string;
  };

  export type Query = {
    __typename?: 'Query';

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    insecure: boolean;
  };
}

export namespace IsBlockedRegion {
  export type Variables = {
    info: RegionInfo;
  };

  export type Query = {
    __typename?: 'Query';

    isBlockedRegion: IsBlockedRegion;
  };

  export type IsBlockedRegion = {
    __typename?: 'IsBlockedRegionResponse';

    blocked: boolean;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace LivestreamPage {
  export type Variables = {
    displayname: string;
    add: boolean;
    isLoggedIn: boolean;
    isMe: boolean;
    order: ClipSortOrder;
    showUnpicked: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    offlineImage: string;

    banStatus: BanStatus;

    deactivated: boolean;

    avatar: string;

    chatBannedEmoji: string[];

    bttReceiverAddress: Maybe<string>;

    myRoomRole: Maybe<RoomRole>;

    isMe: Maybe<boolean>;

    isSubscribing: Maybe<boolean>;

    lastStreamedAt: string;

    donateDisabled: boolean;

    subscribeDisabled: boolean;

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;

    rerun: Maybe<Rerun>;

    beta: Beta;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    LivestreamChannelHeaderFrag.Fragment &
    LivestreamInfoFrag.Fragment &
    LivestreamProfileFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    createdAt: string;

    ageRestriction: boolean;

    earnRestriction: boolean;

    watchTime: boolean;
  } & VVideoPlayerFrag.Fragment;

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    creator: Creator;
  } & VVideoPlayerFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Rerun = {
    __typename?: 'Rerun';

    entries: Entries[];

    startSecond: number;
  };

  export type Entries = {
    __typename?: 'RerunPreset';

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = RerunReplayFrag.Fragment;

  export type Beta = {
    __typename?: 'Beta';

    starfruitEnabled: boolean;
  };
}

export namespace LivestreamChatroomInfo {
  export type Variables = {
    displayname: string;
    isLoggedIn: boolean;
    limit: number;
    count: number;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;
  } & VLivestreamChatroomFrag.Fragment;
}

export namespace LivestreamIframe {
  export type Variables = {
    displayname: string;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    username: string;

    livestream: Maybe<Livestream>;

    offlineImage: string;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  } & VVideoPlayerFrag.Fragment;
}

export namespace LivestreamProfileClips {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    order: ClipSortOrder;
    showUnpicked: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = LivestreamProfileClipFrag.Fragment;
}

export namespace LivestreamProfileFollowers {
  export type Variables = {
    displayname: string;
    sortedBy?: Maybe<RelationSortOrder>;
    first?: Maybe<number>;
    after?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    displayname: string;

    followers: Followers;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment;
}

export namespace LivestreamProfileFollowersSearch {
  export type Variables = {
    displayname: string;
    keyword: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    followersByKeyword: FollowersByKeyword;
  };

  export type FollowersByKeyword = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment;
}

export namespace LivestreamProfileFollowing {
  export type Variables = {
    displayname: string;
    sortedBy?: Maybe<RelationSortOrder>;
    first?: Maybe<number>;
    after?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    displayname: string;

    following: Following;
  };

  export type Following = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment;
}

export namespace LivestreamProfileFollowingSearch {
  export type Variables = {
    displayname: string;
    keyword: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    displayname: string;

    followingByKeyword: FollowingByKeyword;
  };

  export type FollowingByKeyword = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment;
}

export namespace LivestreamProfileReplay {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    pastBroadcasts: PastBroadcasts;

    username: string;
  };

  export type PastBroadcasts = {
    __typename?: 'PastBroadcastConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ProfileReplaySnapFrag.Fragment;
}

export namespace LivestreamProfileSubscriber {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    subscribers: Subscribers;
  };

  export type Subscribers = {
    __typename?: 'SubConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Sub';

    subscriber: Subscriber;
  };

  export type Subscriber = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace LivestreamProfileVideo {
  export type Variables = {
    displayname: string;
    sortedBy?: Maybe<VideoSortOrder>;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    videos: Videos;

    username: string;
  };

  export type Videos = {
    __typename?: 'VideoConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ProfileVideoSnapFrag.Fragment;
}

export namespace LivestreamProfileWallet {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    afterDonate?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    isMe: Maybe<boolean>;

    wallet: Wallet;

    transactions: Transactions;

    tronDonations: TronDonations;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;

    totalEarning: string;

    totalBttDonation: string;

    totalTrxDonation: string;
  };

  export type Transactions = {
    __typename?: 'TransactionConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'Transaction';

    seq: string;

    txType: string;

    createdAt: string;

    description: string;

    amount: string;

    balance: string;
  };

  export type TronDonations = {
    __typename?: 'TronDonationConnection';

    totalCount: number;

    pageInfo: _PageInfo;

    list: _List[];
  };

  export type _PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type _List = {
    __typename?: 'TronDonation';

    txID: string;

    token: TronToken;

    amount: string;

    fromUser: FromUser;

    toUser: ToUser;

    fromAddress: string;

    toAddress: string;

    timestamp: string;
  };

  export type FromUser = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  };

  export type ToUser = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  };
}

export namespace LivestreamPageRefetch {
  export type Variables = {
    displayname: string;
    add: boolean;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    username: string;

    myRoomRole: Maybe<RoomRole>;

    isFollowing: Maybe<boolean>;

    isSubscribing: Maybe<boolean>;

    followers: Followers;

    donateDisabled: boolean;

    subscribeDisabled: boolean;

    lastStreamedAt: string;

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;
  } & LivestreamChannelHeaderFrag.Fragment;

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    disableAlert: boolean;

    id: string;

    permlink: string;

    createdAt: string;

    watchTime: boolean;

    totalReward: string;

    watchingCount: number;

    ageRestriction: boolean;

    earnRestriction: boolean;

    category: Category;

    language: Language;

    title: string;
  } & VVideoPlayerFrag.Fragment;

  export type Category = {
    __typename?: 'Category';

    title: string;

    imgUrl: string;

    id: string;

    backendID: number;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    creator: Creator;
  } & VVideoPlayerFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;

    username: string;
  } & VDliveAvatarFrag.Fragment;
}

export namespace LivestreamReplayDashboard {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    pastBroadcasts: PastBroadcasts;

    username: string;
  };

  export type PastBroadcasts = {
    __typename?: 'PastBroadcastConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ProfileReplaySnapFrag.Fragment;
}

export namespace LivestreamsLanguages {
  export type Variables = {
    categoryID?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    languages: Languages[];
  };

  export type Languages = LanguageFrag.Fragment;
}

export namespace LivestreamTreasureChestAddCheck {
  export type Variables = {
    displayname: string;
    amount: string;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;
  } & TreasureChestValidTransferFrag.Fragment;
}

export namespace LivestreamTreasureChestAddPoints {
  export type Variables = {
    displayname: string;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;
  } & TreasureChestAddPointsFrag.Fragment;
}

export namespace LivestreamTreasureChestWinners {
  export type Variables = {
    displayname: string;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;
  } & TreasureChestWinnersFrag.Fragment;
}

export namespace MeActivityFeedPopup {
  export type Variables = {
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeActivityFeedFrag.Fragment;
}

export namespace MeBalance {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeBalanceFrag.Fragment;
}

export namespace MeClipsByMe {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
    order: ClipSortOrder;
    showUnpicked: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeClipsByMeFrag.Fragment;
}

export namespace MeClipsOfMe {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
    order: ClipSortOrder;
    showUnpicked: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeClipsOfMeFrag.Fragment;
}

export namespace MeComplete {
  export type Variables = {
    state?: Maybe<ReferralState>;
    first: number;
    after?: Maybe<string>;
    isLoggedIn: boolean;
    folowingFirst: number;
    paymentFirst: number;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeGlobalFrag.Fragment &
    MePartnerProgressFrag.Fragment &
    MeBalanceFrag.Fragment &
    MeSubscribingFrag.Fragment &
    MeSidebarFrag.Fragment &
    MeLivestreamFrag.Fragment &
    MeReferralFrag.Fragment &
    MeDashboardFrag.Fragment &
    MePaymentFrag.Fragment &
    MeActivityFeedFrag.Fragment &
    MeUserCashinRecordsFrag.Fragment &
    MeRebillyCardsFrag.Fragment &
    MeEmailFrag.Fragment &
    MeDailyCheckInPopupFrag.Fragment;
}

export namespace MeDailyCheckInPopup {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeDailyCheckInPopupFrag.Fragment;
}

export namespace MeDashboard {
  export type Variables = {
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeDashboardFrag.Fragment;
}

export namespace MeEmail {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeEmailFrag.Fragment;
}

export namespace MeFollowingLivestreams {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeFollowingLivestreamsFrag.Fragment;
}

export namespace MeGlobal {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeGlobalFrag.Fragment;
}

export namespace MeLivestream {
  export type Variables = {
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeLivestreamFrag.Fragment;
}

export namespace MeLivestreamChatroomPopup {
  export type Variables = {
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeLivestreamChatroomFrag.Fragment;
}

export namespace MeModLogs {
  export type Variables = {
    input: ListModLogsInput;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = DashboardModeratorFrag.Fragment;
}

export namespace MePartnerProgress {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MePartnerProgressFrag.Fragment;
}

export namespace MePayment {
  export type Variables = {
    paymentFirst?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MePaymentFrag.Fragment;
}

export namespace MeRebillyCards {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeRebillyCardsFrag.Fragment;
}

export namespace MeRecentCashinRecords {
  export type Variables = {
    startTime: number;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeRecentCashinRecordsFrag.Fragment;
}

export namespace MeReferral {
  export type Variables = {
    state?: Maybe<ReferralState>;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeReferralFrag.Fragment;
}

export namespace MeSidebar {
  export type Variables = {
    folowingFirst: number;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeSidebarFrag.Fragment;
}

export namespace MeSubscribing {
  export type Variables = {
    first: number;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeSubscribingFrag.Fragment;
}

export namespace MeUserCashinRecords {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeUserCashinRecordsFrag.Fragment;
}

export namespace MeUserReferral {
  export type Variables = {
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = MeUserReferralFrag.Fragment;
}

export namespace MyStreamSummary {
  export type Variables = {
    start: number;
    end: number;
  };

  export type Query = {
    __typename?: 'Query';

    myStreamHistory: MyStreamHistory;
  };

  export type MyStreamHistory = {
    __typename?: 'PastBroadcastConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'PastBroadcast';

    id: string;

    permlink: string;

    createdAt: string;

    length: string;

    totalReward: string;

    averageCCU: number;

    livestreamView: number;

    peakCCU: number;

    newFollower: number;

    chatCount: number;
  };
}

export namespace NavSearchResult {
  export type Variables = {
    text: string;
    userFirst?: Maybe<number>;
    categoryFirst?: Maybe<number>;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = {
    __typename?: 'SearchResult';

    allUsers: AllUsers;

    liveCategories: LiveCategories;
  };

  export type AllUsers = {
    __typename?: 'SearchUserConnection';

    list: List[];
  };

  export type List = LivestreamInlineFragment | UserInlineFragment;

  export type LivestreamInlineFragment = {
    __typename?: 'Livestream';

    id: string;

    category: Category;

    creator: Creator;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    followers: Followers;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type UserInlineFragment = {
    __typename?: 'User';

    id: string;

    username: string;

    followers: _Followers;

    rerun: Maybe<Rerun>;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type _Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type Rerun = {
    __typename?: 'Rerun';

    entries: Entries[];
  };

  export type Entries = {
    __typename?: 'RerunPreset';

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    id: string;

    category: _Category;
  };

  export type _Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type LiveCategories = {
    __typename?: 'CategoryConnection';

    list: _List[];
  };

  export type _List = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;

    imgUrl: string;
  };
}

export namespace NextPayday {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    payment: Maybe<Payment>;
  };

  export type Payment = {
    __typename?: 'Payment';

    nextPayday: NextPayday;
  };

  export type NextPayday = {
    __typename?: 'Payday';

    processTime: string;

    deadline: string;
  };
}

export namespace PastBroadcastPage {
  export type Variables = {
    permlink: string;
    commentsFirst?: Maybe<number>;
    topContributionsFirst?: Maybe<number>;
    commentsAfter?: Maybe<string>;
    topContributionsAfter?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    pastBroadcast: Maybe<PastBroadcast>;
  };

  export type PastBroadcast = {
    __typename?: 'PastBroadcast';

    creator: Creator;

    createdAt: string;

    playbackUrl: string;

    thumbnailUrl: string;

    upNext: UpNext;

    comments: Comments;

    topContributions: TopContributions;
  } & (VideoPbHeaderFrag.Fragment & VVideoPbInfoFrag.Fragment);

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;

    donateDisabled: boolean;

    subscribeDisabled: boolean;
  };

  export type UpNext = {
    __typename?: 'PastBroadcastConnection';

    list: List[];
  };

  export type List = VVideoPbUpNextItemFrag.Fragment;

  export type Comments = VVideoPbCommentFrag.Fragment;

  export type TopContributions = VVideoPbUpNextTopContributorFrag.Fragment;
}

export namespace PaybrosPrices {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    paybrosPrices: PaybrosPrices;
  };

  export type PaybrosPrices = {
    __typename?: 'PaybrosPrices';

    price88Points: string;

    price288Points: string;

    price688Points: string;

    price1188Points: string;

    price2888Points: string;

    price7888Points: string;

    price78888Points: string;
  };
}

export namespace PaymentCountryRule {
  export type Variables = {
    country: string;
  };

  export type Query = {
    __typename?: 'Query';

    payment: Maybe<Payment>;
  };

  export type Payment = {
    __typename?: 'Payment';

    countryRule: CountryRule;
  };

  export type CountryRule = {
    __typename?: 'CountryRule';

    bank: boolean;

    btc: boolean;

    accountType: boolean;

    bankBranchName: boolean;

    contactName: boolean;

    accountNumberName: string;

    routingNumberName: string;

    state: boolean;

    currency: string;

    processTime: number;

    fee: string;

    iban: boolean;

    beneficiaryCPF: boolean;

    agencyCode: boolean;

    tipalti: boolean;

    tipaltiWire: Maybe<TipaltiWire>;

    tipaltiACH: Maybe<TipaltiAch>;

    tipaltiPaypal: Maybe<TipaltiPaypal>;

    tipaltiCurrency: string;
  };

  export type TipaltiWire = {
    __typename?: 'TipaltiRule';

    fee: string;

    deliveryTime: string;
  };

  export type TipaltiAch = {
    __typename?: 'TipaltiRule';

    fee: string;

    deliveryTime: string;
  };

  export type TipaltiPaypal = {
    __typename?: 'TipaltiRule';

    fee: string;

    deliveryTime: string;
  };
}

export namespace PinnedGiftSuperchat {
  export type Variables = {
    input: SuperchatInput;
  };

  export type Query = {
    __typename?: 'Query';

    superchat: Superchat[];
  };

  export type Superchat = {
    __typename?: 'Superchat';

    id: string;

    message: string;
  };
}

export namespace ReceivedRankListPerDay {
  export type Variables = {
    input: RankListPerDayInput;
  };

  export type Query = {
    __typename?: 'Query';

    receivedRankListPerDay: ReceivedRankListPerDay;
  };

  export type ReceivedRankListPerDay = {
    __typename?: 'RankListConnection';

    pageInfo: PageInfo;

    list: Maybe<List[]>;
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'RankPerDay';

    rank: string;

    user: User;

    amount: string;
  };

  export type User = {
    __typename?: 'User';

    avatar: string;

    displayname: string;
  };
}

export namespace ReceivedRankPerDay {
  export type Variables = {
    streamer: string;
    date: string;
  };

  export type Query = {
    __typename?: 'Query';

    getReceivedRankPerDay: GetReceivedRankPerDay;
  };

  export type GetReceivedRankPerDay = {
    __typename?: 'RankPerDay';

    rank: string;

    user: User;

    amount: string;
  };

  export type User = {
    __typename?: 'User';

    avatar: string;

    displayname: string;
  };
}

export namespace ReceiverCanGetGiftSubscription {
  export type Variables = {
    streamer: string;
    receiver: string;
  };

  export type Query = {
    __typename?: 'Query';

    receiverCanGetGiftSubscription: ReceiverCanGetGiftSubscription;
  };

  export type ReceiverCanGetGiftSubscription = {
    __typename?: 'ReceiverCanGetGiftSubscriptionResponse';

    can: boolean;

    err: Maybe<Err>;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace ReferralTable {
  export type Variables = {
    state?: Maybe<ReferralState>;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    displayname: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    referral: Referral;
  };

  export type Referral = {
    __typename?: 'ReferralConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ReferralListItemFrag.Fragment;
}

export namespace RefetchMeLivestreamAndHosting {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    me: Maybe<Me>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;
  } & LivestreamAndHostingFrag.Fragment;
}

export namespace ReplyComments {
  export type Variables = {
    permlink: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    comments: Comments;
  };

  export type Comments = VVideoPbCommentFrag.Fragment;
}

export namespace SearchPage {
  export type Variables = {
    text: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = SearchFrag.Fragment;
}

export namespace StreamChatBannedUsers {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    search?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    chatBannedUsers: ChatBannedUsers;
  };

  export type ChatBannedUsers = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace StreamChatModerators {
  export type Variables = {
    displayname: string;
    first?: Maybe<number>;
    after?: Maybe<string>;
    search?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    chatModerators: ChatModerators;
  };

  export type ChatModerators = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace StreamerReferralSetting {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    globalInfo: GlobalInfo;
  };

  export type GlobalInfo = {
    __typename?: 'GlobalInfo';

    streamerReferralSetting: StreamerReferralSetting;
  };

  export type StreamerReferralSetting = {
    __typename?: 'ReferralSetting';

    referralDuration: number;

    additionalRewards: string;

    commision: number;

    followersTarget: number;

    streamCountTarget: number;

    ccuTarget: number;

    singleStreamDurationTarget: number;
  };
}

export namespace TopContributors {
  export type Variables = {
    displayname: string;
    rule?: Maybe<ContributionSummaryRule>;
    first?: Maybe<number>;
    after?: Maybe<string>;
    queryStream: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    livestream: Maybe<Livestream>;
  } & TopContributorsOfStreamerFrag.Fragment;

  export type Livestream = TopContributorsOfLivestreamFrag.Fragment;
}

export namespace UploadSearchCategory {
  export type Variables = {
    text: string;
  };

  export type Query = {
    __typename?: 'Query';

    search: Search;
  };

  export type Search = {
    __typename?: 'SearchResult';

    categories: Categories;
  };

  export type Categories = {
    __typename?: 'CategoryConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Category';

    backendID: number;

    title: string;

    id: string;
  };
}

export namespace User {
  export type Variables = {
    username: string;
  };

  export type Query = {
    __typename?: 'Query';

    user: Maybe<User>;
  };

  export type User = {
    __typename?: 'User';

    displayname: string;
  };
}

export namespace UserBttAddress {
  export type Variables = {
    displayname: string;
  };

  export type Query = {
    __typename?: 'Query';

    userByDisplayName: Maybe<UserByDisplayName>;
  };

  export type UserByDisplayName = {
    __typename?: 'User';

    id: string;

    bttReceiverAddress: Maybe<string>;
  };
}

export namespace ValidDisplayName {
  export type Variables = {
    displayName: string;
  };

  export type Query = {
    __typename?: 'Query';

    displayNameIsValid: boolean;
  };
}

export namespace VideoPage {
  export type Variables = {
    permlink: string;
    commentsFirst?: Maybe<number>;
    topContributionsFirst?: Maybe<number>;
    commentsAfter?: Maybe<string>;
    topContributionsAfter?: Maybe<string>;
    isLoggedIn: boolean;
  };

  export type Query = {
    __typename?: 'Query';

    video: Maybe<Video>;
  };

  export type Video = {
    __typename?: 'Video';

    creator: Creator;

    createdAt: string;

    content: string;

    thumbnailUrl: string;

    resolution: Resolution[];

    upNext: UpNext;

    comments: Comments;

    topContributions: TopContributions;

    tags: Maybe<string[]>;
  } & (VideoPbHeaderFrag.Fragment & VVideoPbInfoFrag.Fragment);

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;

    donateDisabled: boolean;

    subscribeDisabled: boolean;
  };

  export type Resolution = {
    __typename?: 'Resolution';

    resolution: string;

    url: string;
  };

  export type UpNext = {
    __typename?: 'VideoConnection';

    list: List[];
  };

  export type List = VVideoPbUpNextItemFrag.Fragment;

  export type Comments = VVideoPbCommentFrag.Fragment;

  export type TopContributions = VVideoPbUpNextTopContributorFrag.Fragment;
}

export namespace StreamMessageSubscription {
  export type Variables = {
    streamer: string;
  };

  export type Subscription = {
    __typename?: 'Subscription';

    streamMessageReceived: StreamMessageReceived[];
  };

  export type StreamMessageReceived = {
    __typename?:
      | ChatGiftInlineFragment['__typename']
      | ChatHostInlineFragment['__typename']
      | ChatSubscriptionInlineFragment['__typename']
      | ChatExtendSubInlineFragment['__typename']
      | ChatChangeModeInlineFragment['__typename']
      | ChatTextInlineFragment['__typename']
      | ChatSubStreakInlineFragment['__typename']
      | ChatClipInlineFragment['__typename']
      | ChatFollowInlineFragment['__typename']
      | ChatDeleteInlineFragment['__typename']
      | ChatBanInlineFragment['__typename']
      | ChatModeratorInlineFragment['__typename']
      | ChatEmoteAddInlineFragment['__typename']
      | ChatTimeoutInlineFragment['__typename']
      | ChatTcValueAddInlineFragment['__typename']
      | ChatGiftSubInlineFragment['__typename']
      | ChatGiftSubReceiveInlineFragment['__typename'];

    type: ChatType;
  } & (
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatChangeModeInlineFragment
    | ChatTextInlineFragment
    | ChatSubStreakInlineFragment
    | ChatClipInlineFragment
    | ChatFollowInlineFragment
    | ChatDeleteInlineFragment
    | ChatBanInlineFragment
    | ChatModeratorInlineFragment
    | ChatEmoteAddInlineFragment
    | ChatTimeoutInlineFragment
    | ChatTcValueAddInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment);

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;

    gift: DonationType;

    amount: string;

    message: string;

    recentCount: number;

    expireDuration: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;

    viewer: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;

    month: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;

    month: number;

    length: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatChangeModeInlineFragment = {
    __typename?: 'ChatChangeMode';

    mode: ChatModeType;
  };

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;

    emojis: Maybe<number[]>;

    content: string;

    createdAt: string;

    subLength: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubStreakInlineFragment = {
    __typename?: 'ChatSubStreak';

    id: string;

    length: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatClipInlineFragment = {
    __typename?: 'ChatClip';

    id: string;

    url: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatDeleteInlineFragment = {
    __typename?: 'ChatDelete';

    ids: string[];
  };

  export type ChatBanInlineFragment = {
    __typename?: 'ChatBan';

    id: string;

    bannedBy: BannedBy;

    bannedByRoomRole: RoomRole;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type BannedBy = {
    __typename?: 'StreamchatUser';

    id: string;

    displayname: string;
  };

  export type ChatModeratorInlineFragment = {
    __typename?: 'ChatModerator';

    id: string;

    add: boolean;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatEmoteAddInlineFragment = {
    __typename?: 'ChatEmoteAdd';

    id: string;

    emote: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatTimeoutInlineFragment = {
    __typename?: 'ChatTimeout';

    id: string;

    minute: number;

    bannedBy: _BannedBy;

    bannedByRoomRole: RoomRole;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type _BannedBy = {
    __typename?: 'StreamchatUser';

    id: string;

    displayname: string;
  };

  export type ChatTcValueAddInlineFragment = {
    __typename?: 'ChatTCValueAdd';

    id: string;

    amount: string;

    totalAmount: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;

    count: Maybe<number>;

    receiver: Maybe<string>;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;

    gifter: string;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace TreasureChestMessageReceived {
  export type Variables = {
    streamer: string;
  };

  export type Subscription = {
    __typename?: 'Subscription';

    treasureChestMessageReceived: TreasureChestMessageReceived;
  };

  export type TreasureChestMessageReceived = {
    __typename?:
      | TreasureChestGiveawayEndedInlineFragment['__typename']
      | TreasureChestValueExpiredInlineFragment['__typename']
      | TreasureChestGiveawayStartedInlineFragment['__typename']
      | TreasureChestReadyToCollectInlineFragment['__typename']
      | TreasureChestValueUpdatedInlineFragment['__typename'];

    type: TreasureChestMessageType;
  } & (
    | TreasureChestGiveawayEndedInlineFragment
    | TreasureChestValueExpiredInlineFragment
    | TreasureChestGiveawayStartedInlineFragment
    | TreasureChestReadyToCollectInlineFragment
    | TreasureChestValueUpdatedInlineFragment);

  export type TreasureChestGiveawayEndedInlineFragment = {
    __typename?: 'TreasureChestGiveawayEnded';

    type: TreasureChestMessageType;

    nextGiveawayThresholdAt: string;
  };

  export type TreasureChestValueExpiredInlineFragment = {
    __typename?: 'TreasureChestValueExpired';

    type: TreasureChestMessageType;

    expireAt: string;

    value: string;
  };

  export type TreasureChestGiveawayStartedInlineFragment = {
    __typename?: 'TreasureChestGiveawayStarted';

    type: TreasureChestMessageType;

    endTime: string;

    pricePool: string;

    durationInSeconds: number;
  };

  export type TreasureChestReadyToCollectInlineFragment = {
    __typename?: 'TreasureChestReadyToCollect';

    type: TreasureChestMessageType;
  };

  export type TreasureChestValueUpdatedInlineFragment = {
    __typename?: 'TreasureChestValueUpdated';

    type: TreasureChestMessageType;

    value: string;
  };
}

export namespace ActivityFeedFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    chats: Chats[];
  } & (VStreamChatRowStreamerFrag.Fragment & ActivityFeedSettingsFrag.Fragment);

  export type Chats = {
    __typename?:
      | ChatGiftInlineFragment['__typename']
      | ChatHostInlineFragment['__typename']
      | ChatSubscriptionInlineFragment['__typename']
      | ChatExtendSubInlineFragment['__typename']
      | ChatGiftSubInlineFragment['__typename']
      | ChatGiftSubReceiveInlineFragment['__typename']
      | ChatFollowInlineFragment['__typename'];

    type: ChatType;
  } & (
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment
    | ChatFollowInlineFragment);

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;

    gift: DonationType;

    amount: string;

    message: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;

    viewer: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;

    month: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;

    month: number;

    length: number;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;

    count: Maybe<number>;

    receiver: Maybe<string>;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: _Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type _Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;

    gifter: string;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: __Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type __Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace ActivityFeedSettingsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    activitySetting: ActivitySetting;
  };

  export type ActivitySetting = {
    __typename?: 'ActivitySetting';

    lemon: boolean;

    icecream: boolean;

    diamond: boolean;

    ninjaghini: boolean;

    ninjet: boolean;

    follow: boolean;

    subscription: boolean;

    hosting: boolean;

    moderation: boolean;
  };
}

export namespace BankAddressesFrag {
  export type Fragment = {
    __typename?: 'User';

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    bankAddresses: BankAddresses[];
  };

  export type BankAddresses = DAddressCardFrag.Fragment;
}

export namespace CarouselFrag {
  export type Fragment = {
    __typename?: 'LivestreamConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  } & VLivestreamSnapFrag.Fragment;
}

export namespace ChatBannedEmojiFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatBannedEmoji: string[];
  };
}

export namespace ChatBannedEmoteFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatBannedEmote: string[];
  };
}

export namespace ChatBannedUsersFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatBannedUsers: ChatBannedUsers;
  };

  export type ChatBannedUsers = {
    __typename?: 'UserConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace ChatDisabledFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatDisabled: boolean;
  };
}

export namespace ChatEmoteModeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    emoteMode: EmoteMode;
  };

  export type EmoteMode = {
    __typename?: 'EmoteModes';

    NoMineEmote: boolean;

    NoGlobalEmote: boolean;

    NoAllEmote: boolean;
  };
}

export namespace ChatIntervalFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatInterval: number;
  };
}

export namespace ChatModeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatMode: ChatModeType;
  };
}

export namespace ChatModeratorsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatModerators: ChatModerators;
  };

  export type ChatModerators = {
    __typename?: 'UserConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace ChatNoLinkModeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatLinkDisabled: boolean;
  };
}

export namespace ChatVerifiedOnlyModeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatVerifiedOnly: boolean;
  };
}

export namespace ClipCommentFrag {
  export type Fragment = {
    __typename?: 'Clip';

    id: string;

    clipComments: ClipComments;
  };

  export type ClipComments = {
    __typename?: 'ClipCommentConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ClipCommentItemFrag.Fragment;
}

export namespace ClipCommentItemFrag {
  export type Fragment = {
    __typename?: 'ClipComment';

    id: string;

    author: Author;

    content: string;

    likeCount: number;

    liked: boolean;

    hasReplies: boolean;

    replyTo: Maybe<ReplyTo>;

    createdAt: string;
  };

  export type Author = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type ReplyTo = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace ClipViewCacheFrag {
  export type Fragment = {
    __typename?: 'Clip';

    id: string;

    permlink: string;

    upvotes: number;

    views: number;

    picked: boolean;

    description: string;

    shares: number;

    hasUpvoted: Maybe<boolean>;

    comments: number;

    thumbnailUrl: string;

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    id: string;
  };
}

export namespace ClipViewFrag {
  export type Fragment = {
    __typename?: 'Clip';

    id: string;

    permlink: string;

    clippedBy: ClippedBy;

    streamer: Streamer;

    upvotes: number;

    views: number;

    picked: boolean;

    description: string;

    shares: number;

    hasUpvoted: Maybe<boolean>;

    comments: number;

    url: string;

    thumbnailUrl: string;

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type ClippedBy = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Streamer = {
    __typename?: 'User';

    username: string;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment);

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    id: string;
  };
}

export namespace DAddressCardFrag {
  export type Fragment = {
    __typename?: 'BankAddress';

    id: string;

    nickname: string;

    status: BankAddressStatusType;

    err: string;

    method: CashOutMethodType;

    address: Address;
  };

  export type Address =
    | BankInfoInlineFragment
    | BtcAddressInlineFragment
    | BttAddressInlineFragment
    | TrxAddressInlineFragment
    | UsdtAddressInlineFragment
    | TipaltiAddressInlineFragment;

  export type BankInfoInlineFragment = {
    __typename?: 'BankInfo';

    accountNumber: string;
  };

  export type BtcAddressInlineFragment = {
    __typename?: 'BTCAddress';

    address: string;
  };

  export type BttAddressInlineFragment = {
    __typename?: 'BTTAddress';

    address: string;
  };

  export type TrxAddressInlineFragment = {
    __typename?: 'TRXAddress';

    address: string;
  };

  export type UsdtAddressInlineFragment = {
    __typename?: 'USDTAddress';

    address: string;
  };

  export type TipaltiAddressInlineFragment = {
    __typename?: 'TipaltiAddress';

    address: string;
  };
}

export namespace DashboardActivityFeedFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;
  } & ActivityFeedFrag.Fragment;
}

export namespace DashboardHostSettingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    hostingLivestream: Maybe<HostingLivestream>;
  };

  export type HostingLivestream = {
    __typename?: 'Livestream';

    creator: Creator;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace DashboardModeratorFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    modLogs: ModLogs;
  };

  export type ModLogs = {
    __typename?: 'ModLogsConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'ModLog';

    streamer: Streamer;

    operator: Operator;

    operation: string;

    user: Maybe<User>;

    emote: Maybe<string>;

    log: string;

    createdAt: string;
  };

  export type Streamer = {
    __typename?: 'User';

    id: string;

    avatar: string;

    displayname: string;
  };

  export type Operator = {
    __typename?: 'User';

    id: string;

    avatar: string;

    displayname: string;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    avatar: string;

    displayname: string;
  };
}

export namespace DashboardOfflineImageSettingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    partnerStatus: PartnerStatus;

    offlineImage: string;
  };
}

export namespace DashboardRerunSettingsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    rerunSetting: RerunSetting;
  };

  export type RerunSetting = {
    __typename?: 'RerunSetting';

    enabled: boolean;

    presets: Presets[];
  };

  export type Presets = {
    __typename?: 'RerunPreset';

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    permlink: string;
  };
}

export namespace DashboardStreamChatroomFrag {
  export type Fragment = MeLivestreamChatroomFrag.Fragment;
}

export namespace DashboardStreamSettingsFrag {
  export type Fragment = {
    __typename?: 'User';

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;

    private: Maybe<Private>;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  } & VVideoPlayerFrag.Fragment;

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    creator: Creator;
  } & VVideoPlayerFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Private = {
    __typename?: 'UserPrivateInfo';

    streamTemplate: Maybe<StreamTemplate>;

    filterWords: string[];
  };

  export type StreamTemplate = {
    __typename?: 'StreamTemplate';

    title: string;

    ageRestriction: boolean;

    earnRestriction: boolean;

    thumbnailUrl: string;

    disableAlert: boolean;

    category: Category;

    language: Language;

    saveReplay: boolean;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    backendID: number;

    code: string;

    language: string;
  };
}

export namespace DashboardSubscriptionSettingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  } & SettingsSubscribeFrag.Fragment;

  export type Private = {
    __typename?: 'UserPrivateInfo';

    showSubSettingTab: boolean;
  };
}

export namespace EmojiFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    emoji: Emoji;
  };

  export type Emoji = EmojiGlobalFrag.Fragment & EmojiVipFrag.Fragment;
}

export namespace EmojiGlobalFrag {
  export type Fragment = {
    __typename?: 'AllEmojis';

    global: Global;
  };

  export type Global = {
    __typename?: 'EmoteConnection';

    totalCount: number;

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmojiGroupFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    subedStreamerEmojis: SubedStreamerEmojis;
  };

  export type SubedStreamerEmojis = {
    __typename?: 'StreamerEmotesConnection';

    totalCount: number;

    list: List[];
  };

  export type List = {
    __typename?: 'StreamerEmotes';

    streamer: Streamer;

    emotes: Emotes[];
  };

  export type Streamer = {
    __typename?: 'User';

    displayname: string;

    avatar: string;

    username: string;
  };

  export type Emotes = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmojiStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    emoji: Emoji;
  };

  export type Emoji = {
    __typename?: 'AllEmojis';

    vip: Vip;
  };

  export type Vip = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmojiVipFrag {
  export type Fragment = {
    __typename?: 'AllEmojis';

    vip: Vip;
  };

  export type Vip = {
    __typename?: 'EmoteConnection';

    totalCount: number;

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteBoardStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    partnerStatus: PartnerStatus;

    chatBannedEmoji: string[];

    myRoomRole: Maybe<RoomRole>;

    mySubscription: Maybe<MySubscription>;

    emoteMode: EmoteMode;

    emote: Emote;
  } & EmojiFrag.Fragment;

  export type MySubscription = {
    __typename?: 'Sub';

    isSubscribing: boolean;
  };

  export type EmoteMode = {
    __typename?: 'EmoteModes';

    NoMineEmote: boolean;

    NoGlobalEmote: boolean;

    NoAllEmote: boolean;
  };

  export type Emote = {
    __typename?: 'AllEmotes';

    channel: Channel;

    vip: Vip;
  };

  export type Channel = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };

  export type Vip = {
    __typename?: 'EmoteConnection';

    list: _List[];
  };

  export type _List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteChannelFrag {
  export type Fragment = {
    __typename?: 'AllEmotes';

    channel: Channel;
  };

  export type Channel = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteGlobalFrag {
  export type Fragment = {
    __typename?: 'AllEmotes';

    global: Global;
  };

  export type Global = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteItemFrag {
  export type Fragment = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteMineFrag {
  export type Fragment = {
    __typename?: 'AllEmotes';

    mine: Mine;
  };

  export type Mine = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    emote: Emote;
  };

  export type Emote = {
    __typename?: 'AllEmotes';

    channel: Channel;

    vip: Vip;
  };

  export type Channel = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };

  export type Vip = {
    __typename?: 'EmoteConnection';

    list: _List[];
  };

  export type _List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace EmoteUserFrag {
  export type Fragment = {
    __typename?: 'User';

    emote: Emote;
  };

  export type Emote = EmoteMineFrag.Fragment &
    EmoteChannelFrag.Fragment &
    EmoteVipFrag.Fragment;
}

export namespace EmoteVipFrag {
  export type Fragment = {
    __typename?: 'AllEmotes';

    vip: Vip;
  };

  export type Vip = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace FollowFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    isFollowing: Maybe<boolean>;

    isMe: Maybe<boolean>;

    followers: Followers;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace FollowingVideosFrag {
  export type Fragment = {
    __typename?: 'VideoConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = FollowingVideosSnapFrag.Fragment;
}

export namespace FollowingVideosSnapFrag {
  export type Fragment = {
    __typename?: 'Video';

    creator: Creator;

    permlink: string;

    title: string;

    totalReward: string;

    thumbnailUrl: string;

    createdAt: string;

    viewCount: string;

    length: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  } & (VDliveNameFrag.Fragment & VDliveAvatarFrag.Fragment);
}

export namespace HappyhourStreamerEntranceFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    displayname: string;

    happyHourRanking: Maybe<HappyHourRanking>;
  };

  export type HappyHourRanking = {
    __typename?: 'HappyHourRanking';

    id: string;

    rank: number;

    coinNeededTillNextRank: string;

    sortableField: SortableHappyHourField;
  };
}

export namespace HappyHourStreamerInfoFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    displayname: string;

    happyHourRanking: Maybe<HappyHourRanking>;
  };

  export type HappyHourRanking = {
    __typename?: 'HappyHourRanking';

    id: string;

    rank: number;

    coinNeededTillNextRank: string;

    sortableField: SortableHappyHourField;
  };
}

export namespace HomeCategoriesFrag {
  export type Fragment = {
    __typename?: 'CategoryConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VCategoryCardFrag.Fragment;
}

export namespace LanguageFrag {
  export type Fragment = {
    __typename?: 'Language';

    id: string;

    backendID: number;

    language: string;
  };
}

export namespace LeaderboardFrag {
  export type Fragment = {
    __typename?: 'LeaderboardConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'LeaderboardEntry';

    user: User;

    change: number;
  };

  export type User = {
    __typename?: 'User';

    displayname: string;

    wallet: Wallet;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Wallet = {
    __typename?: 'Wallet';

    lastDayEarning: string;
  };
}

export namespace LivestreamAboutFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    panels: Panels[];
  };

  export type Panels = {
    __typename?: 'Panel';

    id: number;

    title: Maybe<string>;

    imageURL: Maybe<string>;

    imageLinkURL: Maybe<string>;

    body: Maybe<string>;
  };
}

export namespace LivestreamAndHostingFrag {
  export type Fragment = {
    __typename?: 'User';

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  } & VVideoPlayerFrag.Fragment;

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    creator: Creator;
  } & VVideoPlayerFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace LivestreamChannelHeaderFrag {
  export type Fragment = {
    __typename?: 'User';

    followers: Followers;

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;

    rerun: Maybe<Rerun>;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment &
    VSubscriptionFrag.Fragment);

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    totalReward: string;

    createdAt: string;

    watchingCount: number;
  } & VPostInfoShareFrag.Fragment;

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;
  };

  export type Rerun = {
    __typename?: 'Rerun';

    watchingCount: number;
  };
}

export namespace LivestreamInfoFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    livestream: Maybe<Livestream>;

    hostingLivestream: Maybe<HostingLivestream>;

    rerun: Maybe<Rerun>;
  } & TreasureChestFrag.Fragment;

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    category: Category;

    language: Language;

    title: string;

    watchingCount: number;

    totalReward: string;
  } & VDonationGiftFrag.Fragment;

  export type Category = {
    __typename?: 'Category';

    title: string;

    imgUrl: string;

    id: string;

    backendID: number;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;
  };

  export type Rerun = {
    __typename?: 'Rerun';

    startSecond: number;

    watchingCount: number;
  };
}

export namespace LivestreamProfileFrag {
  export type Fragment = {
    __typename?: 'User';

    isMe: Maybe<boolean>;

    canSubscribe: boolean;

    private: Maybe<Private>;

    videos: Videos;

    pastBroadcasts: PastBroadcasts;

    clips: Clips;

    followers: Followers;

    following: Following;
  } & LivestreamAboutFrag.Fragment;

  export type Private = {
    __typename?: 'UserPrivateInfo';

    subscribers: Subscribers;
  };

  export type Subscribers = {
    __typename?: 'SubConnection';

    totalCount: number;
  };

  export type Videos = {
    __typename?: 'VideoConnection';

    totalCount: number;
  };

  export type PastBroadcasts = {
    __typename?: 'PastBroadcastConnection';

    totalCount: number;
  };

  export type Clips = {
    __typename?: 'ClipConnection';

    totalCount: number;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type Following = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace LivestreamProfileClipFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    clips: Clips;
  };

  export type Clips = {
    __typename?: 'ClipConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VSnapClipFrag.Fragment;
}

export namespace LoginWithThirdParty {
  export type Fragment = {
    __typename?: 'LoginResponse';

    me: Maybe<Me>;

    accessToken: Maybe<string>;

    twofactorToken: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Me = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace MeActivityFeedFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;
  } & ActivityFeedFrag.Fragment;
}

export namespace MeBalanceFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    wallet: Wallet;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };
}

export namespace MeClipsByMeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    clipsMade: ClipsMade;
  };

  export type ClipsMade = {
    __typename?: 'ClipConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VSnapClipFrag.Fragment;
}

export namespace MeClipsOfMeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    clips: Clips;
  };

  export type Clips = {
    __typename?: 'ClipConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VSnapClipFrag.Fragment;
}

export namespace MeDailyCheckInPopupFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    userWeeklyReward: UserWeeklyReward;
  };

  export type UserWeeklyReward = {
    __typename?: 'UserWeeklyReward';

    latestClaimDay: number;

    canClaimToday: boolean;
  };
}

export namespace MeDashboardFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  } & (DashboardStreamSettingsFrag.Fragment &
    DashboardHostSettingFrag.Fragment &
    DashboardStreamChatroomFrag.Fragment &
    DashboardActivityFeedFrag.Fragment &
    DashboardOfflineImageSettingFrag.Fragment &
    DashboardRerunSettingsFrag.Fragment &
    DashboardSubscriptionSettingFrag.Fragment);

  export type Private = {
    __typename?: 'UserPrivateInfo';

    emailVerified: boolean;
  };
}

export namespace MeEmailFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    email: string;

    emailVerified: boolean;
  };
}

export namespace MeEmoteFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    role: Role;

    emote: Emote;
  };

  export type Emote = EmoteMineFrag.Fragment &
    EmoteChannelFrag.Fragment &
    EmoteGlobalFrag.Fragment &
    EmoteVipFrag.Fragment;
}

export namespace MeFollowingLivestreamsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    followeeFeed: FolloweeFeed;
  };

  export type FolloweeFeed = {
    __typename?: 'UserConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'User';

    id: string;

    username: string;

    livestream: Maybe<Livestream>;

    rerun: Maybe<Rerun>;

    hostingLivestream: Maybe<HostingLivestream>;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Livestream = VLivestreamSnapFrag.Fragment;

  export type Rerun = VRerunSnapFrag.Fragment;

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;
  };
}

export namespace MeGlobalFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    partnerStatus: PartnerStatus;

    role: Role;

    effect: Maybe<string>;

    chatBannedEmote: string[];

    chatBannedEmoji: string[];

    emote: Emote;

    private: Maybe<Private>;

    subCashbacked: Maybe<boolean>;

    hadLemonBack: boolean;
  } & (VDliveAvatarFrag.Fragment &
    EmojiFrag.Fragment &
    EmojiGroupFrag.Fragment &
    SettingsSubscribeFrag.Fragment);

  export type Emote = EmoteVipFrag.Fragment & EmoteChannelFrag.Fragment;

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;

    insecure: boolean;

    email: string;

    emailVerified: boolean;

    phone: string;

    emoteNamePrefix: EmoteNamePrefix;

    nextDisplayNameChangeTime: string;

    language: string;

    showSubSettingTab: boolean;

    registrationType: RegistrationType[];

    twoFactorEnabled: boolean;

    bttAddress: BttAddress;

    partnerBTTAddress: Maybe<string>;

    gotNewBadge: boolean;

    badges: Maybe<Badges[]>;
  };

  export type EmoteNamePrefix = {
    __typename?: 'EmoteNamePrefixInfo';

    namePrefix: string;
  };

  export type BttAddress = {
    __typename?: 'MyBTTAddress';

    senderAddress: Maybe<string>;

    receiverAddress: Maybe<string>;
  };

  export type Badges = {
    __typename?: 'UserBadge';

    badge: BadgeType;

    newBadge: boolean;

    wore: boolean;
  };
}

export namespace MeLivestreamChatroomFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    role: Role;

    myChatBadges: BadgeType[];
  } & (EmojiFrag.Fragment &
    MeEmoteFrag.Fragment &
    MeStreamChatModeSettingFrag.Fragment);
}

export namespace MeLivestreamFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;
  } & MeLivestreamChatroomFrag.Fragment;
}

export namespace MePartnerProgressFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    followers: Followers;

    private: Maybe<Private>;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    PartnerProgressApplyFrag.Fragment);

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    partnerTimezone: PartnerTimezone;

    previousStats: PreviousStats;

    partnerProgress: Maybe<PartnerProgress>;

    maintainProgress: Maybe<MaintainProgress>;
  };

  export type PartnerTimezone = {
    __typename?: 'PartnerTimezone';

    utc: string;

    name: string;
  };

  export type PreviousStats = {
    __typename?: 'PreviousStats';

    partnerStats: Maybe<PartnerStats>;
  };

  export type PartnerStats = {
    __typename?: 'PartnerStats';

    streamingHours: number;

    streamingDays: number;

    donationReceived: string;

    averageCCU: number;
  };

  export type PartnerProgress = {
    __typename?: 'PartnerProgress';

    partnerStatus: PartnerStatus;

    current: Current;

    target: Target;

    eligible: boolean;

    reactivate: boolean;

    from: string;

    to: string;

    application: Maybe<Application>;
  };

  export type Current = {
    __typename?: 'PartnerStats';

    followerCount: number;

    streamingHours: number;

    streamingDays: number;

    lockPoint: string;

    email: boolean;

    about: boolean;

    phone: boolean;

    avatar: boolean;

    subscriberCount: number;
  };

  export type Target = {
    __typename?: 'PartnerStats';

    followerCount: number;

    streamingHours: number;

    streamingDays: number;

    lockPoint: string;

    subscriberCount: number;
  };

  export type Application = {
    __typename?: 'PartnerApplicationResult';

    status: PartnerApplicationStatus;

    comment: Maybe<string>;

    nextApplicationTime: Maybe<string>;
  };

  export type MaintainProgress = {
    __typename?: 'PartnerProgress';

    partnerStatus: PartnerStatus;

    current: _Current;

    target: _Target;

    eligible: boolean;

    reactivate: boolean;

    from: string;

    to: string;
  };

  export type _Current = {
    __typename?: 'PartnerStats';

    followerCount: number;

    streamingHours: number;

    streamingDays: number;

    lockPoint: string;

    subscriberCount: number;
  };

  export type _Target = {
    __typename?: 'PartnerStats';

    followerCount: number;

    streamingHours: number;

    streamingDays: number;

    lockPoint: string;

    subscriberCount: number;
  };
}

export namespace MePaymentFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    wallet: Wallet;

    private: Maybe<Private>;
  } & PaymentRequestsFrag.Fragment;

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    bankAddresses: BankAddresses[];

    kycStatus: KycStatus;

    insecure: boolean;

    streamStat: StreamStat;

    canCashout: boolean;

    taxFormFilled: boolean;
  };

  export type BankAddresses = DAddressCardFrag.Fragment;

  export type StreamStat = {
    __typename?: 'StreamStat';

    length: number;

    day: number;
  };
}

export namespace MeRebillyCardsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    userRebillyCards: UserRebillyCards[];
  };

  export type UserRebillyCards = {
    __typename?: 'RebillyCard';

    brand: RebillyCardType;

    last4: string;

    id: string;
  };
}

export namespace MeRecentCashinRecordsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    userRecentCashinRecords: UserRecentCashinRecords[];
  };

  export type UserRecentCashinRecords = {
    __typename?: 'UserCashinRecord';

    id: string;

    linoAmount: string;

    status: CashinStatusType;
  };
}

export namespace MeReferralFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    partnerStatus: PartnerStatus;

    displayname: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    referral: Referral;
  };

  export type Referral = {
    __typename?: 'ReferralConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = ReferralListItemFrag.Fragment;
}

export namespace MeSidebarFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    wallet: Wallet;

    private: Maybe<Private>;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    followeeFeed: FolloweeFeed;
  };

  export type FolloweeFeed = {
    __typename?: 'UserConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'User';

    username: string;

    livestream: Maybe<Livestream>;

    rerun: Maybe<Rerun>;

    hostingLivestream: Maybe<HostingLivestream>;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;

    watchingCount: number;

    category: Category;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Rerun = {
    __typename?: 'Rerun';

    entries: Entries[];
  };

  export type Entries = {
    __typename?: 'RerunPreset';

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    id: string;

    category: _Category;
  };

  export type _Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  };
}

export namespace MeStreamChatModeSettingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    displaySetting: DisplaySetting;
  };

  export type DisplaySetting = {
    __typename?: 'DisplaySetting';

    lemon: boolean;

    icecream: boolean;

    diamond: boolean;

    ninjaghini: boolean;

    ninjet: boolean;

    follow: boolean;

    subscription: boolean;

    hosting: boolean;

    moderation: boolean;

    chat: boolean;

    stickers: boolean;
  };
}

export namespace MeSubedStreamerEmojis {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    subedStreamerEmojis: SubedStreamerEmojis;
  };

  export type SubedStreamerEmojis = {
    __typename?: 'StreamerEmotesConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'StreamerEmotes';

    streamer: Streamer;

    emotes: Emotes[];
  };

  export type Streamer = {
    __typename?: 'User';

    displayname: string;

    avatar: string;
  };

  export type Emotes = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };
}

export namespace MeSubscribingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    subscribing: Subscribing;
  };

  export type Subscribing = {
    __typename?: 'SubConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    startCursor: string;

    endCursor: string;

    hasNextPage: boolean;

    hasPreviousPage: boolean;
  };

  export type List = {
    __typename?: 'Sub';

    streamer: Streamer;

    tier: number;

    status: SubscriptionStatus;

    lastBilledDate: string;

    subscribedAt: string;

    nextBillingAt: Maybe<string>;

    month: number;

    subType: SubType;
  };

  export type Streamer = {
    __typename?: 'User';

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;
  };
}

export namespace MeUserCashinRecordsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;
  } & UserCashinRecordsFrag.Fragment;
}

export namespace MeUserReferralFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    commissionReferral: CommissionReferral;
  };

  export type CommissionReferral = {
    __typename?: 'CommissionReferralInfo';

    referrals: Referrals;

    totalCommission: string;
  };

  export type Referrals = {
    __typename?: 'CommissionReferralConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'CommissionReferral';

    referree: Referree;

    commission: string;

    referredAt: string;

    donation: string;

    commissionRate: number;
  };

  export type Referree = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  };
}

export namespace PartnerProgressApplyFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    phone: string;

    email: string;
  };
}

export namespace PaymentRequestsFrag {
  export type Fragment = {
    __typename?: 'User';

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    cashOutHistory: CashOutHistory;
  };

  export type CashOutHistory = {
    __typename?: 'CashOutConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'CashOutRecord';

    id: string;

    createdAt: string;

    method: CashOutMethodType;

    address: string;

    linoAmount: string;

    status: CashOutStatus;

    fee: string;

    txID: string;

    rate: string;

    receivedAmount: string;

    estimatedDeliveryTime: string;

    estimatedReceivedTime: string;

    receivedTime: string;

    processTime: number;

    remark: string;

    currency: string;
  };
}

export namespace PinnedGiftItemFrag {
  export type Fragment = {
    __typename?: 'DonationBlock';

    user: User;

    count: number;

    type: DonationType;

    updatedAt: string;

    expiresAt: string;

    expirationTime: number;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);
}

export namespace PinnedGiftsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    recentDonations: RecentDonations[];
  };

  export type RecentDonations = {
    __typename?: 'DonationBlock';

    user: User;
  } & PinnedGiftItemFrag.Fragment;

  export type User = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace PinnedStreakFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    mySubscription: Maybe<MySubscription>;
  };

  export type MySubscription = {
    __typename?: 'Sub';

    isSubscribing: boolean;

    canCheerStreak: boolean;

    subStreak: number;
  };
}

export namespace PinnedSubFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    subSetting: Maybe<SubSetting>;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment &
    PinnedSubOnGoingFrag.Fragment);

  export type SubSetting = {
    __typename?: 'SubSetting';

    badgeText: string;

    badgeColor: string;

    textColor: string;

    benefits: Maybe<string[]>;
  };
}

export namespace PinnedSubOnGoingFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    ongoingGiftSub: Maybe<OngoingGiftSub>;
  };

  export type OngoingGiftSub = {
    __typename?: 'GiftSub';

    gifter: Gifter;

    count: number;
  };

  export type Gifter = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace ProfileReplayFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    pastBroadcasts: PastBroadcasts;
  };

  export type PastBroadcasts = {
    __typename?: 'PastBroadcastConnection';

    totalCount: number;

    list: List[];
  };

  export type List = ProfileReplaySnapFrag.Fragment;
}

export namespace ProfileReplaySnapFrag {
  export type Fragment = {
    __typename?: 'PastBroadcast';

    permlink: string;

    thumbnailUrl: string;

    title: string;

    length: string;

    totalReward: string;

    createdAt: string;

    viewCount: string;

    playbackUrl: string;

    creator: Creator;

    resolution: Resolution[];
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;
  };

  export type Resolution = {
    __typename?: 'Resolution';

    resolution: string;

    url: string;
  };
}

export namespace ProfileVideoSnapFrag {
  export type Fragment = {
    __typename?: 'Video';

    permlink: string;

    thumbnailUrl: string;

    title: string;

    totalReward: string;

    createdAt: string;

    viewCount: string;

    length: string;

    creator: Creator;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;
  };
}

export namespace ReferralListItemFrag {
  export type Fragment = {
    __typename?: 'Referral';

    referral: Referral;

    registrationDate: string;

    referralCloseDate: string;

    referralBonusCloseDate: string;

    streamCount: number;

    peakCCU: number;

    contentBonus: string;

    referBonus: string;

    paid: boolean;
  };

  export type Referral = {
    __typename?: 'User';

    displayname: string;

    followers: Followers;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace RegisterRecommendation {
  export type Fragment = {
    __typename?: 'GlobalInfo';

    recommendChannels: RecommendChannels[];
  };

  export type RecommendChannels = {
    __typename?: 'RecommendStreamer';

    user: User;
  };

  export type User = {
    __typename?: 'User';

    id: string;

    followers: Followers;
  } & (VDliveNameFrag.Fragment &
    VDliveAvatarFrag.Fragment &
    VFollowFrag.Fragment);

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace RegisterResponseFrag {
  export type Fragment = {
    __typename?: 'RegisterResponse';

    me: Maybe<Me>;

    bonus: Maybe<string>;

    err: Maybe<Err>;
  };

  export type Me = {
    __typename?: 'User';

    username: string;

    private: Maybe<Private>;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    accessToken: string;
  };

  export type Err = {
    __typename?: 'Error';

    code: number;

    message: string;
  };
}

export namespace RerunReplayFrag {
  export type Fragment = {
    __typename?: 'PastBroadcast';

    id: string;

    permlink: string;

    playbackUrl: string;

    category: Category;

    language: Language;

    title: string;
  };

  export type Category = {
    __typename?: 'Category';

    title: string;

    imgUrl: string;

    id: string;

    backendID: number;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };
}

export namespace SearchFrag {
  export type Fragment = {
    __typename?: 'SearchResult';

    users: Users;

    livestreams: Livestreams;

    videos: Videos;
  };

  export type Users = SearchUsersFrag.Fragment;

  export type Livestreams = {
    __typename?: 'LivestreamConnection';

    list: List[];
  };

  export type List = SearchItemLivestreamFrag.Fragment;

  export type Videos = {
    __typename?: 'SearchVideoConnection';

    list: _List[];
  };

  export type _List = SearchItemVideoFrag.Fragment;
}

export namespace SearchItemLivestreamFrag {
  export type Fragment = {
    __typename?: 'Livestream';

    creator: Creator;

    title: string;

    permlink: string;

    totalReward: string;

    watchingCount: number;

    thumbnailUrl: string;

    category: Category;

    language: Language;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  } & VDliveNameFrag.Fragment;

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };
}

export namespace SearchItemVideoFrag {
  export type Fragment = VideoInlineFragment | PastBroadcastInlineFragment;

  export type VideoInlineFragment = {
    __typename?: 'Video';

    creator: Creator;

    permlink: string;

    title: string;

    totalReward: string;

    thumbnailUrl: string;

    createdAt: string;

    viewCount: string;

    length: string;

    content: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;
  } & VDliveNameFrag.Fragment;

  export type PastBroadcastInlineFragment = {
    __typename?: 'PastBroadcast';

    creator: _Creator;

    permlink: string;

    title: string;

    totalReward: string;

    thumbnailUrl: string;

    createdAt: string;

    viewCount: string;

    length: string;

    content: string;
  };

  export type _Creator = {
    __typename?: 'User';

    id: string;
  } & VDliveNameFrag.Fragment;
}

export namespace SearchUsersFrag {
  export type Fragment = {
    __typename?: 'UserConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'User';

    displayname: string;

    partnerStatus: PartnerStatus;

    avatar: string;
  } & VFollowFrag.Fragment;
}

export namespace SettingsSubscribeFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    subSetting: Maybe<SubSetting>;
  };

  export type SubSetting = {
    __typename?: 'SubSetting';

    badgeColor: string;

    badgeText: string;

    textColor: string;

    streakTextColor: string;

    benefits: Maybe<string[]>;

    backgroundImage: string;
  };
}

export namespace SidebarRecommendation {
  export type Fragment = {
    __typename?: 'GlobalInfo';

    recommendChannels: RecommendChannels[];
  };

  export type RecommendChannels = {
    __typename?: 'RecommendStreamer';

    user: User;
  };

  export type User = {
    __typename?: 'User';

    livestream: Maybe<Livestream>;

    banStatus: BanStatus;

    hostingLivestream: Maybe<HostingLivestream>;
  } & (VDliveNameFrag.Fragment & VDliveAvatarFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    watchingCount: number;

    permlink: string;

    category: Category;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type HostingLivestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  };
}

export namespace StreamChatMemberManageTabFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    myRoomRole: Maybe<RoomRole>;
  };
}

export namespace StreamChatMessageFrag {
  export type Fragment = {
    __typename?: 'Chat';

    type: ChatType;
  } & (
    | ChatTextInlineFragment
    | ChatClipInlineFragment
    | ChatFollowInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatBanInlineFragment
    | ChatModeratorInlineFragment
    | ChatEmoteAddInlineFragment
    | ChatSubStreakInlineFragment);

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;

    content: string;

    emojis: Maybe<number[]>;

    subLength: number;

    createdAt: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatClipInlineFragment = {
    __typename?: 'ChatClip';

    id: string;

    url: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;

    month: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;

    month: number;

    length: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;

    count: Maybe<number>;

    receiver: Maybe<string>;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;

    gifter: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;

    gift: DonationType;

    amount: string;

    message: string;

    recentCount: number;

    expireDuration: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;

    viewer: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatBanInlineFragment = {
    __typename?: 'ChatBan';

    id: string;

    bannedBy: BannedBy;

    bannedByRoomRole: RoomRole;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type BannedBy = {
    __typename?: 'StreamchatUser';

    id: string;

    displayname: string;
  };

  export type ChatModeratorInlineFragment = {
    __typename?: 'ChatModerator';

    id: string;

    add: boolean;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatEmoteAddInlineFragment = {
    __typename?: 'ChatEmoteAdd';

    id: string;

    emote: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubStreakInlineFragment = {
    __typename?: 'ChatSubStreak';

    id: string;

    length: number;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace StreamChatModeSettingsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    chatMode: ChatModeType;

    emoteMode: EmoteMode;

    chatVerifiedOnly: boolean;

    chatLinkDisabled: boolean;

    chatInterval: number;

    followChatDelay: FollowChatDelayType;
  };

  export type EmoteMode = {
    __typename?: 'EmoteModes';

    NoMineEmote: boolean;

    NoGlobalEmote: boolean;

    NoAllEmote: boolean;
  };
}

export namespace StreamChatroomInputFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    chatMode: ChatModeType;

    chatInterval: number;

    myRoomRole: Maybe<RoomRole>;

    livestream: Maybe<Livestream>;
  } & (StreamChatMemberManageTabFrag.Fragment &
    StreamChatModeSettingsFrag.Fragment &
    EmoteBoardStreamerFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    creator: Creator;

    permlink: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  };
}

export namespace StreamChatTextRowStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    myRoomRole: Maybe<RoomRole>;

    mySubscription: Maybe<MySubscription>;

    chatBannedEmoji: string[];

    emote: Emote;

    subSetting: Maybe<SubSetting>;
  };

  export type MySubscription = {
    __typename?: 'Sub';

    isSubscribing: boolean;
  };

  export type Emote = {
    __typename?: 'AllEmotes';

    channel: Channel;
  };

  export type Channel = {
    __typename?: 'EmoteConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Emote';

    name: string;

    username: string;

    sourceURL: string;

    mimeType: string;

    level: EmoteLevel;

    type: EmoteType;
  };

  export type SubSetting = {
    __typename?: 'SubSetting';

    streakTextColor: string;
  };
}

export namespace SubscriptionFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    mySubscription: Maybe<MySubscription>;
  };

  export type MySubscription = {
    __typename?: 'Sub';

    isSubscribing: boolean;
  };
}

export namespace TopContributorsOfLivestreamFrag {
  export type Fragment = {
    __typename?: 'Livestream';

    id: string;

    topContributions: TopContributions;
  };

  export type TopContributions = {
    __typename?: 'ContributionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Contribution';

    amount: string;

    contributor: Contributor;
  };

  export type Contributor = {
    __typename?: 'User';

    id: string;
  } & (VDliveNameFrag.Fragment & VDliveAvatarFrag.Fragment);
}

export namespace TopContributorsOfStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    topContributions: TopContributions;
  };

  export type TopContributions = {
    __typename?: 'ContributionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Contribution';

    amount: string;

    contributor: Contributor;
  };

  export type Contributor = {
    __typename?: 'User';

    id: string;
  } & (VDliveNameFrag.Fragment & VDliveAvatarFrag.Fragment);
}

export namespace TreasureChestFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    isMe: Maybe<boolean>;

    treasureChest: TreasureChest;
  } & TreasureChestPopupFrag.Fragment;

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    value: string;

    state: TreasureChestState;

    ongoingGiveaway: Maybe<OngoingGiveaway>;
  };

  export type OngoingGiveaway = {
    __typename?: 'Giveaway';

    closeAt: string;

    pricePool: string;

    claimed: Maybe<boolean>;
  };
}

export namespace TreasureChestAddPointsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    treasureChest: TreasureChest;

    wallet: Wallet;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    userTransferSetting: UserTransferSetting;
  };

  export type UserTransferSetting = {
    __typename?: 'TCUserTransferSetting';

    weeklyTransferTotalQuota: string;

    weeklyTransferQuotaLeft: string;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };
}

export namespace TreasureChestUserFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    treasureChest: TreasureChest;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    value: string;

    state: TreasureChestState;

    expireAt: Maybe<string>;

    buffs: Buffs[];

    ongoingGiveaway: Maybe<OngoingGiveaway>;

    startGiveawayValueThreshold: string;
  };

  export type Buffs = {
    __typename?: 'TreasureChestBuff';

    type: TreasureChestBuffType;

    boost: number;
  };

  export type OngoingGiveaway = {
    __typename?: 'Giveaway';

    pricePool: string;

    closeAt: string;

    claimed: Maybe<boolean>;

    durationInSeconds: number;
  };
}

export namespace TreasureChestPopupFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    isMe: Maybe<boolean>;

    isFollowing: Maybe<boolean>;

    treasureChest: TreasureChest;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    value: string;

    state: TreasureChestState;

    expireAt: Maybe<string>;

    buffs: Buffs[];

    ongoingGiveaway: Maybe<OngoingGiveaway>;

    startGiveawayValueThreshold: string;

    nextGiveawayThresholdAt: Maybe<string>;
  };

  export type Buffs = {
    __typename?: 'TreasureChestBuff';

    type: TreasureChestBuffType;

    boost: number;
  };

  export type OngoingGiveaway = {
    __typename?: 'Giveaway';

    pricePool: string;

    closeAt: string;

    claimed: Maybe<boolean>;

    durationInSeconds: number;
  };
}

export namespace TreasureChestStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    treasureChest: TreasureChest;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    nextGiveawayThresholdAt: Maybe<string>;

    startGiveawayValueThreshold: string;
  };
}

export namespace TreasureChestValidTransferFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    treasureChest: TreasureChest;

    wallet: Wallet;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    validUserTransfer: TcUserTransferResultType;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };
}

export namespace TreasureChestWinnersFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    isMe: Maybe<boolean>;

    treasureChest: TreasureChest;
  };

  export type TreasureChest = {
    __typename?: 'TreasureChest';

    myLastGiveawayReward: Maybe<MyLastGiveawayReward>;

    lastGiveawayRewards: LastGiveawayRewards[];
  };

  export type MyLastGiveawayReward =
    | GiveawayHappyHourTicketRewardInlineFragment
    | GiveawayMoneyRewardInlineFragment;

  export type GiveawayHappyHourTicketRewardInlineFragment = {
    __typename?: 'GiveawayHappyHourTicketReward';

    type: GiveawayRewardType;

    value: string;
  };

  export type GiveawayMoneyRewardInlineFragment = {
    __typename?: 'GiveawayMoneyReward';

    type: GiveawayRewardType;

    value: string;
  };

  export type LastGiveawayRewards =
    | _GiveawayHappyHourTicketRewardInlineFragment
    | _GiveawayMoneyRewardInlineFragment;

  export type _GiveawayHappyHourTicketRewardInlineFragment = {
    __typename?: 'GiveawayHappyHourTicketReward';

    type: GiveawayRewardType;

    value: string;

    user: User;
  };

  export type User = {
    __typename?: 'User';

    displayname: string;
  } & VDliveAvatarFrag.Fragment;

  export type _GiveawayMoneyRewardInlineFragment = {
    __typename?: 'GiveawayMoneyReward';

    type: GiveawayRewardType;

    value: string;

    user: _User;
  };

  export type _User = {
    __typename?: 'User';

    displayname: string;
  } & VDliveAvatarFrag.Fragment;
}

export namespace UserCashinRecordsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    wallet: Wallet;

    private: Maybe<Private>;
  };

  export type Wallet = {
    __typename?: 'Wallet';

    balance: string;
  };

  export type Private = {
    __typename?: 'UserPrivateInfo';

    insecure: boolean;

    email: string;

    userCashinRecords: UserCashinRecords;
  };

  export type UserCashinRecords = {
    __typename?: 'UserCashinRecordConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'UserCashinRecord';

    id: string;

    paidAmount: string;

    linoAmount: string;

    status: CashinStatusType;

    currency: string;

    purchaseTime: string;

    vendor: CashinVendorType;
  };
}

export namespace VCategoryCardFrag {
  export type Fragment = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;

    imgUrl: string;

    watchingCount: number;
  };
}

export namespace VCategoryLivestreamFrag {
  export type Fragment = {
    __typename?: 'LivestreamConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Livestream';

    permlink: string;

    ageRestriction: boolean;

    earnRestriction: boolean;
  } & VLivestreamSnapFrag.Fragment;
}

export namespace VDliveAvatarFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    avatar: string;

    effect: Maybe<string>;
  };
}

export namespace VDliveNameFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    displayname: string;

    partnerStatus: PartnerStatus;
  };
}

export namespace VDonationGiftFrag {
  export type Fragment = {
    __typename?: 'Post';

    permlink: string;

    category: Category;

    language: Language;

    creator: Creator;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;
  };
}

export namespace VFollowFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    isFollowing: Maybe<boolean>;

    isMe: Maybe<boolean>;

    followers: Followers;
  };

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace VideoPbHeaderFrag {
  export type Fragment = {
    __typename?: 'VideoPB';

    totalReward: string;

    viewCount: string;

    creator: Creator;
  } & VPostInfoShareFrag.Fragment;

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    about: string;

    followers: Followers;
  } & (VDliveAvatarFrag.Fragment &
    VDliveNameFrag.Fragment &
    VFollowFrag.Fragment &
    VSubscriptionFrag.Fragment);

  export type Followers = {
    __typename?: 'UserConnection';

    totalCount: number;
  };
}

export namespace VLivestreamChatroomFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    isFollowing: Maybe<boolean>;

    role: Role;

    myRoomRole: Maybe<RoomRole>;

    isSubscribing: Maybe<boolean>;

    chats: Chats[];
  } & (VStreamChatroomHeaderFrag.Fragment &
    VStreamChatroomListFrag.Fragment &
    StreamChatroomInputFrag.Fragment);

  export type Chats = {
    __typename?:
      | ChatGiftInlineFragment['__typename']
      | ChatHostInlineFragment['__typename']
      | ChatSubscriptionInlineFragment['__typename']
      | ChatExtendSubInlineFragment['__typename']
      | ChatTextInlineFragment['__typename']
      | ChatSubStreakInlineFragment['__typename']
      | ChatClipInlineFragment['__typename']
      | ChatModeratorInlineFragment['__typename']
      | ChatTcValueAddInlineFragment['__typename']
      | ChatFollowInlineFragment['__typename']
      | ChatEmoteAddInlineFragment['__typename']
      | ChatGiftSubInlineFragment['__typename']
      | ChatGiftSubReceiveInlineFragment['__typename'];

    type: ChatType;
  } & (
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatTextInlineFragment
    | ChatSubStreakInlineFragment
    | ChatClipInlineFragment
    | ChatModeratorInlineFragment
    | ChatTcValueAddInlineFragment
    | ChatFollowInlineFragment
    | ChatEmoteAddInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment);

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;

    gift: DonationType;

    amount: string;

    message: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;

    viewer: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;

    month: number;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;

    month: number;

    length: number;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;

    content: string;

    subLength: number;

    emojis: Maybe<number[]>;

    createdAt: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubStreakInlineFragment = {
    __typename?: 'ChatSubStreak';

    id: string;

    length: number;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: _Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type _Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatClipInlineFragment = {
    __typename?: 'ChatClip';

    id: string;

    url: string;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: __Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type __Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatModeratorInlineFragment = {
    __typename?: 'ChatModerator';

    id: string;

    add: boolean;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: ___Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ___Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatTcValueAddInlineFragment = {
    __typename?: 'ChatTCValueAdd';

    id: string;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: ____Sender;

    amount: string;

    totalAmount: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ____Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatEmoteAddInlineFragment = {
    __typename?: 'ChatEmoteAdd';

    id: string;

    emote: string;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: _____Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type _____Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;

    count: Maybe<number>;

    receiver: Maybe<string>;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: ______Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ______Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;

    gifter: string;

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: _______Sender;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type _______Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];
  };
}

export namespace VLivestreamSnapFrag {
  export type Fragment = {
    __typename?: 'Livestream';

    id: string;

    creator: Creator;

    permlink: string;

    title: string;

    totalReward: string;

    watchingCount: number;

    earnRestriction: boolean;

    thumbnailUrl: string;

    lastUpdatedAt: string;

    category: Category;

    language: Language;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    myChatBadges: BadgeType[];
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };
}

export namespace VPostInfoShareFrag {
  export type Fragment = {
    __typename?: 'Post';

    permlink: string;

    title: string;

    content: string;

    category: Category;

    creator: Creator;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    backendID: number;

    title: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  };
}

export namespace VRerunSnapFrag {
  export type Fragment = {
    __typename?: 'Rerun';

    entries: Entries[];

    watchingCount: number;
  };

  export type Entries = {
    __typename?: 'RerunPreset';

    pastbroadcast: Maybe<Pastbroadcast>;
  };

  export type Pastbroadcast = {
    __typename?: 'PastBroadcast';

    id: string;

    creator: Creator;

    permlink: string;

    title: string;

    thumbnailUrl: string;

    category: Category;

    language: Language;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;
  } & (VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment);

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };
}

export namespace VSnapClipFrag {
  export type Fragment = {
    __typename?: 'Clip';

    id: string;

    permlink: string;

    clippedBy: ClippedBy;

    upvotes: number;

    views: number;

    picked: boolean;

    url: string;

    description: string;

    createdAt: string;

    startTime: number;

    endTime: number;

    thumbnailUrl: string;
  };

  export type ClippedBy = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace VStreamChatChestValueRowFrag {
  export type Fragment = {
    __typename?: 'ChatTCValueAdd';

    amount: string;

    totalAmount: string;
  };
}

export namespace VStreamChatClipRowFrag {
  export type Fragment = {
    __typename?: 'ChatClip';

    url: string;
  };
}

export namespace VStreamChatGiftRowFrag {
  export type Fragment = {
    __typename?: 'ChatGift';

    gift: DonationType;

    amount: string;

    message: string;
  };
}

export namespace VStreamChatGiftSubReceiveRowFrag {
  export type Fragment = {
    __typename?: 'ChatGiftSubReceive';

    gifter: string;
  };
}

export namespace VStreamChatGiftSubRowFrag {
  export type Fragment = {
    __typename?: 'ChatGiftSub';

    count: Maybe<number>;

    receiver: Maybe<string>;
  };
}

export namespace VStreamChatHostRowFrag {
  export type Fragment = {
    __typename?: 'ChatHost';

    viewer: number;
  };
}

export namespace VStreamChatNotificationBanRowFrag {
  export type Fragment = {
    __typename?: 'ChatBan';

    id: string;

    sender: Sender;
  };

  export type Sender = {
    __typename?: 'StreamchatUser';

    displayname: string;
  };
}

export namespace VStreamChatNotificationEmoteRowFrag {
  export type Fragment = {
    __typename?: 'ChatEmoteAdd';

    sender: Sender;

    emote: string;
  };

  export type Sender = {
    __typename?: 'StreamchatUser';

    displayname: string;
  };
}

export namespace VStreamChatNotificationModeratorRowFrag {
  export type Fragment = {
    __typename?: 'ChatModerator';

    sender: Sender;

    add: boolean;
  };

  export type Sender = {
    __typename?: 'StreamchatUser';

    displayname: string;
  };
}

export namespace VStreamChatProfileCardSenderFrag {
  export type Fragment = {
    __typename?: 'Chat';

    type: ChatType;
  } & (
    | ChatTextInlineFragment
    | ChatClipInlineFragment
    | ChatFollowInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatSubStreakInlineFragment);

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatClipInlineFragment = {
    __typename?: 'ChatClip';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;

    gift: DonationType;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubStreakInlineFragment = {
    __typename?: 'ChatSubStreak';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace VStreamChatProfileCardStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    myRoomRole: Maybe<RoomRole>;

    role: Role;
  };
}

export namespace VStreamChatResubRowFrag {
  export type Fragment = {
    __typename?: 'ChatExtendSub';

    month: number;

    length: number;
  };
}

export namespace VStreamChatroomHeaderFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    donateDisabled: boolean;

    subscribeDisabled: boolean;

    livestream: Maybe<Livestream>;
  } & (EmojiFrag.Fragment & VTopContributorsFrag.Fragment);

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;

    permlink: string;
  };
}

export namespace VStreamChatroomListFrag {
  export type Fragment = VStreamChatRowStreamerFrag.Fragment &
    PinnedGiftsFrag.Fragment &
    PinnedSubFrag.Fragment &
    ChatDisabledFrag.Fragment &
    PinnedStreakFrag.Fragment;
}

export namespace VStreamChatRowSenderFrag {
  export type Fragment = {
    __typename?: 'Chat';

    type: ChatType;
  } & (
    | ChatTextInlineFragment
    | ChatClipInlineFragment
    | ChatFollowInlineFragment
    | ChatSubscriptionInlineFragment
    | ChatExtendSubInlineFragment
    | ChatGiftSubInlineFragment
    | ChatGiftSubReceiveInlineFragment
    | ChatGiftInlineFragment
    | ChatHostInlineFragment
    | ChatSubStreakInlineFragment);

  export type ChatTextInlineFragment = {
    __typename?: 'ChatText';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatClipInlineFragment = {
    __typename?: 'ChatClip';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatFollowInlineFragment = {
    __typename?: 'ChatFollow';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubscriptionInlineFragment = {
    __typename?: 'ChatSubscription';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatExtendSubInlineFragment = {
    __typename?: 'ChatExtendSub';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubInlineFragment = {
    __typename?: 'ChatGiftSub';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftSubReceiveInlineFragment = {
    __typename?: 'ChatGiftSubReceive';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatGiftInlineFragment = {
    __typename?: 'ChatGift';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatHostInlineFragment = {
    __typename?: 'ChatHost';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;

  export type ChatSubStreakInlineFragment = {
    __typename?: 'ChatSubStreak';

    id: string;
  } & VStreamChatSenderInfoFrag.Fragment;
}

export namespace VStreamChatRowSenderInfoStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    subSetting: Maybe<SubSetting>;
  };

  export type SubSetting = {
    __typename?: 'SubSetting';

    badgeText: string;

    badgeColor: string;

    textColor: string;

    streakTextColor: string;
  };
}

export namespace VStreamChatRowStreamerFrag {
  export type Fragment = {
    __typename?: 'User';

    displayname: string;

    isMe: Maybe<boolean>;
  } & (VStreamChatRowSenderInfoStreamerFrag.Fragment &
    VStreamChatProfileCardStreamerFrag.Fragment &
    StreamChatTextRowStreamerFrag.Fragment);
}

export namespace VStreamChatSenderInfoFrag {
  export type Fragment = {
    __typename?: 'SenderInfo';

    subscribing: boolean;

    role: Role;

    roomRole: RoomRole;

    sender: Sender;
  };

  export type Sender = {
    __typename?: 'StreamchatUser';

    id: string;

    username: string;

    displayname: string;

    avatar: string;

    partnerStatus: PartnerStatus;

    badges: BadgeType[];

    effect: Maybe<string>;
  };
}

export namespace VStreamChatSubscriptionRowFrag {
  export type Fragment = {
    __typename?: 'ChatSubscription';

    month: number;
  };
}

export namespace VStreamChatSubStreakRowFrag {
  export type Fragment = {
    __typename?: 'ChatSubStreak';

    length: number;
  };
}

export namespace VStreamChatTextRowFrag {
  export type Fragment = {
    __typename?: 'ChatText';

    content: string;

    subLength: number;

    emojis: Maybe<number[]>;

    createdAt: string;
  };
}

export namespace VSubscriptionFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    username: string;

    displayname: string;

    lastStreamedAt: string;

    mySubscription: Maybe<MySubscription>;

    isSubscribing: Maybe<boolean>;

    canSubscribe: boolean;

    isMe: Maybe<boolean>;

    subSetting: Maybe<SubSetting>;
  } & EmojiFrag.Fragment;

  export type MySubscription = {
    __typename?: 'Sub';

    isSubscribing: boolean;

    nextBillingAt: Maybe<string>;

    lemonSub: boolean;

    subType: SubType;

    subscribedAt: string;

    subStreak: number;

    lastBilledDate: string;

    status: SubscriptionStatus;

    month: number;

    subStreakStartedAt: string;
  };

  export type SubSetting = {
    __typename?: 'SubSetting';

    badgeColor: string;

    badgeText: string;

    textColor: string;

    streakTextColor: string;

    benefits: Maybe<string[]>;

    backgroundImage: string;
  };
}

export namespace VTopContributorsFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    displayname: string;

    livestream: Maybe<Livestream>;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    id: string;
  };
}

export namespace VTopContributorsLivestreamFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    livestream: Maybe<Livestream>;
  };

  export type Livestream = {
    __typename?: 'Livestream';

    topContributions: TopContributions;
  };

  export type TopContributions = {
    __typename?: 'ContributionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Contribution';

    amount: string;

    contributor: Contributor;
  };

  export type Contributor = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace VTopContributorsPersonFrag {
  export type Fragment = {
    __typename?: 'User';

    id: string;

    topContributions: TopContributions;
  };

  export type TopContributions = {
    __typename?: 'ContributionConnection';

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = {
    __typename?: 'Contribution';

    amount: string;

    contributor: Contributor;
  };

  export type Contributor = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace VVideoPbCommentFrag {
  export type Fragment = {
    __typename?: 'CommentConnection';

    totalCount: number;

    pageInfo: PageInfo;

    list: List[];
  };

  export type PageInfo = {
    __typename?: 'PageInfo';

    endCursor: string;

    hasNextPage: boolean;
  };

  export type List = VVideoPbCommentItemFrag.Fragment;
}

export namespace VVideoPbCommentItemFrag {
  export type Fragment = {
    __typename?: 'Comment';

    upvotes: number;

    downvotes: number;

    author: Author;

    content: string;

    createdAt: string;

    myVote: VoteStatus;

    commentCount: number;

    permlink: string;
  };

  export type Author = {
    __typename?: 'User';

    displayname: string;

    avatar: string;
  };
}

export namespace VVideoPbInfoFrag {
  export type Fragment = {
    __typename?: 'VideoPB';

    category: Category;

    language: Language;

    content: string;

    permlink: string;

    title: string;

    createdAt: string;

    creator: Creator;
  } & VDonationGiftFrag.Fragment;

  export type Category = {
    __typename?: 'Category';

    title: string;

    imgUrl: string;

    id: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;
  };
}

export namespace VVideoPbUpNextItemFrag {
  export type Fragment = {
    __typename?: 'VideoPB';

    creator: Creator;

    permlink: string;

    title: string;

    totalReward: string;

    thumbnailUrl: string;

    length: string;
  };

  export type Creator = {
    __typename?: 'User';

    id: string;

    displayname: string;
  };
}

export namespace VVideoPbUpNextTopContributorFrag {
  export type Fragment = {
    __typename?: 'ContributionConnection';

    list: List[];
  };

  export type List = {
    __typename?: 'Contribution';

    amount: string;

    contributor: Contributor;
  };

  export type Contributor = VDliveAvatarFrag.Fragment & VDliveNameFrag.Fragment;
}

export namespace VVideoPlayerFrag {
  export type Fragment = {
    __typename?: 'Livestream';

    permlink: string;

    disableAlert: boolean;

    category: Category;

    language: Language;
  };

  export type Category = {
    __typename?: 'Category';

    id: string;

    title: string;
  };

  export type Language = {
    __typename?: 'Language';

    id: string;

    language: string;
  };
}

export namespace WeeklyRewardFrag {
  export type Fragment = {
    __typename?: 'WeeklyReward';

    dailyRewards: string[];
  };
}
