import STREAM_DONATE from '@/graphql/mutations/StreamDonate.graphql';
import Vue from 'vue';
import { DocumentNode } from 'graphql';
import { StreamDonate, DonateInput, VDonationGiftFrag } from '@/graphql/types';
import { Gift } from '@/models/gift';
import { dataPoint } from '@/plugins/dataCollection';
import { minervaEvent } from '@/plugins/minerva';
import { DonateLivestream } from '@/plugins/types';

export const streamDonate = async (
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
  input: DonateInput,
  gift: Gift,
  post: VDonationGiftFrag.Fragment
): Promise<StreamDonate.Donate> => {
  const { data } = await vue.$apollo.mutate<StreamDonate.Mutation>({
    mutation: STREAM_DONATE,
    variables: { input }
  });
  const resp = data.donate;
  vue.$handleError(resp.err, STREAM_DONATE, input);
  vue.$success(vue.$t('VDonationGiftBtn.YouJustDonate', {
    label: vue.$t(gift.label),
    lino: gift.lino
  }) as string);
  const trackingInfo = vue.$store.getters['userMeta/trackingInfo'];
  dataPoint('donate', {
    eventCategory: trackingInfo.postStatus,
    eventLabel: post.creator.username + '&' + input.permlink,
    eventValue: parseInt(gift.lino, 10)
  });
  const eventLabels: DonateLivestream.EventLabels = {
    id: input.permlink,
    category: post.category.title,
    language: post.language.language,
    value: gift.lino
  };
  minervaEvent(DonateLivestream.eventType, eventLabels);
  return resp;
};
