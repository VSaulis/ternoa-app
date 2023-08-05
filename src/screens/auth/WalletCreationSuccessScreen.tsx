import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { WalletCreationSuccess } from '@features/auth/components';
import { WalletCreationSuccessScreenProps } from '@navigation/types';

const WalletCreationSuccessScreen: FC<
  WalletCreationSuccessScreenProps
> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <WalletCreationSuccess />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalletCreationSuccessScreen;
