import React, { FC } from 'react';
import { ImportFromSeedForm } from '../components';
import { useImportFromSeedForm } from '../hooks';

const ImportFromSeed: FC = () => {
  const { control, isValid, handleSubmit } = useImportFromSeedForm();

  return (
    <ImportFromSeedForm
      control={control}
      isValid={isValid}
      onSubmit={handleSubmit(console.log)}
    />
  );
};

export default ImportFromSeed;
