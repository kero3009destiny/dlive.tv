import { throttle } from 'throttle-debounce';
import request from '@/utils/request';
import { Report } from './models';

const STREAM_STATS_ENDPOINT = process.env.VUE_APP_STREAM_STATS_URL;

// The default interval for sending a report.
const REPORT_INTERVAL = 30 * 1000;
// Send out first report after at least 5 seconds.
const FIRST_TIME_MIN = 5 * 1000;

// report events to backend.
export class TrackReporter {
  public showDebug: boolean = false;
  public canSend: boolean = false;
  public snapshotFunc: () => Report;
  public report: () => void; // throttled send function.

  constructor(snapshot: () => Report) {
    this.snapshotFunc = snapshot;
    this.report = throttle(REPORT_INTERVAL, () => {
      this.reportAll();
    });
    // if ((process as any).client) {
    window.setTimeout(() => {
      this.canSend = true;
    }, FIRST_TIME_MIN);
    this.showDebug =
      localStorage.getItem('DISPLAY_HLS_REPORT') === 'yes' ? true : false;
    // }
  }

  public reportAll() {
    const report = this.snapshotFunc();
    if (!STREAM_STATS_ENDPOINT || STREAM_STATS_ENDPOINT.length === 0) {
      if (this.showDebug) {
        console.info('HLS report disabled', report);
      }
    } else {
      request
        .post(STREAM_STATS_ENDPOINT, [report])
        .then(res => {
          if (this.showDebug) {
            console.info('HLS report sent', report);
          }
        })
        .catch(err => {
          if (this.showDebug) {
            console.info('HLS report err', err);
          }
        });
    }
  }

  public update() {
    if (this.canSend) {
      this.report();
    }
  }
}
