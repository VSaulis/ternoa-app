import React, { FC } from 'react';
import {
  createPasswordRoute,
  importWalletRoute,
  WalletSetupScreenProps,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { WalletSetup } from '@features/auth/components';

const WalletSetupScreen: FC<WalletSetupScreenProps> = (props) => {
  const { navigation } = props;

  const handleOnImportWalletPress = () => {
    navigation.navigate(importWalletRoute);
  };

  const handleOnCreateWalletPress = () => {
    navigation.navigate(createPasswordRoute);
  };

  return (
    <ScreenContainer>
      <WalletSetup
        onImportWalletPress={handleOnImportWalletPress}
        onCreateWalletPress={handleOnCreateWalletPress}
      />
    </ScreenContainer>
  );
};

export default WalletSetupScreen;
