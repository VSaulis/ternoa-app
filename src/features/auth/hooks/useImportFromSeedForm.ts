import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { useMutation } from '@tanstack/react-query';
import { AuthClient } from '@api/clients';
import { ImportFromSeedFormData } from '../types';

const initialFormData: ImportFromSeedFormData = {
  seed: '',
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    seed: yup.string().required(t('Field is required')),
    isFaceIdEnabled: yup.boolean().required(),
    newPassword: yup
      .string()
      .min(8, t('Must be at least {{count}} characters', { count: 8 }))
      .required(t('Field is required')),
    confirmNewPassword: yup
      .string()
      .required(t('Field is required'))
      .oneOf([yup.ref('password')], t('Passwords must match')),
  });
};

const useImportFromSeedForm = () => {
  const { t } = useValidationsTranslations();

  const { mutateAsync, isLoading: isSubmitting } = useMutation(
    (formData: ImportFromSeedFormData) => {
      return AuthClient.importAccount(formData.seed, formData.newPassword);
    },
  );

  const onSubmit = async (formData: ImportFromSeedFormData) => {
    await mutateAsync(formData);
  };

  const { control, handleSubmit } = useForm<ImportFromSeedFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
  });

  return { control, handleSubmit, onSubmit, isSubmitting };
};

export default useImportFromSeedForm;
