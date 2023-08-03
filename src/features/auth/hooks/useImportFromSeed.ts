import { importWalletFromSeed } from '@api/clients/auth';
import { ImportFromSeedFormData } from '../types';
import { mapImportFromSeedRequest } from '../map';

const useImportFromSeed = () => {
  const importFromSeed = (formData: ImportFromSeedFormData) => {
    const request = mapImportFromSeedRequest(formData);
    return importWalletFromSeed(request);
  };

  return { importFromSeed };
};

export default useImportFromSeed;
