export class Tab {
  constructor(
    public label?: string,
    public extraInfo?: number | null,
    public href?: string,
    public iconSrc?: string,
    public iconActiveSrc?: string
  ) {}
}
