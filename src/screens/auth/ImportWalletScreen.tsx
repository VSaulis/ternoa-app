import React, { FC } from 'react';
import { ImportWalletScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { ImportWallet } from '@features/auth/hoc';

const ImportWalletScreen: FC<ImportWalletScreenProps> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <ImportWallet />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default ImportWalletScreen;
