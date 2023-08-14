import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Transaction } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
}

const TransactionDetails: FC<Props> = (props) => {
  const { transaction, style } = props;
};

export default TransactionDetails;
