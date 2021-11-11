import { RootState } from '@/store/types';
import { Store } from 'vuex';
import { IPAPI } from '@/api/ip';

export const getIP = async (store: Store<RootState>): Promise<IPAPI> => {
  return await (store.dispatch('userMeta/fetchIpStats') as Promise<IPAPI>);
};

export const ipRegexExpression = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
