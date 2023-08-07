import React, { FC } from 'react';
import { TransactionsScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { Transactions } from '@features/wallets/hoc';

const TransactionsScreen: FC<TransactionsScreenProps> = () => {
  return (
    <ScreenContainer>
      <Transactions />
    </ScreenContainer>
  );
};

export default TransactionsScreen;
