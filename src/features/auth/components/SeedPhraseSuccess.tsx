import React, { FC } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin } from '@styles/darkTheme';
import { GradientButton, Text, TextGradient } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { slideContentStyle, slideFooterStyle } from '../styles';

const successIllustration = require('@assets/images/success.png');

interface Props {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const SeedPhraseSuccess: FC<Props> = (props) => {
  const { style, onNext } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={[flex1, style]}>
      <View style={[flex1, slideContentStyle]}>
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
          textAlign="center"
          fontSize="s"
          fontWeight="regular"
          color="white">
          {t(
            "You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your responsibility!",
          )}
        </Text>
      </View>
      <View style={slideFooterStyle}>
        <GradientButton
          onPress={onNext}
          size="medium"
          variant="primary"
          label={t('Next')}
        />
      </View>
    </View>
  );
};

export default SeedPhraseSuccess;
