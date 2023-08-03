import React, { FC } from 'react';
import { ImportFromSeedForm } from '../components';
import { useImportFromSeed, useImportFromSeedForm } from '../hooks';

const ImportFromSeed: FC = () => {
  const { importFromSeed } = useImportFromSeed();
  const { control, handleSubmit } = useImportFromSeedForm();

  return (
    <ImportFromSeedForm
      control={control}
      onSubmit={handleSubmit(importFromSeed)}
    />
  );
};

export default ImportFromSeed;
