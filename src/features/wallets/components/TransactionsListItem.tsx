import React, { FC } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { flex1 } from '@styles/common';
import { Transaction, TransactionStatus, TransactionType } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
  onPress: () => void;
}

const TransactionsListItem: FC<Props> = (props) => {
  const { style, onPress } = props;

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View />
      <View style={flex1} />
      <View />
    </TouchableOpacity>
  );
};

const typeMap: Record<TransactionType, string> = {
  sent: 'wallets.sent_token',
  received: 'wallets.received_token',
};

const statusMap: Record<TransactionStatus, string> = {
  cancelled: 'wallets.cancelled',
  confirmed: 'wallets.confirmed',
};

export default TransactionsListItem;
