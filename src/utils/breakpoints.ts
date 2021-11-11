const V_PX = 256; // video width
const V_H_PX = 144; // video height
const P_PX = 42; // lr padding
const M_PX = 22; // margin in between

// video snaps height and width
export const SUGGESTED_VIDEO_WIDTH = V_PX;
export const SUGGESTED_VIDEO_HEIGHT = V_H_PX;

export const SUGGESTED_PADDING = P_PX;
export const SUGGESTED_MARGIN = M_PX;

export const FAM_CHAT_WIDTH = 71;

export enum Mq {
  LinoXs,
  LinoSm,
  LinoMd,
  LinoLg,
  LinoXl
}

const LINO_XS_WIDTH = 2 * P_PX + M_PX + 2 * V_PX;
const LINO_SM_WIDTH = 2 * P_PX + 2 * M_PX + 3 * V_PX;
const LINO_MD_WIDTH = 2 * P_PX + 3 * M_PX + 4 * V_PX;
const LINO_LG_WIDTH = 2 * P_PX + 4 * M_PX + 5 * V_PX;
const LINO_XL_WIDTH = Infinity;

const breakpointsMap = new Map<Mq, number>([
  [Mq.LinoXs, LINO_XS_WIDTH],
  [Mq.LinoSm, LINO_SM_WIDTH],
  [Mq.LinoMd, LINO_MD_WIDTH],
  [Mq.LinoLg, LINO_LG_WIDTH],
  [Mq.LinoXl, LINO_XL_WIDTH]
]);

const breakpoints = Array.from(breakpointsMap);

export const getMqByWidth = (width: number): Mq => {
  for (const i of breakpoints) {
    if (width < i[1]) {
      return i[0];
    }
  }
  return Mq.LinoXl;
};

// export const mqToMinWidth = (mq: Mq): number => {
//   if (mq === Mq.LinoXl) {
//     return LINO_LG_WIDTH;
//   }
//   const result = breakpointsMap.get(mq);
//   if (result === undefined) {
//     // TODO(@ryan): Error handling here, maybe not throw since no one is catching anyway
//     return LINO_LG_WIDTH;
//   }
//   return result;
// };

export const getViewpointWidth = (): number => {
  if (process.client) {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    return w.innerWidth || e.clientWidth || g.clientWidth;
  } else {
    return 1920;
  }
};
