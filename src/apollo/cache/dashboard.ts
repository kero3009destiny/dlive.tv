import {
  StreamHostSet,
  DashboardStreamSettingsFrag,
  DashboardHostSettingFrag,
  DashboardOfflineImageSettingFrag,
  DashboardRerunSettingsFrag
} from '@/graphql/types';
import DASHBOARD_HOST_SETTING_FRAG from '@/graphql/fragments/DashboardHostSetting.graphql';
import DASHBOARD_STREAM_SETTINGS from '@/graphql/fragments/DashboardStreamSettings.graphql';
import DASHBOARD_RERUN_SETTINGS_FRAG from '@/graphql/fragments/DashboardRerunSettingsFrag.graphql';
import DASHBOARD_OFFLINE_IMAGE_SETTINGS from '@/graphql/fragments/DashboardOfflineImageSetting.graphql';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { InternalError } from '@/models/error';

export const writeRerunCache = (
  client: ApolloClient<NormalizedCacheObject>,
  rerunSwitch: boolean,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_RERUN_SETTINGS_FRAG,
    fragmentName: 'DashboardRerunSettingsFrag'
  };
  let data: DashboardRerunSettingsFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardRerunSettingsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no rerun setting fragment found with id: ${id}`);
  }
  if (data.private !== null && data.private.rerunSetting !== undefined) {
    data.private.rerunSetting.enabled = rerunSwitch;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeAddRerunCache = (
  client: ApolloClient<NormalizedCacheObject>,
  permlink: string,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_RERUN_SETTINGS_FRAG,
    fragmentName: 'DashboardRerunSettingsFrag'
  };
  let data: DashboardRerunSettingsFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardRerunSettingsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no rerun setting fragment found with id: ${id}`);
  }
  const addReplay: DashboardRerunSettingsFrag.Presets = {
    __typename: 'RerunPreset',
    pastbroadcast: {
      __typename: 'PastBroadcast',
      permlink
    }
  };
  if (data.private !== null && data.private.rerunSetting !== undefined) {
    data.private.rerunSetting.presets.push(addReplay);
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeRemoveRerunCache = (
  client: ApolloClient<NormalizedCacheObject>,
  permlink: string,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_RERUN_SETTINGS_FRAG,
    fragmentName: 'DashboardRerunSettingsFrag'
  };
  let data: DashboardRerunSettingsFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardRerunSettingsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no rerun setting fragment found with id: ${id}`);
  }
  if (data.private !== null && data.private.rerunSetting !== undefined) {
    for (const [index, item] of data.private.rerunSetting.presets.entries()) {
      if (
        item.pastbroadcast !== null &&
        item.pastbroadcast.permlink === permlink
      ) {
        data.private.rerunSetting.presets.splice(index, 1);
      }
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeHostCache = (
  client: ApolloClient<NormalizedCacheObject>,
  hostingLivestream: StreamHostSet.Livestream | null,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_HOST_SETTING_FRAG,
    fragmentName: 'DashboardHostSettingFrag'
  };
  let data: DashboardHostSettingFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardHostSettingFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no host setting fragment found with id: ${id}`);
  }
  if (data.hostingLivestream !== undefined) {
    data.hostingLivestream = hostingLivestream;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeStreamTemplateCache = (
  client: ApolloClient<NormalizedCacheObject>,
  streamTemplate: DashboardStreamSettingsFrag.StreamTemplate,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_STREAM_SETTINGS,
    fragmentName: 'DashboardStreamSettingsFrag'
  };
  let data: DashboardStreamSettingsFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardStreamSettingsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(
      `no stream template fragment found with id: ${id}`
    );
  }
  if (data.private !== null && data.private.streamTemplate !== undefined) {
    data.private.streamTemplate = streamTemplate;
    client.writeFragment({
      ...param,
      data
    });
  }
};

export const writeFilterWordCache = (
  client: ApolloClient<NormalizedCacheObject>,
  word: string,
  id: string,
  adding: boolean
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_STREAM_SETTINGS,
    fragmentName: 'DashboardStreamSettingsFrag'
  };
  let data: DashboardStreamSettingsFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardStreamSettingsFrag.Fragment>(param);
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no filter word fragment found with id: ${id}`);
  }
  if (data.private !== null && data.private.filterWords !== undefined) {
    if (adding) {
      data.private.filterWords.push(word);
    } else {
      data.private.filterWords = data.private.filterWords.filter(w => {
        return w !== word;
      });
    }
    client.writeFragment({
      ...param,
      data
    });
  }
};

// export const writeReceiverAddressCache = (
//   client: ApolloClient<NormalizedCacheObject>,
//   address:string,
//   id: string
// ): InternalError | undefined => {
//   const param = {
//     id,
//     fragment: DASHBOARD_STREAM_SETTINGS,
//     fragmentName: 'DashboardStreamSettingsFrag'
//   };
//   let data: DashboardStreamSettingsFrag.Fragment | null;
//   try {
//     data = client.readFragment<DashboardStreamSettingsFrag.Fragment>(param);
//   } catch (err) {
//     return new InternalError(err);
//   }
//   if (data === null) {
//     return new InternalError(`no filter word fragment found with id: ${id}`);
//   }
//   if (data.private !== null && data.private.bttAddress.receiverAddress !== undefined) {
//     data.private.bttAddress.receiverAddress=address
//     client.writeFragment({
//       ...param,
//       data
//     });
//   }
// };

export const writeOfflineImageCache = (
  client: ApolloClient<NormalizedCacheObject>,
  offlineImage: string,
  id: string
): InternalError | undefined => {
  const param = {
    id,
    fragment: DASHBOARD_OFFLINE_IMAGE_SETTINGS,
    fragmentName: 'DashboardOfflineImageSettingFrag'
  };
  let data: DashboardOfflineImageSettingFrag.Fragment | null;
  try {
    data = client.readFragment<DashboardOfflineImageSettingFrag.Fragment>(
      param
    );
  } catch (err) {
    return new InternalError(err);
  }
  if (data === null) {
    return new InternalError(`no offline image fragment found with id: ${id}`);
  }
  if (data.offlineImage !== undefined) {
    data.offlineImage = offlineImage;
    client.writeFragment({
      ...param,
      data
    });
  }
};
