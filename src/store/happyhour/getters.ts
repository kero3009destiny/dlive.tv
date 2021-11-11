import { GetterTree } from 'vuex';
import { HappyhourState } from './types';
import { RootState } from '../types';
// import { GlobalInformation } from '@/graphql/types';
import { HappyHourTickets } from '@/graphql/types';
export const getters: GetterTree<HappyhourState, RootState> = {
  happyHourPopup(state): 0 | 1 | false {
    return state.happyhour.happyHourPopup;
  },
  eventInfo(state): null {
    return state.happyhour.eventInfo;
  },
  eventStatus(state): 'no_happyhour' | 'prestart' | 'start' | 'end' {
    return state.happyhour.eventStatus;
  },
  tickets(state): HappyHourTickets.MyTickets[] {
    return state.happyhour.tickets;
  }
};
