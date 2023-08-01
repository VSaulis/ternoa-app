import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as yup from 'yup';
import { Locales } from './constants';

import enDictionary from './dictionaries/en.json';
import yupDictionary from './dictionaries/yupDictionary';

const resources = {
  [Locales.en]: enDictionary,
};

export const setupTranslations = () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: Locales.en,
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v3',
    defaultNS: 'app',
  });

  yup.setLocale(yupDictionary(i18n.t));
  i18n.on('languageChanged', () => yup.setLocale(yupDictionary(i18n.t)));
};
