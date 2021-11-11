export class InternalError extends Error {
  public constructor(msg: string) {
    super(msg);
    this.message = msg;
    this.name = 'InternalError';
  }
}
