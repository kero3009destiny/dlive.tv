export const mode = (): string | undefined => {
  return process.env.VUE_APP_MODE;
};

export const modeIsCn = (): boolean => {
  return mode() === 'cn';
};
