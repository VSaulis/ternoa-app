import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
// @ts-ignore
import { TFunction } from 'i18next';
import { useMutation } from '@tanstack/react-query';
import { writeSecureAsync } from '@utils/keychain';
import { TernoaClient } from '@api/clients';
import { getAccountSchema } from '@features/auth/constants';
import { useAppDispatch } from '@core/redux-store/store';
import { writeAddress } from '@features/wallets/storage';
import { addAddress } from '@features/wallets/slice';
import { ImportFromSeedFormData } from '../types';

const initialFormData: ImportFromSeedFormData = {
  seed: '',
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: false,
};

const getSchema = (t: TFunction) => {
  return getAccountSchema(t).concat(
    yup.object().shape({
      seed: yup.string().required(t('Field is required')),
    }),
  );
};

const useImportFromSeedForm = () => {
  const { t } = useValidationsTranslations();
  const dispatch = useAppDispatch();

  const { mutateAsync, isLoading: isSubmitting } = useMutation(
    async (formData: ImportFromSeedFormData) => {
      const { seed, newPassword } = formData;
      const keyring = await TernoaClient.importAccount(seed, newPassword);
      await writeSecureAsync(keyring.address, 'publicKey', keyring.publicKey);
      await writeAddress(keyring.address);
      dispatch(addAddress(keyring.address));
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
