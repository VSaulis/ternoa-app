import { useContext } from 'react';
import { CreateNewPasswordFormData } from '../types';
import { WalletCreationContext } from '../providers/WalletCreationProvider';

const useCreateNewPassword = (onComplete: () => void) => {
  const { setPassword } = useContext(WalletCreationContext);

  const createNewPassword = (formData: CreateNewPasswordFormData) => {
    setPassword(formData.newPassword);
    onComplete();
  };

  return { createNewPassword };
};

export default useCreateNewPassword;
