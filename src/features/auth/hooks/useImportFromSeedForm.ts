import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { importWalletFromSeed } from '@utils/api';
import { ImportFromSeedFormData } from '../types';

const initialFormData: ImportFromSeedFormData = {
  seedPhrase: '',
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    seedPhrase: yup.string().required(t('Field is required')),
    newPassword: yup
      .string()
      .min(8, t('Must be at least {{count}} characters', { count: 8 }))
      .required(t('Field is required')),
    isFaceIdEnabled: yup.boolean().required(),
    confirmNewPassword: yup
      .string()
      .required(t('Field is required'))
      .oneOf([yup.ref('newPassword')], t('Passwords must match')),
  });
};

const useImportFromSeedForm = () => {
  const { t } = useValidationsTranslations();

  const onSubmit = (formData: ImportFromSeedFormData) => {
    importWalletFromSeed(formData.seedPhrase, formData.newPassword);
  };

  const { control, handleSubmit } = useForm<ImportFromSeedFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
  });

  return { control, handleSubmit, onSubmit };
};

export default useImportFromSeedForm;
