export class AboutText {
  public value: string;
  public type: 'text' | 'br' | 'email' | 'url';
  public href: string;
  public constructor(
    value: string,
    type: 'text' | 'br' | 'email' | 'url',
    href: string
  ) {
    this.value = value;
    this.type = type;
    this.href = href;
  }
}
