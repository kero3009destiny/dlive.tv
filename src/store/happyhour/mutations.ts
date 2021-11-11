import { MutationTree } from 'vuex';
import { HappyhourState } from './types';
// import { GlobalInformation } from '@/graphql/types';
import { HappyHourTickets } from '@/graphql/types';

export const mutations: MutationTree<HappyhourState> = {
  setHappyHourPopup(state, status: 0 | 1 | false) {
    state.happyhour.happyHourPopup = status;
  },
  setEventInfo(state, eventInfo: null) {
    state.happyhour.eventInfo = eventInfo;
  },
  setEventStatus(state, status: 'no_happyhour' | 'prestart' | 'start' | 'end') {
    state.happyhour.eventStatus = status;
  },
  setTickets(state, tickets: HappyHourTickets.MyTickets[]) {
    state.happyhour.tickets = tickets;
  }
};
