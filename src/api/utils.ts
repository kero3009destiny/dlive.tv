export const progressPercentage = (progressEvent: any) => {
  return Math.round((progressEvent.loaded * 100) / progressEvent.total);
};
