import React, { FC } from 'react';
import { FlatList, StyleProp, ViewStyle } from 'react-native';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import TransactionsListItem from './TransactionsListItem';
import { Transaction } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  transactions: Transaction[];
  onRefresh: () => void;
  isRefreshing: boolean;
  onTransactionPress: (transaction: Transaction) => void;
}

const TransactionsList: FC<Props> = (props) => {
  const { style, isRefreshing, onRefresh, transactions, onTransactionPress } =
    props;

  const renderItem = (info: ListRenderItemInfo<Transaction>) => {
    const { item } = info;

    return (
      <TransactionsListItem
        transaction={item}
        onPress={() => onTransactionPress(item)}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      scrollIndicatorInsets={{ right: 1 }}
      onRefresh={onRefresh}
      style={style}
      data={transactions}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default TransactionsList;
