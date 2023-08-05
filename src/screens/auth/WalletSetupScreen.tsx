import React, { FC } from 'react';
import {
  createNewWalletRoute,
  importWalletRoute,
  WalletSetupScreenProps,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { WalletSetup } from '@features/auth/components';

const WalletSetupScreen: FC<WalletSetupScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <WalletSetup
          onImportWalletPress={() => navigation.navigate(importWalletRoute)}
          onCreateWalletPress={() => navigation.navigate(createNewWalletRoute)}
        />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalletSetupScreen;
