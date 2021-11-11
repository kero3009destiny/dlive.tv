export class LanguageItem {
  public id: string;
  public language: string;
  public code: string;
  public constructor(id: string, language: string, code: string) {
    this.id = id;
    this.language = language;
    this.code = code;
  }
}

export const EN = new LanguageItem('1', 'English', 'en');

export const TR = new LanguageItem('5', 'Turkish(Türkçe)', 'tr');

export const ES = new LanguageItem('2', 'Spanish (Español)', 'es');

export const PT = new LanguageItem('6', 'Portuguese (Português)', 'pt');

export const LANGUAGE_ITEMS = [EN, TR, ES, PT];
