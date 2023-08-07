import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors, padding, sizes } from '@styles/darkTheme';
import { center } from '@styles/common';
import hexToRgba from 'hex-to-rgba';
import { Text } from '@common/components';
import { seedToSeedPhrases } from '@utils/crypto';
import SeedOverlay from './SeedOverlay';

interface Props {
  style?: StyleProp<ViewStyle>;
  seed: string;
  onView: () => void;
  isVisible: boolean;
}

const Seed: FC<Props> = (props) => {
  const { seed, style, onView, isVisible } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.phraseContainer}>
        {seedToSeedPhrases(seed).map((phrase, index) => (
          <View key={phrase} style={styles.phraseWrapper}>
            <View style={styles.phrase}>
              <Text fontSize="s" fontWeight="regular" color="white">{`${
                index + 1
              }. ${phrase}`}</Text>
            </View>
          </View>
        ))}
      </View>
      {!isVisible && (
        <SeedOverlay style={StyleSheet.absoluteFill} onView={onView} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('full')('m'),
    borderRadius: sizes.xs,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
    borderColor: hexToRgba(colors.white, 0.06),
  },
  phraseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  phraseWrapper: {
    width: '50%',
    ...padding('full')('xs'),
  },
  phrase: {
    ...center,
    ...padding('horizontal')('m'),
    backgroundColor: colors.gray22,
    borderRadius: sizes.xs,
    height: 32,
  },
});

export default Seed;
