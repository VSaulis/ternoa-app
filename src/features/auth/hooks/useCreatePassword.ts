import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { getAccountSchema } from '@features/auth/constants';
import { CreatePasswordFormData } from '../types';

const initialFormData: CreatePasswordFormData = {
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
  isAgreementChecked: false,
};

const getSchema = (t: TFunction) => {
  return getAccountSchema(t).concat(
    yup.object().shape({
      isAgreementChecked: yup
        .boolean()
        .required(t('Field is required'))
        .oneOf(
          [true],
          t('Must confirm that DeGe cannot recover password for you'),
        ),
    }),
  );
};

const useCreateNewPasswordForm = (onComplete: (password: string) => void) => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit } = useForm<CreatePasswordFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
  });

  const onSubmit = (formData: CreatePasswordFormData) => {
    onComplete(formData.newPassword);
  };

  return { control, handleSubmit, onSubmit };
};

export default useCreateNewPasswordForm;
