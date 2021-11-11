import { GetterTree } from 'vuex';
import { MeState, CompleteMe } from './types';
import { RootState } from '../types';
import {
  DashboardStreamSettingsFrag,
  MeEmoteFrag,
  EmoteGlobalFrag,
  EmoteMineFrag,
  MeStreamChatModeSettingFrag,
  ActivityFeedSettingsFrag,
  MeSubedStreamerEmojis
} from '@/graphql/types';

export const getters: GetterTree<MeState, RootState> = {
  me(state): CompleteMe | null {
    return state.me;
  },
  isLoggedIn(state): boolean {
    return state.me !== null;
  },
  streamTemplate(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.streamTemplate !== undefined &&
      state.me.private.streamTemplate !== null
    ) {
      return state.me.private
        .streamTemplate as DashboardStreamSettingsFrag.StreamTemplate;
    }
    return null;
  },
  filterWords(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.filterWords !== undefined
    ) {
      return state.me.private.filterWords as string[];
    }
    return [];
  },
  emojisAll(state) {
    let list: MeSubedStreamerEmojis.Emotes[] = [];
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null
    ) {
      list = list.concat(state.me.emoji.vip.list);
      list = list.concat(state.me.emoji.global.list);
      if (state.me.private.subedStreamerEmojis) {
        const subEmoteList = state.me.private.subedStreamerEmojis.list
          .map(item => item.emotes)
          .flat();
        list = list.concat(subEmoteList);
      }
    }
    return list;
  },
  tronReceiverAddress(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.bttAddress !== null &&
      state.me.private.bttAddress !== undefined &&
      state.me.private.bttAddress.receiverAddress !== null
    ) {
      return state.me.private.bttAddress.receiverAddress;
    }
    return '';
  },
  tronSenderAddress(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.bttAddress !== null &&
      state.me.private.bttAddress !== undefined &&
      state.me.private.bttAddress.senderAddress !== ''
    ) {
      return state.me.private.bttAddress.senderAddress;
    }
    return '';
  },

  partnerTimezone(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.partnerTimezone
    ) {
      return state.me.private.partnerTimezone;
    }
    return null;
  },

  displaySetting(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.displaySetting !== undefined
    ) {
      return state.me.private
        .displaySetting as MeStreamChatModeSettingFrag.DisplaySetting;
    }
    return null;
  },
  activitySetting(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.activitySetting !== undefined
    ) {
      return state.me.private
        .activitySetting as ActivityFeedSettingsFrag.ActivitySetting;
    }
    return null;
  },
  meEmote(state) {
    if (state.me !== null && state.me.emote !== undefined) {
      return state.me.emote as MeEmoteFrag.Emote;
    }
    return null;
  },
  meGlobalEmote(state) {
    if (
      state.me !== null &&
      state.me.emote !== undefined &&
      state.me.emote.global !== undefined
    ) {
      return state.me.emote.global as EmoteGlobalFrag.Global;
    }
    return null;
  },
  meMineEmote(state) {
    if (
      state.me !== null &&
      state.me.emote !== undefined &&
      state.me.emote.mine !== undefined
    ) {
      return state.me.emote.mine as EmoteMineFrag.Mine;
    }
    return null;
  },
  meLivestream(state) {
    if (state.me !== null && state.me.livestream !== undefined) {
      return state.me.livestream;
    }
    return null;
  },
  meHostLivestream(state) {
    if (state.me !== null && state.me.hostingLivestream !== undefined) {
      return state.me.hostingLivestream;
    }
    return null;
  },
  meBalance(state) {
    if (
      state.me !== null &&
      state.me.wallet !== undefined &&
      state.me.wallet.balance !== undefined
    ) {
      return state.me.wallet.balance;
    }
    return null;
  },
  mePhone(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.phone !== undefined
    ) {
      return state.me.private.phone;
    }
    return '';
  },
  meEmail(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.email !== undefined
    ) {
      return state.me.private.email;
    }
    return null;
  },
  meEmailVerified(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.emailVerified !== undefined
    ) {
      return state.me.private.emailVerified;
    }
    return undefined;
  },
  requireEmailVerify(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null
    ) {
      if (
        state.me.private.email === undefined ||
        state.me.private.emailVerified === undefined
      ) {
        return false;
      } else {
        return !!state.me.private.email && !state.me.private.emailVerified;
      }
    } else {
      return false;
    }
  },
  meFollowingLive(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.followeeFeed !== undefined
    ) {
      return state.me.private.followeeFeed.list;
    }
    return [];
  },
  meCashinRecords(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.userCashinRecords !== undefined
    ) {
      return state.me.private.userCashinRecords;
    }
    return null;
  },
  meRebillyCards(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.userRebillyCards !== undefined
    ) {
      return state.me.private.userRebillyCards;
    }
    return [];
  },
  meRerunSetting(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.rerunSetting !== undefined
    ) {
      return state.me.private.rerunSetting;
    }
    return null;
  },
  meUserWeeklyReward(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.userWeeklyReward !== undefined
    ) {
      return state.me.private.userWeeklyReward;
    }
    return null;
  },
  meTwoFactorEnabled(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.twoFactorEnabled !== undefined
    ) {
      return state.me.private.twoFactorEnabled;
    }
    return undefined;
  },
  meCanCashout(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.canCashout !== undefined
    ) {
      return state.me.private.canCashout;
    }
    return false;
  },
  meTaxFormFilled(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.taxFormFilled !== undefined
    ) {
      return state.me.private.taxFormFilled;
    }
    return false;
  },
  meSubCashbacked(state) {
    if (state.me !== null && state.me.subCashbacked !== undefined) {
      return state.me.subCashbacked;
    }
    return true;
  },
  meHadLemonBack(state) {
    if (state.me !== null && state.me.hadLemonBack !== undefined) {
      return state.me.hadLemonBack;
    }
    return true;
  },
  mePartnerBTTAddress(state) {
    if (
      state.me !== null &&
      state.me.private !== undefined &&
      state.me.private !== null &&
      state.me.private.partnerBTTAddress !== undefined
    ) {
      return state.me.private.partnerBTTAddress;
    }
    return null;
  }
};
