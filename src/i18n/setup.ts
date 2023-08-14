import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Locale, Namespace } from './types';

import enDictionary from './dictionaries/en.json';

const resources: Record<Locale, Record<Namespace, object>> = {
  en: enDictionary,
};

const ns: Namespace[] = [
  'auth',
  'walkthrough',
  'navigation',
  'wallets',
  'common',
  'validations',
];

export const setupTranslations = () => {
  i18n.use(initReactI18next).init({
    resources,
    ns,
    lng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v3',
  });
};
