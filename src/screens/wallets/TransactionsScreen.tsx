import React, { FC } from 'react';
import { TransactionsScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { TransactionDetails } from '@features/wallets/components';

const TransactionsScreen: FC<TransactionsScreenProps> = () => {
  return (
    <ScreenContainer>
      <TransactionDetails />
    </ScreenContainer>
  );
};

export default TransactionsScreen;
