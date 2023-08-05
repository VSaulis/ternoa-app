import React, { FC } from 'react';
import { ImportFromSeedForm } from '../components';
import { useImportFromSeed } from '../hooks';

const ImportWallet: FC = () => {
  const { control, handleSubmit, onSubmit, isSubmitting } = useImportFromSeed();

  return (
    <ImportFromSeedForm
      isSubmitting={isSubmitting}
      control={control}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default ImportWallet;
