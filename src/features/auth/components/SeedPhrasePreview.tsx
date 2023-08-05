import React, { FC, useContext } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin } from '@styles/darkTheme';
import { GradientButton, Text, TextGradient } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import SeedPhrase from './SeedPhrase';
import { contentStyle, footerStyle } from '../styles';
import { WalletCreationContext } from '../providers/WalletCreationProvider';

interface Props {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const SeedPhrasePreview: FC<Props> = (props) => {
  const { style, onNext } = props;
  const { t } = useAuthTranslations();
  const { seedPhrase, generateSeedPhrase } = useContext(WalletCreationContext);

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
          <SeedPhrase onView={generateSeedPhrase} seedPhrase={seedPhrase} />
        </View>
      </View>
      <View style={footerStyle}>
        <GradientButton
          isDisabled={!seedPhrase}
          onPress={onNext}
          size="medium"
          variant="primary"
          label={t('Next')}
        />
      </View>
    </View>
  );
};

export default SeedPhrasePreview;
