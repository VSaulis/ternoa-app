import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin, padding } from '@styles/darkTheme';
import { GradientButton, Text, TextGradient } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { contentStyle, footerStyle } from '../styles';

const successIllustration = require('@assets/images/success.png');

const WalletCreationSuccess: FC = () => {
  const { t } = useAuthTranslations();

  return (
    <View style={flex1}>
      <View style={[flex1, contentStyle]}>
        <View style={[center, margin('bottom')('l')]}>
          <Image width={255} height={255} source={successIllustration} />
        </View>
        <TextGradient
          style={margin('bottom')('l')}
          fontWeight="regular"
          fontSize="xxl"
          textAlign="center"
          gradient="gradient1">
          {t('Success!')}
        </TextGradient>
        <Text
          style={[padding('horizontal')('m')]}
          textAlign="center"
          fontSize="s"
          fontWeight="regular"
          color="white">
          {t(
            "You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your responsibility!",
          )}
        </Text>
      </View>
      <View style={footerStyle}>
        <GradientButton size="medium" variant="primary" label={t('Complete')} />
      </View>
    </View>
  );
};

export default WalletCreationSuccess;
