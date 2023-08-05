import React, { FC, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import { TransactionsHeader, TransactionsListItem } from '../components';
import { useBalance } from '../hooks';
import { Transaction } from '../types';

const address = '5G145Vp65neFzsXJ7kCUomTSjmy2Yv5wKTFxHL69oHS5gBB2';

const Wallets: FC = () => {
  const {
    balance,
    isRefetching: isBalanceRefetching,
    refetch: refetchBalance,
    isLoading: isBalanceLoading,
  } = useBalance(address);

  const handleOnRefresh = useCallback(
    () => Promise.all([refetchBalance()]),
    [refetchBalance],
  );

  const isRefreshing = useMemo<boolean>(
    () => isBalanceLoading || isBalanceRefetching,
    [isBalanceLoading, isBalanceRefetching],
  );

  const renderItem = (info: ListRenderItemInfo<Transaction>) => {
    const { item } = info;
    return <TransactionsListItem transaction={item} onPress={console.log} />;
  };

  console.log('balance', balance);

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

export default Wallets;
