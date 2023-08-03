import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from '@common/components';
import { Wallet } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  wallet: Wallet;
}

const WalletsListItem: FC<Props> = (props) => {
  const { style, wallet } = props;

  return (
    <View style={style}>
      <Text color="white" textAlign="center">
        {wallet.balanceInTokens}
      </Text>
      <Text color="white" textAlign="center">
        {wallet.balanceInDollars}
      </Text>
    </View>
  );
};

export default WalletsListItem;
