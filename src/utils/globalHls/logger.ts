const ENABLE_HLS_DEBUG = false;

class Logger {
  private debug: boolean = true;
  constructor(d: boolean) {
    this.debug = d;
    if (process.client) {
      const flag = localStorage.getItem('ENABLE_HLS_DEBUG');
      if (flag && flag === 'yes') {
        this.debug = true;
      }
    }
  }
  public info(...x: any[]) {
    if (this.debug) {
      console.info(...x);
    } else {
      // console.info(x);
    }
  }
  public trace(...x: any[]) {
    if (this.debug) {
      console.info(...x);
    } else {
      // console.info(x);
    }
  }
}
export const logger = new Logger(ENABLE_HLS_DEBUG);
