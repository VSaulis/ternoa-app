import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '@common/components';
import { flex1, rowCenter } from '@styles/common';
import { margin, padding, sizes } from '@styles/darkTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Transaction } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
}

const TransactionDetails: FC<Props> = (props) => {
  const { transaction, style } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        padding('horizontal')('m'),
        padding('top')('l'),
        { paddingBottom: sizes.l + bottom },
        style,
      ]}>
      <View style={[margin('bottom')('l'), rowCenter]}>
        <View style={flex1}>
          <Text
            style={margin('bottom')('xxs')}
            color="gray12"
            fontWeight="regular"
            fontSize="xs"
            textAlign="left">
            Status
          </Text>
          <Text
            fontSize="m"
            fontWeight="semiBold"
            color="white"
            textAlign="left">
            Confirmed
          </Text>
        </View>
        <View style={flex1}>
          <Text
            style={margin('bottom')('xxs')}
            color="gray12"
            fontWeight="regular"
            fontSize="xs"
            textAlign="right">
            Date
          </Text>
          <Text
            fontSize="m"
            fontWeight="regular"
            color="white"
            textAlign="right">
            2022-10-10 12:45:45
          </Text>
        </View>
      </View>
      <View style={[margin('bottom')('l'), rowCenter]}>
        <View style={flex1}>
          <Text
            style={margin('bottom')('xxs')}
            color="gray12"
            fontWeight="regular"
            fontSize="xs"
            textAlign="left">
            From
          </Text>
          <Text
            fontSize="m"
            fontWeight="regular"
            color="white"
            textAlign="left">
            0x3Dc6...DfCE
          </Text>
        </View>
        <View style={flex1}>
          <Text
            style={margin('bottom')('xxs')}
            color="gray12"
            fontWeight="regular"
            fontSize="xs"
            textAlign="right">
            To
          </Text>
          <Text
            fontSize="m"
            fontWeight="regular"
            color="white"
            textAlign="right">
            0x3Dc6...DfF9
          </Text>
        </View>
      </View>
      <View style={rowCenter}>
        <View style={flex1}>
          <Text
            style={margin('bottom')('xxs')}
            color="gray12"
            fontWeight="regular"
            fontSize="xs"
            textAlign="left">
            Nonce
          </Text>
          <Text
            fontSize="m"
            fontWeight="regular"
            color="white"
            textAlign="left">
            #0
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    opacity: 0,
  },
});

export default TransactionDetails;
