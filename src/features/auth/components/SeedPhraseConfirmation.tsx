import React, { FC, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { center, flex1 } from '@styles/common';
import { colors, margin } from '@styles/darkTheme';
import {
  GradientButton,
  ProgressBar,
  Text,
  TextGradient,
} from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import SeedPhraseSelect from './SeedPhraseSelect';
import { slideContentStyle, slideFooterStyle } from '../styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  onComplete: () => void;
}

const SeedPhraseConfirmation: FC<Props> = (props) => {
  const { style, onComplete } = props;
  const { t } = useAuthTranslations();

  const [selectedPhrase, setSelectedPhrase] = useState<string | undefined>(
    undefined,
  );

  return (
    <View style={[flex1, style]}>
      <View style={[flex1, slideContentStyle]}>
        <TextGradient
          style={margin('bottom')('m')}
          fontWeight="semiBold"
          fontSize="l"
          textAlign="center"
          gradient="gradient1">
          {t('Confirm Seed Phrase')}
        </TextGradient>
        <Text
          textAlign="center"
          fontSize="s"
          fontWeight="regular"
          color="gray9">
          {t('Select each word in the order it was presented to you')}
        </Text>
        <View style={[flex1, center]}>
          <TextGradient
            textStyle={[!selectedPhrase && styles.disabledText]}
            fontWeight="regular"
            fontSize="xxl"
            gradient="gradient1">
            {`3. ${selectedPhrase ?? ''}`}
          </TextGradient>
        </View>
        <View style={[center, margin('bottom')('l')]}>
          <ProgressBar color="primary5" width={140} total={3} value={1} />
        </View>
        <SeedPhraseSelect
          options={['future', 'frequent', 'target', 'abuse', 'organ', 'bubble']}
          onSelect={setSelectedPhrase}
        />
      </View>
      <View style={slideFooterStyle}>
        <GradientButton
          isDisabled={!selectedPhrase}
          onPress={onComplete}
          size="medium"
          variant="primary"
          label={t('Next')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  disabledText: {
    opacity: 1,
    color: colors.gray12,
  },
});

export default SeedPhraseConfirmation;
