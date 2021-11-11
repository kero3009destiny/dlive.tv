export const optionsValidator = <T>(args: T[]): ((val: T) => boolean) => {
  return (val: T) => args.indexOf(val) !== -1;
};
