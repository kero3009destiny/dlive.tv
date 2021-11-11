import Vue from 'vue';
import VueI18n from 'vue-i18n';

interface LocaleLang {
  // eslint-disable-next-line
  [key: string]: any;
}

Vue.use(VueI18n);

// let i18n: VueI18n;

// function loadLocaleMessages(): LocaleMessages {
//   const locales = require.context(
//     './locales',
//     true,
//     /[A-Za-z0-9-_,\s]+\.json$/i
//   );
//   const messages: LocaleMessages = {};
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i);
//     if (matched && matched.length > 1) {
//       const locale = matched[1];
//       messages[locale] = locales(key);
//     }
//   });
//   return messages;
// }

const languageMap = new Map<string, string>([
  ['TR', 'tr-TR'],
  ['EN', 'en'],
  ['ES', 'es-ES'],
  ['PT', 'pt-BR']
]);

function setI18nLanguage(lang: string, i18n: VueI18n): string {
  i18n.locale = lang;
  // axios.defaults.headers.common['Accept-Language'] = lang;
  // document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

const loadedLanguages: string[] = [];

export function loadLanguageAsync(
  lang: string,
  i18n: VueI18n
): Promise<string> {
  const localLang = languageMap.get(lang.toUpperCase());
  if (!localLang) {
    return Promise.reject();
  }
  if (i18n.locale !== localLang) {
    if (!loadedLanguages.includes(localLang)) {
      return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${localLang}.json`).then(
        msgs => {
          i18n.setLocaleMessage(localLang, msgs);
          loadedLanguages.push(localLang);
          return setI18nLanguage(localLang, i18n);
        }
      );
    }
    return Promise.resolve(setI18nLanguage(localLang, i18n));
  }
  return Promise.resolve(localLang);
}

export async function createI18n(locale: string): Promise<VueI18n> {
  const localeFromMap = languageMap.get(locale.toUpperCase()) || 'en';
  const localeMessages: LocaleLang = {};
  const data = await import(/* webpackChunkName: "lang-[request]" */ `@/lang/${localeFromMap}.json`);
  localeMessages[localeFromMap] = data;
  // Must include en for fallbackLocale
  localeMessages.en = await import(/* webpackChunkName: "lang-[request]" */ '@/lang/en.json');
  const i18n = new VueI18n({
    silentTranslationWarn: true,
    locale: localeFromMap,
    fallbackLocale: 'en',
    messages: localeMessages
  });
  return i18n;
}
