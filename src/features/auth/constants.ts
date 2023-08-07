// @ts-ignore
import { TFunction } from 'i18next';
import * as yup from 'yup';

export const getAccountSchema = (t: TFunction) => {
  return yup.object().shape({
    isFaceIdEnabled: yup.boolean().required(),
    newPassword: yup
      .string()
      .min(8, t('Must be at least {{count}} characters', { count: 8 }))
      .required(t('Field is required')),
    confirmNewPassword: yup
      .string()
      .required(t('Field is required'))
      .oneOf([yup.ref('newPassword')], t('Passwords must match')),
  });
};
