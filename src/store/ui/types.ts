import { Mq } from '@/utils/breakpoints';

export const DEFAULT_VIEW_POINT_WIDTH = 1920;
export interface UI {
  viewPointWidth: number;
  mq: Mq | null;
  isMobile: boolean;
  theatreMode: boolean;
}

export interface UIState {
  ui: UI;
}
