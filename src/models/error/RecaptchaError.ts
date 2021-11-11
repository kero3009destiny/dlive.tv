export class RecaptchaError extends Error {
  public constructor() {
    super('recaptcha error');
    this.name = 'RecaptchaError';
  }
}
