import React, { FC } from 'react';
import { ImportWalletScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { ImportFromSeedForm } from '@features/auth/components';

const ImportWalletScreen: FC<ImportWalletScreenProps> = () => {
  return (
    <ScreenContainer>
      <ImportFromSeedForm />
    </ScreenContainer>
  );
};

export default ImportWalletScreen;
