import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { flex1 } from '@styles/common';
import { TransactionsList, WalletsList } from '../components';
import { useWallets } from '../hooks';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Wallets: FC<Props> = (props) => {
  const { style } = props;
  const { wallets, isLoading } = useWallets();

  return (
    <View style={[flex1, style]}>
      <WalletsList wallets={wallets} />
      <TransactionsList
        transactions={[]}
        onRefresh={() => {}}
        isRefreshing={false}
        onTransactionPress={() => {}}
      />
    </View>
  );
};

export default Wallets;
