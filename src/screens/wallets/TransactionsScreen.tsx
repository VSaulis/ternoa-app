import React, { FC } from 'react';
import { TransactionsScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { Wallets } from '@features/wallets/hoc';

const TransactionsScreen: FC<TransactionsScreenProps> = () => {
  return (
    <ScreenContainer>
      <Wallets />
    </ScreenContainer>
  );
};

export default TransactionsScreen;
