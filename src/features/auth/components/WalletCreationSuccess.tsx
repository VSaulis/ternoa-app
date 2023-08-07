import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin, padding } from '@styles/darkTheme';
import { GradientButton, Text, TextGradient } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { contentStyle, footerStyle } from '../styles';
import { useCreateWallet } from '../hooks';

const successIllustration = require('@assets/images/success.png');

interface Props {
  seed: string;
  password: string;
}

const WalletCreationSuccess: FC<Props> = (props) => {
  const { seed, password } = props;
  const { t } = useAuthTranslations();
  const { createWallet, isSubmitting } = useCreateWallet();

  const handleOnComplete = () => {
    return createWallet({ seed, password });
  };

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
        <GradientButton
          onPress={handleOnComplete}
          isDisabled={isSubmitting}
          size="medium"
          variant="primary"
          label={t('Complete')}
        />
      </View>
    </View>
  );
};

export default WalletCreationSuccess;
