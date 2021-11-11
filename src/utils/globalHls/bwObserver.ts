const BANDWITH_LOCAL_STORAGE_KEY = 'dlive_estbw';

interface History {
  lastN: number[];
  updated: number;
}

// unit: bit/s
export class HlsBWObserver {
  public n: number;
  public getBW: () => number;
  public lastN: number[] = [];
  public updated: number = +Date.now();
  public every: number;
  public intervalId: number = 0;

  // @p getBW, function returns the bandwidth, bit/s.
  // @p n, length of window for median.
  // @p every, take a sample upon @every ms.
  public constructor(getBW: () => number, n: number, every: number) {
    this.getBW = getBW;
    this.n = n;
    this.every = every;
  }

  public loadHistory(): void {
    const dt = localStorage.getItem(BANDWITH_LOCAL_STORAGE_KEY);
    if (dt !== null) {
      const hist = JSON.parse(dt) as History;
      // data within 2 days are okay.
      if (Date.now() - hist.updated <= 2 * 24 * 60 * 60 * 1000) {
        this.lastN = hist.lastN;
      }
    }
  }

  public start(): void {
    if (window) {
      this.intervalId = window.setInterval(() => {
        this.observe();
      }, this.every);
    }
  }

  public destroy(): void {
    if (window && this.intervalId > 0) {
      window.clearInterval(this.intervalId);
    }
  }

  public observe(): void {
    this.updated = +Date.now();
    const bw = this.getBW();
    if (isNaN(bw)) {
      return;
    }
    this.lastN.push(bw);
    if (this.lastN.length > this.n) {
      this.lastN.shift();
    }
    this.save();
  }

  public bandwidth(percentile: number): number {
    const idx = Math.floor(this.n * (1 - percentile / 100.0));
    if (idx > this.lastN.length) {
      return 0;
    }
    return this.lastN.concat().sort()[Math.max(0, idx - 1)];
  }

  public save(): void {
    const dt: History = {
      lastN: this.lastN,
      updated: this.updated
    };
    localStorage.setItem(BANDWITH_LOCAL_STORAGE_KEY, JSON.stringify(dt));
  }
}
