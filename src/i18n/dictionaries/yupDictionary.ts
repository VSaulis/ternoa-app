import { TFunction } from 'i18next';
import { LocaleObject } from 'yup';

const yupDictionary = (t: TFunction): LocaleObject => {
  return {
    mixed: {
      default: t('validations.field_is_invalid') as string,
      required: t('validations.field_is_required') as string,
      notType: t('validations.field_is_invalid') as string,
      oneOf: t('validations.passwords_must_match') as string,
    },
    string: {
      email: t('validations.email_is_invalid') as string,
    },
  };
};

export default yupDictionary;
