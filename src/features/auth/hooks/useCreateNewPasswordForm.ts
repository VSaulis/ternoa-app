import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { CreateNewPasswordFormData } from '../types';

const initialFormData: CreateNewPasswordFormData = {
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
  isAgreementChecked: false,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    newPassword: yup
      .string()
      .min(8, t('Must be at least {{count}} characters', { count: 8 }))
      .required(t('Field is required')),
    isFaceIdEnabled: yup.boolean().required(),
    isAgreementChecked: yup
      .boolean()
      .required(t('Field is required'))
      .oneOf([true]),
    confirmNewPassword: yup
      .string()
      .required(t('Field is required'))
      .oneOf([yup.ref('newPassword')], t('Passwords must match')),
  });
};

const useCreateNewPasswordForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit } = useForm<CreateNewPasswordFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
  });

  return { control, handleSubmit };
};

export default useCreateNewPasswordForm;
