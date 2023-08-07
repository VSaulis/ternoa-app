import { useMutation } from '@tanstack/react-query';
import { writeSecureAsync } from '@utils/keychain';
import { TernoaClient } from '@api/clients';
import { useAppDispatch } from '@core/redux-store/store';
import { writeAddress } from '@features/wallets/storage';
import { addAddress } from '@features/wallets/slice';
import { CreateWalletData } from '../types';

const useCreateWallet = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync, isLoading: isSubmitting } = useMutation(
    async (formData: CreateWalletData) => {
      const { seed, password } = formData;
      const keyring = await TernoaClient.createAccount(seed, password);
      await writeSecureAsync(keyring.address, 'publicKey', keyring.publicKey);
      await writeAddress(keyring.address);
      dispatch(addAddress(keyring.address));
    },
  );

  const createWallet = async (formData: CreateWalletData) => {
    await mutateAsync(formData);
  };

  return { isSubmitting, createWallet };
};

export default useCreateWallet;
