import React, { FC } from 'react';
import { WalletSetupScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { WalletSetup } from '@features/auth/hoc';

const WalletSetupScreen: FC<WalletSetupScreenProps> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <WalletSetup />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalletSetupScreen;
