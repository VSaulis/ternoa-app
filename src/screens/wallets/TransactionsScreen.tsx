import React, { FC } from 'react';
import { TransactionsScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { Wallets } from '@features/wallets/hoc';

const TransactionsScreen: FC<TransactionsScreenProps> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <Wallets />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default TransactionsScreen;
