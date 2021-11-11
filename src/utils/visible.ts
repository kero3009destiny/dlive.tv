interface Ifvisiblejs {
  now(): boolean;
}
export class VisibleTimer {
  private counter: number = 0;
  private every: number;
  private afterInvisible: () => void;
  private onVisible: () => void;
  private duration: number;
  private intervalId: number = 0;
  private isVisible: boolean = true;
  private ifvisible: any;

  //            after @p duration, afterInvisible()
  // Visible    -----------------------------------------> Invisible
  //            on visible.
  // Invisible  -----------------------------------------> Visible
  // after being invisible for @p duration ms, @p afterInvisible will be called.
  // after @p afterInvisible is triggered, if visible again, @p onVisible will be fired.
  // optional: @p every, the accuracy of timer.
  // return a id that you need to use to call destroy
  public constructor(
    duration: number,
    afterInvisible: () => void,
    onVisible: () => void,
    every: number = 500
  ) {
    this.duration = duration;
    this.afterInvisible = afterInvisible;
    this.onVisible = onVisible;
    this.every = every;
    this.start();
  }

  public async start(): Promise<void> {
    const ifvisible: Ifvisiblejs = (await import('ifvisible.js')) as any;
    if (window) {
      this.intervalId = window.setInterval(() => {
        if (this.isVisible) {
          if (ifvisible.now()) {
            this.counter = 0;
          } else {
            this.counter++;
          }
          if (this.counter >= this.duration / this.every) {
            this.isVisible = false;
            this.afterInvisible();
          }
        } else {
          if (ifvisible.now()) {
            this.counter = 0;
            this.isVisible = true;
            this.onVisible();
          }
        }
      }, this.every);
    }
  }

  public stop(): void {
    if (window && this.intervalId !== 0) {
      window.clearInterval(this.intervalId);
      this.intervalId = 0;
    }
  }

  public reset(): void {
    this.stop();
    this.start();
  }

  public destroy(): void {
    this.stop();
  }
}
