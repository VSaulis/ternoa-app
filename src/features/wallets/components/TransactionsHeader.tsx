import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { margin, padding } from '@styles/darkTheme';
import { center, rowCenter } from '@styles/common';
import { Button, Text, TextGradient } from '@common/components';
import { useWalletsTranslations } from '@i18n/hooks';

interface Props {
  style?: StyleProp<ViewStyle>;
  balanceInTokens: number;
  balanceInDollars: number;
  onSendPress: () => void;
  onReceivePress: () => void;
}

const TransactionsHeader: FC<Props> = (props) => {
  const {
    style,
    onReceivePress,
    onSendPress,
    balanceInDollars,
    balanceInTokens,
  } = props;

  const { t } = useWalletsTranslations();

  return (
    <View
      style={[
        padding('horizontal')('l'),
        padding('vertical')('xl'),
        center,
        style,
      ]}>
      <TextGradient
        style={margin('bottom')('xs')}
        gradient="gradient1"
        fontWeight="regular"
        fontSize="xxl"
        textAlign="center">
        {balanceInTokens}
      </TextGradient>
      <Text
        style={margin('bottom')('l')}
        color="white"
        fontWeight="regular"
        fontSize="m"
        textAlign="center">
        {balanceInDollars}
      </Text>
      <View style={rowCenter}>
        <Button
          onPress={onSendPress}
          size="medium"
          style={margin('right')('xs')}
          variant="secondary"
          label={t('Sent')}
        />
        <Button
          onPress={onReceivePress}
          size="medium"
          variant="secondary"
          label={t('Receive')}
        />
      </View>
    </View>
  );
};

export default TransactionsHeader;
