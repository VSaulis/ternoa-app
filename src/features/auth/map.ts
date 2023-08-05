import { ImportFromSeedRequest } from '@api/clients/auth/types';
import { ImportFromSeedFormData } from './types';

export const mapImportFromSeedRequest = (
  formData: ImportFromSeedFormData,
): ImportFromSeedRequest => ({
  password: formData.password,
  seedPhrase: formData.seed,
});
