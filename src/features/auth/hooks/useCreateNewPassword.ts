import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { useContext } from 'react';
import { CreateNewPasswordFormData } from '../types';
import { WalletCreationContext } from '../providers/WalletCreationProvider';

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

const useCreateNewPasswordForm = (onComplete: () => void) => {
  const { t } = useValidationsTranslations();
  const { setPassword } = useContext(WalletCreationContext);

  const { control, handleSubmit, reset } = useForm<CreateNewPasswordFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
  });

  const onSubmit = (formData: CreateNewPasswordFormData) => {
    setPassword(formData.newPassword);
    reset();
    onComplete();
  };

  return { control, handleSubmit, onSubmit };
};

export default useCreateNewPasswordForm;
