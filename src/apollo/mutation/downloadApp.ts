import DOWNLOAD_LINK_SEND from '@/graphql/mutations/DownloadLinkSend.graphql';
import { SendDownloadLink } from '@/graphql/types';
import SnackbarMixin from '@/mixins/SnackbarMixin';

export const downloadLinkSend = async (
  vue: SnackbarMixin,
  variables: SendDownloadLink.Variables
) => {
  try {
    const { data } = await vue.$apollo.mutate<SendDownloadLink.Mutation>({
      mutation: DOWNLOAD_LINK_SEND,
      variables
    });
    const resp = data.downloadLinkSend;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('SettingsPhoneVerification.MsgSent');
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};
