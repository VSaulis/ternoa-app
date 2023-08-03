import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { margin, padding, sizes } from '@styles/darkTheme';
import { center, rowCenter } from '@styles/common';
import { Button, Text } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { BlurView } from '@react-native-community/blur';
import hexToRgba from 'hex-to-rgba';

interface Props {
  style?: StyleProp<ViewStyle>;
  onView: () => void;
}

const SeedPhraseOverlay: FC<Props> = (props) => {
  const { style, onView } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={[styles.container, style]}>
      <BlurView
        style={StyleSheet.absoluteFillObject}
        blurType="light"
        blurAmount={12}
        blurRadius={12}
        overlayColor={hexToRgba('#222531', 0.6)}
      />
      <Text
        style={margin('bottom')('s')}
        color="white"
        fontSize="s"
        fontWeight="semiBold">
        {t('Tap to reveal your seed phrase')}
      </Text>
      <Text
        style={margin('bottom')('xxl')}
        color="gray9"
        fontSize="xs"
        fontWeight="regular">
        {t('Make sure no one is watching your screen.')}
      </Text>
      <View style={[rowCenter, center]}>
        <Button
          onPress={onView}
          icon="eyeVisible"
          size="large"
          variant="secondary"
          label={t('View')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('horizontal')('l'),
    borderRadius: sizes.xs,
  },
});

export default SeedPhraseOverlay;
