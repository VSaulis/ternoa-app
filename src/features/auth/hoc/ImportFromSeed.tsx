import React, { FC } from 'react';
import { ImportFromSeedForm } from '../components';
import { useImportFromSeed } from '../hooks';

const ImportFromSeed: FC = () => {
  const { control, handleSubmit, onSubmit } = useImportFromSeed();

  return (
    <ImportFromSeedForm control={control} onSubmit={handleSubmit(onSubmit)} />
  );
};

export default ImportFromSeed;
