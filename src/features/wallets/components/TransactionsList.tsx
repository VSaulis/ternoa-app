import React, { FC } from 'react';
import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { ListRenderItemInfo } from '@react-native/virtualized-lists/Lists/VirtualizedList';
import TransactionsListItem from './TransactionsListItem';
import { Transaction } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  transactions: Transaction[];
  onRefresh: () => void;
  isRefreshing: boolean;
  onTransactionPress: (transaction: Transaction) => void;
  Header: FlatListProps<Transaction>['ListHeaderComponent'];
}

const TransactionsList: FC<Props> = (props) => {
  const {
    style,
    isRefreshing,
    onRefresh,
    transactions,
    onTransactionPress,
    Header,
  } = props;

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
      ListHeaderComponent={Header}
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
