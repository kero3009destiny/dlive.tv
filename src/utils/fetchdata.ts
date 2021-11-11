export const fetchMoreLoading = ($state: any, f: () => Promise<boolean>) => {
  f().then((rst: boolean) => {
    if (rst) {
      setTimeout(() => {
        $state.loaded();
      }, 500);
    } else {
      $state.loaded();
      $state.complete();
    }
  });
};
