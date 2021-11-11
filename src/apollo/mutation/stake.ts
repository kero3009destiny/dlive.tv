import PARTNER_BTT_ADDRESS_SET from '@/graphql/mutations/PartnerBTTAddressSet.graphql';
import { PartnerBttAddressSet } from '@/graphql/types';
import SnackbarMixin from '@/mixins/SnackbarMixin';
import { setPartnerBttAddressCache } from '../cache/me';

export const setPartnerBttAddress = async (
  vue: SnackbarMixin,
  address: string
): Promise<PartnerBttAddressSet.PartnerBttAddressSet | undefined> => {
  try {
    const variables: PartnerBttAddressSet.Variables = {
      address
    };
    const { data } = await vue.$apollo.mutate<PartnerBttAddressSet.Mutation>({
      mutation: PARTNER_BTT_ADDRESS_SET,
      variables
    });
    const resp = data.partnerBTTAddressSet;
    if (resp.err !== null) {
      vue.$errCode(resp.err.code);
      return;
    }
    vue.$success('dashboardLivestreamSettings.TronAddressSet');
    setPartnerBttAddressCache(vue.$apollo.provider.defaultClient, address);
    return resp;
  } catch (err) {
    // TODO(@ryan): error handling
  }
};
