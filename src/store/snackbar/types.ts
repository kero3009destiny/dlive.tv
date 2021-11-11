export enum SnackbarStatus {
  ERROR = 'red',
  SUCCESS = 'green'
}

export interface Snackbar {
  state: SnackbarStatus;
  text: string;
}

export interface SnackbarState {
  snackbar: Snackbar | null;
}
