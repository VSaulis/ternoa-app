export interface AccountFormData {
  newPassword: string;
  confirmNewPassword: string;
  isFaceIdEnabled: boolean;
}

export interface ImportFromSeedFormData extends AccountFormData {
  seed: string;
}

export interface CreatePasswordFormData extends AccountFormData {
  isAgreementChecked: boolean;
}

export interface CreateWalletData {
  seed: string;
  password: string;
}
