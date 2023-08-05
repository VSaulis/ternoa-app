import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
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
import { pickRandomIndex, pickRandomPhrases } from '@utils/crypto';
import SeedPhraseSelect from './SeedPhraseSelect';
import { contentStyle, footerStyle } from '../styles';
import { WalletCreationContext } from '../providers/WalletCreationProvider';

interface Props {
  style?: StyleProp<ViewStyle>;
  onComplete: (isSuccess: boolean) => void;
}

const stepsCount = 3;

const SeedPhraseConfirmation: FC<Props> = (props) => {
  const { style, onComplete } = props;
  const { t } = useAuthTranslations();
  const { seedPhrase } = useContext(WalletCreationContext);
  const [options, setOptions] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);

  const generateRandomPhrases = useCallback(
    (indexes: number[] = []) => {
      const newIndex = pickRandomIndex(indexes);
      setSelectedPhrase(null);
      setOptions(pickRandomPhrases(seedPhrase ?? [], newIndex));
      setCurrentIndex(newIndex);
      setUsedIndexes((prevState) => [...prevState, newIndex]);
    },
    [seedPhrase],
  );

  useEffect(() => {
    setUsedIndexes([]);
  }, [seedPhrase]);

  useEffect(() => {
    generateRandomPhrases();
  }, [generateRandomPhrases]);

  const handleOnNext = () => {
    if (!seedPhrase || currentIndex === null) {
      return;
    }

    if (usedIndexes.length === stepsCount) {
      onComplete(isSuccess);
      return;
    }

    generateRandomPhrases(usedIndexes);

    const currentPhrase = seedPhrase[currentIndex];
    if (currentPhrase !== selectedPhrase) {
      setIsSuccess(false);
    }
  };

  return (
    <View style={[flex1, style]}>
      <View style={[flex1, contentStyle]}>
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
            {`${currentIndex}. ${selectedPhrase ?? ''}`}
          </TextGradient>
        </View>
        <View style={[center, margin('bottom')('l')]}>
          <ProgressBar
            color="primary5"
            width={140}
            total={stepsCount}
            value={usedIndexes.length}
          />
        </View>
        <SeedPhraseSelect options={options} onSelect={setSelectedPhrase} />
      </View>
      <View style={footerStyle}>
        <GradientButton
          isDisabled={!selectedPhrase}
          onPress={handleOnNext}
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
