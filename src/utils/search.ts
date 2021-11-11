export const existsInArr = <T>(array: T[], searchValue: T): boolean => {
  return array.indexOf(searchValue) !== -1;
};

export const existsInStr = (str: string, searchValue: string): boolean => {
  return str.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
};
