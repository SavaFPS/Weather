import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, languagesConfig } from 'config';
import type { i18n } from 'i18next';
import type { LanguageKey } from 'config';

const createI18n = (lng?: LanguageKey): i18n => {
  const i18n = createInstance().use(initReactI18next);

  void i18n.init({
    lng,
    fallbackLng: defaultLanguage,
  });

  return i18n;
};

export default createI18n(languagesConfig.en);
