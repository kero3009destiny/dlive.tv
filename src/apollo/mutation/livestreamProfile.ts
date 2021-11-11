import VIDEO_DELETE from '@/graphql/mutations/VideoDelete.graphql';
import PASTBROADCAST_DELETE from '@/graphql/mutations/PastbroadcastDelete.graphql';
import USER_UPDATE_ABOUT from '@/graphql/mutations/UserUpdateAbout.graphql';
import {
  DeleteVideo,
  DeletePastbroadcast,
  UserUpdateAbout
} from '@/graphql/types';
import SnackbarMixin from '@/mixins/SnackbarMixin';

export const videoDelete = async (
  vue: SnackbarMixin,
  variables: DeleteVideo.Variables
) => {
  try {
    const { data } = await vue.$apollo.mutate<DeleteVideo.Mutation>({
      mutation: VIDEO_DELETE,
      variables
    });
    const resp = data.videoDelete;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('LiveStreamProfilePostSnap.DeleteVideoSuccess');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const pastbroadcastDelete = async (
  vue: SnackbarMixin,
  variables: DeletePastbroadcast.Variables
) => {
  try {
    const { data } = await vue.$apollo.mutate<DeletePastbroadcast.Mutation>({
      mutation: PASTBROADCAST_DELETE,
      variables
    });
    const resp = data.pastbroadcastDelete;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('LiveStreamProfilePostSnap.DeletePastbroadcastSuccess');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};

export const userUpdateAbout = async (vue: SnackbarMixin, about: string) => {
  try {
    const { data } = await vue.$apollo.mutate<UserUpdateAbout.Mutation>({
      mutation: USER_UPDATE_ABOUT,
      variables: {
        about
      }
    });
    const resp = data.userUpdate;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('LiveStreamProfile.AboutUpdated');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};
