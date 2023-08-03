import React, { FC } from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { flex1, rowCenter } from '@styles/common';
import { margin, padding } from '@styles/darkTheme';
import {
  GradientButton,
  ProgressBar,
  Svg,
  Text,
  TextGradient,
} from '@common/components';
import { Trans } from 'react-i18next';
import { useAuthTranslations } from '@i18n/hooks';
import { slideContentStyle, slideFooterStyle } from '../styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  onStart: () => void;
}

const SeedPhraseDescription: FC<Props> = (props) => {
  const { style, onStart } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={[flex1, style]}>
      <ScrollView
        contentContainerStyle={slideContentStyle}
        scrollIndicatorInsets={{ right: 1 }}>
        <View style={styles.header}>
          <TextGradient
            style={flex1}
            fontWeight="semiBold"
            fontSize="l"
            textAlign="center"
            gradient="gradient1">
            {t('Secure Your Wallet')}
          </TextGradient>
          <Svg name="info" color="white" size={18} />
        </View>
        <Text
          fontSize="s"
          fontWeight="regular"
          style={margin('bottom')('xxl')}
          color="gray9">
          <Trans
            ns="auth"
            i18nKey="Secure your wallet's 'Seed Phrase'"
            components={{
              highlighted: (
                <Text fontWeight="semiBold" fontSize="s" color="blue5" />
              ),
            }}
          />
        </Text>
        <Text
          color="white"
          fontSize="s"
          fontWeight="semiBold"
          style={margin('bottom')('m')}>
          {t('Manual')}
        </Text>
        <Text
          color="white"
          fontSize="s"
          fontWeight="regular"
          style={margin('bottom')('m')}>
          {t(
            'Write down your seed phrase on a piece of paper and store in a safe place.',
          )}
        </Text>
        <Text
          color="white"
          fontSize="s"
          fontWeight="regular"
          style={margin('bottom')('xs')}>
          {t('Security lever: Very strong')}
        </Text>
        <ProgressBar
          width={180}
          style={margin('bottom')('m')}
          total={3}
          value={3}
        />
        <Text
          fontSize="s"
          fontWeight="regular"
          color="white"
          style={margin('bottom')('m')}>
          {t(
            'Risks are: • You lose it• You forget where you put it• Someone else finds it',
          )}
        </Text>
        <Text
          fontSize="s"
          fontWeight="regular"
          color="white"
          style={margin('bottom')('m')}>
          {t("Other options: Doesn't have to be paper!")}
        </Text>
        <Text fontSize="s" fontWeight="regular" color="white">
          {t(
            'Tips:• Store in bank vault• Store in a safe• Store in multiple secret places',
          )}
        </Text>
      </ScrollView>
      <View style={slideFooterStyle}>
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

const styles = StyleSheet.create({
  header: {
    ...rowCenter,
    ...margin('bottom')('s'),
    justifyContent: 'center',
    paddingLeft: 18,
  },
});

export default SeedPhraseDescription;
