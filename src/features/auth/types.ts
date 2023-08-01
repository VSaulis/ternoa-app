export interface ImportFromSeedFormData {
  seedPhrase: string;
  newPassword: string;
  confirmNewPassword: string;
  isFaceIdEnabled: boolean;
}

export interface CreateNewPasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
  isFaceIdEnabled: boolean;
  isAgreementChecked: boolean;
}
