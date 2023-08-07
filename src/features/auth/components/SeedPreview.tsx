import React, { FC, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin } from '@styles/darkTheme';
import { GradientButton, Text, TextGradient } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { generateSeed } from '@utils/crypto';
import Seed from './Seed';
import { contentStyle, footerStyle } from '../styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  onNext: (seed: string) => void;
}

const SeedPreview: FC<Props> = (props) => {
  const { style, onNext } = props;
  const { t } = useAuthTranslations();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [seed] = useState<string>(generateSeed());

  return (
    <View style={[flex1, style]}>
      <View style={[flex1, contentStyle]}>
        <TextGradient
          style={margin('bottom')('m')}
          fontWeight="semiBold"
          fontSize="l"
          textAlign="center"
          gradient="gradient1">
          {t('Write Down Your Seed Phrase')}
        </TextGradient>
        <Text fontSize="s" fontWeight="regular" color="gray9">
          {t(
            "This is your seed phrase. Write it down on a paper and keep it in a safe place. You'll be asked to re-enter this phrase (in order) on the next step.",
          )}
        </Text>
        <View style={[flex1, center]}>
          <Seed
            isVisible={isVisible}
            onView={() => setIsVisible(true)}
            seed={seed}
          />
        </View>
      </View>
      <View style={footerStyle}>
        <GradientButton
          isDisabled={!isVisible}
          onPress={() => onNext(seed)}
          size="medium"
          variant="primary"
          label={t('Next')}
        />
      </View>
    </View>
  );
};

export default SeedPreview;
