export interface NewPasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
  isFaceIdEnabled: boolean;
}

export interface ImportFromSeedFormData extends NewPasswordFormData {
  seed: string;
}

export interface CreateNewPasswordFormData extends NewPasswordFormData {
  isAgreementChecked: boolean;
}
