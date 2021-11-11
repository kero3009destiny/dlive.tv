import ApolloClient from 'apollo-client';
import { MeGlobal, SettingsSubscribeFrag, BadgeType } from '@/graphql/types';
import ME_GLOBAL from '@/graphql/queries/MeGlobal.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { InternalError } from '@/models/error';

const readMe = (
  client: ApolloClient<NormalizedCacheObject>
): MeGlobal.Query | null => {
  return client.readQuery<MeGlobal.Query, MeGlobal.Variables>({
    query: ME_GLOBAL
  });
};

const writeBack = (
  client: ApolloClient<NormalizedCacheObject>,
  data: MeGlobal.Query
): void => {
  client.writeQuery<MeGlobal.Query, MeGlobal.Variables>({
    query: ME_GLOBAL,
    data
  });
};

// Maybe use writeFragment to save readQuery
export const setMeEmail = (
  client: ApolloClient<NormalizedCacheObject>,
  email: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.email = email;
  writeBack(client, original);
};

export const setMeEmailVerified = (
  client: ApolloClient<NormalizedCacheObject>,
  emailVerified: boolean
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.emailVerified = emailVerified;
  writeBack(client, original);
};

export const setMeDisplayName = (
  client: ApolloClient<NormalizedCacheObject>,
  displayName: string
): void => {
  const original = readMe(client);
  if (original === null || original.me === null) {
    return;
  }
  original.me.displayname = displayName;
  writeBack(client, original);
};

export const setMePrefixName = (
  client: ApolloClient<NormalizedCacheObject>,
  namePrefix: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.emoteNamePrefix.namePrefix = namePrefix;
  writeBack(client, original);
};
export const setMeAvatar = (
  client: ApolloClient<NormalizedCacheObject>,
  avatar: string
): void => {
  const original = readMe(client);
  if (original === null || original.me === null) {
    return;
  }
  original.me.avatar = avatar;
  writeBack(client, original);
};

export const setMePhone = (
  client: ApolloClient<NormalizedCacheObject>,
  phone: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.phone = phone;
  writeBack(client, original);
};

export const setMeSubSettings = (
  client: ApolloClient<NormalizedCacheObject>,
  subSettings: SettingsSubscribeFrag.SubSetting
): InternalError | undefined => {
  const original = readMe(client);
  if (original === null || original.me === null) {
    return new InternalError('no me fragment');
  }
  original.me.subSetting = subSettings;
  writeBack(client, original);
};

export const setMeLanguage = (
  client: ApolloClient<NormalizedCacheObject>,
  language: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.language = language;
  writeBack(client, original);
};

export const setMeTwoFactorEnabled = (
  client: ApolloClient<NormalizedCacheObject>,
  enabled: boolean
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private === null
  ) {
    return;
  }
  original.me.private.twoFactorEnabled = enabled;
  writeBack(client, original);
};

export const setSubCashbacked = (
  client: ApolloClient<NormalizedCacheObject>,
  subCashbacked: boolean
): void => {
  const original = readMe(client);
  if (original === null || original.me === null) {
    return;
  }
  original.me.subCashbacked = subCashbacked;
  writeBack(client, original);
};

export const setHadLemonBack = (
  client: ApolloClient<NormalizedCacheObject>,
  hadLemonBack: boolean
): void => {
  const original = readMe(client);
  if (original === null || original.me === null) {
    return;
  }
  original.me.hadLemonBack = hadLemonBack;
  writeBack(client, original);
};

export const setSenderAddress = (
  client: ApolloClient<NormalizedCacheObject>,
  address: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private == null
  ) {
    return;
  }
  original.me.private.bttAddress.senderAddress = address;
  writeBack(client, original);
};

export const setReceiverAddress = (
  client: ApolloClient<NormalizedCacheObject>,
  address: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private == null
  ) {
    return;
  }
  original.me.private.bttAddress.receiverAddress = address;
  writeBack(client, original);
};

export const setPartnerBttAddressCache = (
  client: ApolloClient<NormalizedCacheObject>,
  address: string
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private == null
  ) {
    return;
  }
  original.me.private.partnerBTTAddress = address;
  writeBack(client, original);
};

export const setBadgeWearCache = (
  client: ApolloClient<NormalizedCacheObject>,
  badges: Array<{ badge: BadgeType; wore: boolean }>
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private == null ||
    !original.me.private.badges
  ) {
    return;
  }
  original.me.private.badges = original.me.private.badges.map(item => {
    badges.forEach(b => {
      if (item.badge === b.badge) {
        item.wore = b.wore;
      }
    });
    return item;
  });
  writeBack(client, original);
};

export const setNewBadgeCache = (
  client: ApolloClient<NormalizedCacheObject>,
  status: boolean
): void => {
  const original = readMe(client);
  if (
    original === null ||
    original.me === null ||
    original.me.private == null
  ) {
    return;
  }
  original.me.private.gotNewBadge = status;
  writeBack(client, original);
};
