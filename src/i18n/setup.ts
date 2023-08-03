import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Locale, Namespace } from './types';

import enAuthDictionary from './dictionaries/en/auth.json';
import enWalktroughDictionary from './dictionaries/en/walktrough.json';
import enNavigationDictionary from './dictionaries/en/navigation.json';
import enWalletsDictionary from './dictionaries/en/wallets.json';
import enCommonDictionary from './dictionaries/en/common.json';
import enValidationsDictionary from './dictionaries/en/validations.json';

const resources: Record<Locale, Record<Namespace, object>> = {
  en: {
    auth: enAuthDictionary,
    walktrough: enWalktroughDictionary,
    navigation: enNavigationDictionary,
    wallets: enWalletsDictionary,
    common: enCommonDictionary,
    validations: enValidationsDictionary,
  },
};

const ns: Namespace[] = [
  'auth',
  'walktrough',
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
