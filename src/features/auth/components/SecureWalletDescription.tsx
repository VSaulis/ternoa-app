import React, { FC } from 'react';
import { Image, ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin } from '@styles/darkTheme';
import { Button, GradientButton, Text } from '@common/components';
import { Trans } from 'react-i18next';
import { useAuthTranslations } from '@i18n/hooks';
import { contentStyle, footerStyle } from '../styles';

const safeSecurityIllustration = require('@assets/images/safe-security.png');

interface Props {
  style?: StyleProp<ViewStyle>;
  onStart: () => void;
}

const SecureWalletDescription: FC<Props> = (props) => {
  const { style, onStart } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={[flex1, style]}>
      <ScrollView
        contentContainerStyle={contentStyle}
        scrollIndicatorInsets={{ right: 1 }}>
        <View style={[center, margin('bottom')('xxl')]}>
          <Image width={295} height={295} source={safeSecurityIllustration} />
        </View>
        <Text
          fontWeight="semiBold"
          fontSize="m"
          style={margin('bottom')('l')}
          textAlign="center"
          color="white">
          {t('Secure Your Wallet')}
        </Text>
        <Text
          fontSize="s"
          fontWeight="regular"
          style={margin('bottom')('xs')}
          color="gray9">
          <Trans
            ns="auth"
            i18nKey="Don't risk losing your funds. protect your wallet by saving your Seed phrase in a place you trust."
            components={{
              highlighted: (
                <Text fontSize="s" fontWeight="semiBold" color="blue5" />
              ),
            }}
          />
        </Text>
        <Text
          style={margin('bottom')('xl')}
          fontSize="s"
          fontWeight="semiBold"
          color="gray9">
          {t(
            "It's the only way to recover your wallet if you get locked out of the app or get a new device.",
          )}
        </Text>
        <Button
          onPress={onStart}
          size="medium"
          variant="text"
          label={t('Remind Me Later')}
        />
      </ScrollView>
      <View style={footerStyle}>
        <GradientButton
          onPress={onStart}
          size="medium"
          variant="primary"
          label={t('Start')}
        />
      </View>
    </View>
  );
};

export default SecureWalletDescription;
