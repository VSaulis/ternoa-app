import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { TransactionsHeader, TransactionsListItem } from '../components';
import { useBalance, useTransactions } from '../hooks';
import { Transaction } from '../types';

const address = '5G145Vp65neFzsXJ7kCUomTSjmy2Yv5wKTFxHL69oHS5gBB2';

const Transactions: FC = () => {
  const {
    balance,
    isRefetching: isBalanceRefetching,
    refetch: refetchBalance,
    isLoading: isBalanceLoading,
  } = useBalance(address);

  const {
    transactions,
    isRefetching: isTransactionsRefetching,
    refetch: refetchTransactions,
    isLoading: isTransactionsLoading,
  } = useTransactions(address);

  const handleOnRefresh = useCallback(
    () => Promise.all([refetchBalance(), refetchTransactions()]),
    [refetchBalance, refetchTransactions],
  );

  const isRefreshing = useMemo<boolean>(
    () =>
      isBalanceLoading ||
      isBalanceRefetching ||
      isTransactionsRefetching ||
      isTransactionsLoading,
    [
      isBalanceLoading,
      isBalanceRefetching,
      isTransactionsRefetching,
      isTransactionsLoading,
    ],
  );

  const renderItem = (info: ListRenderItemInfo<Transaction>) => {
    const { item } = info;
    return <TransactionsListItem transaction={item} onPress={console.log} />;
  };

  return (
    <FlatList
      ListHeaderComponent={
        <TransactionsHeader
          balanceInTokens={25}
          balanceInDollars={25}
          onSendPress={console.log}
          onReceivePress={console.log}
        />
      }
      keyExtractor={(item) => item.id.toString()}
      scrollIndicatorInsets={{ right: 1 }}
      onRefresh={handleOnRefresh}
      data={[]}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default Transactions;
