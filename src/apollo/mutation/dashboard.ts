import STREAM_TEMPLATE_SET from '@/graphql/mutations/StreamTemplateSet.graphql';
import STREAM_KEY_GENERATE from '@/graphql/mutations/StreamKeyGenerate.graphql';
import STREAM_HOST_SET from '@/graphql/mutations/StreamHostSet.graphql';
import STREAM_HOST_DELETE from '@/graphql/mutations/StreamHostDelete.graphql';
import FILTER_WORD_ADD from '@/graphql/mutations/FilterWordAdd.graphql';
import TRON_RECEIVER_ADDRESS_SET from '@/graphql/mutations/TronReceiverAddressSet.graphql';
import TRON_SENDER_ADDRESS_SET from '@/graphql/mutations/TronSenderAddressSet.graphql';
import FILTER_WORD_DELETE from '@/graphql/mutations/FilterWordDelete.graphql';
import USER_UPDATE_OFFLINE_IMAGE from '@/graphql/mutations/UserUpdateOfflineImage.graphql';
import RERUN_ENABLE_SWITCH from '@/graphql/mutations/RerunEnableSwitch.graphql';
import RERUN_DISABLE_SWITCH from '@/graphql/mutations/RerunDisableSwitch.graphql';
import RERUN_SET_ADD from '@/graphql/mutations/RerunSetAdd.graphql';
import RERUN_SET_REMOVE from '@/graphql/mutations/RerunSetRemove.graphql';
import {
  SetStreamTemplate,
  GenerateStreamKey,
  StreamHostSet,
  StreamHostDelete,
  AddFilterWord,
  TronReceiverAddressSet,
  TronSenderAddressSet,
  DeleteFilterWord,
  UserUpdateOfflineImage,
  RerunEnableSwitch,
  RerunDisableSwitch,
  RerunSetAdd,
  RerunSetRemove
} from '@/graphql/types';
import SnackbarMixin from '@/mixins/SnackbarMixin';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import {
  writeOfflineImageCache,
  writeRerunCache,
  writeAddRerunCache,
  writeRemoveRerunCache
} from '../cache/dashboard';
import { setSenderAddress, setReceiverAddress } from '../cache/me';
export const streamTemplateSet = async (
  vue: SnackbarMixin,
  variables: SetStreamTemplate.Variables
): Promise<SetStreamTemplate.StreamTemplateSet | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<SetStreamTemplate.Mutation>({
      mutation: STREAM_TEMPLATE_SET,
      variables
    });
    const resp = data.streamTemplateSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.SaveDetailsSuccess');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const streamKeyGenerate = async (
  vue: SnackbarMixin,
  recaptchaToken: string
): Promise<GenerateStreamKey.StreamKeyGenerate | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<GenerateStreamKey.Mutation>({
      mutation: STREAM_KEY_GENERATE,
      variables: {
        recaptchaToken
      }
    });
    const resp = data.streamKeyGenerate;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboard.StreamKeyGenerated');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const hostSet = async (
  vue: SnackbarMixin,
  variables: StreamHostSet.Variables
): Promise<StreamHostSet.HostSet | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<StreamHostSet.Mutation>({
      mutation: STREAM_HOST_SET,
      variables
    });
    const resp = data.hostSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.HostSuccessful');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const hostDelete = async (
  vue: SnackbarMixin,
  variables: StreamHostDelete.Variables
): Promise<StreamHostDelete.HostDelete | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<StreamHostDelete.Mutation>({
      mutation: STREAM_HOST_DELETE,
      variables
    });
    const resp = data.hostDelete;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.UnhostSuccessful');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const filterWordAdd = async (
  vue: SnackbarMixin,
  variables: AddFilterWord.Variables
): Promise<AddFilterWord.FilterWordAdd | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<AddFilterWord.Mutation>({
      mutation: FILTER_WORD_ADD,
      variables
    });
    const resp = data.filterWordAdd;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.BadWordAdded');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const filterWordDelete = async (
  vue: SnackbarMixin,
  variables: DeleteFilterWord.Variables
): Promise<DeleteFilterWord.FilterWordDelete | undefined> => {
  try {
    const { data } = await vue.$apollo.mutate<DeleteFilterWord.Mutation>({
      mutation: FILTER_WORD_DELETE,
      variables
    });
    const resp = data.filterWordDelete;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.BadWordDeleted');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const userUpdateOfflineImage = async (
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
  offlineImage: string,
  id: string
): Promise<void> => {
  const variables: UserUpdateOfflineImage.Variables = {
    offlineImage
  };
  const { data } = await vue.$apollo.mutate<UserUpdateOfflineImage.Mutation>({
    mutation: USER_UPDATE_OFFLINE_IMAGE,
    variables
  });
  const resp = data.userUpdateOfflineImage;
  vue.$handleError(resp.err, USER_UPDATE_OFFLINE_IMAGE, variables);
  const err = writeOfflineImageCache(
    vue.$apollo.provider.defaultClient,
    offlineImage,
    id
  );
  if (err !== undefined) {
    throw err;
  }
  vue.$success('dashboard.UploadOfflineImageSuccess');
};

export const enableRerun = async (
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
  id: string
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<RerunEnableSwitch.Mutation>({
    mutation: RERUN_ENABLE_SWITCH
  });
  const resp = data.rerunEnable;
  vue.$handleError(resp.err, RERUN_ENABLE_SWITCH);
  writeRerunCache(vue.$apollo.provider.defaultClient, true, id);
  vue.$success('dashboard.RerunStart');
};

export const disableRerun = async (
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
  id: string
): Promise<void> => {
  const { data } = await vue.$apollo.mutate<RerunDisableSwitch.Mutation>({
    mutation: RERUN_DISABLE_SWITCH
  });
  const resp = data.rerunDisable;
  vue.$handleError(resp.err, RERUN_DISABLE_SWITCH);
  writeRerunCache(vue.$apollo.provider.defaultClient, false, id);
  vue.$success('dashboard.RerunEnd');
};

export const addRerunReplay = async (
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
  id: string,
  permlink: string
): Promise<void> => {
  const variables: RerunSetAdd.Variables = {
    permlink
  };
  const { data } = await vue.$apollo.mutate<RerunSetAdd.Mutation>({
    mutation: RERUN_SET_ADD,
    variables
  });
  const resp = data.rerunPresetAdd;
  vue.$handleError(resp.err, RERUN_SET_ADD);
  writeAddRerunCache(vue.$apollo.provider.defaultClient, permlink, id);
  vue.$success('dashboard.AddReplaySuccess');
};

export const removeRerunReplay = async (
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
  id: string,
  permlink: string
): Promise<void> => {
  const variables: RerunSetRemove.Variables = {
    permlink
  };
  const { data } = await vue.$apollo.mutate<RerunSetRemove.Mutation>({
    mutation: RERUN_SET_REMOVE,
    variables
  });
  const resp = data.rerunPresetRemove;
  vue.$handleError(resp.err, RERUN_SET_REMOVE);
  writeRemoveRerunCache(vue.$apollo.provider.defaultClient, permlink, id);
  vue.$success('dashboard.RemoveReplaySuccess');
};

export const setTronReceiverAddress = async (
  vue: SnackbarMixin,
  address: string
): Promise<TronReceiverAddressSet.TronReceiverAddressSet | undefined> => {
  try {
    const variables: TronReceiverAddressSet.Variables = {
      address
    };
    const { data } = await vue.$apollo.mutate<TronReceiverAddressSet.Mutation>({
      mutation: TRON_RECEIVER_ADDRESS_SET,
      variables
    });
    const resp = data.tronReceiverAddressSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.TronAddressSet');
    setReceiverAddress(vue.$apollo.provider.defaultClient, address);
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const setTronSenderAddress = async (
  vue: SnackbarMixin,
  address: string
): Promise<TronSenderAddressSet.TronSenderAddressSet | undefined> => {
  try {
    const variables: TronSenderAddressSet.Variables = {
      address
    };
    const { data } = await vue.$apollo.mutate<TronSenderAddressSet.Mutation>({
      mutation: TRON_SENDER_ADDRESS_SET,
      variables
    });
    const resp = data.tronSenderAddressSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.TronAddressSet');
    setSenderAddress(vue.$apollo.provider.defaultClient, address);
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};
