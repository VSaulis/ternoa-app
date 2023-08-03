import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { center, rowCenter } from '@styles/common';
import { colors, padding, sizes } from '@styles/darkTheme';
import hexToRgba from 'hex-to-rgba';
import { Text } from '@common/components';

interface Props {
  style?: StyleProp<ViewStyle>;
  options: string[];
  onSelect: (phrase: string) => void;
}

const SeedPhraseSelect: FC<Props> = (props) => {
  const { style, onSelect, options } = props;

  return (
    <View style={[styles.container, style]}>
      {options.map((phrase) => (
        <View key={phrase} style={padding('full')('xs')}>
          <TouchableOpacity
            onPress={() => onSelect(phrase)}
            style={styles.phrase}>
            <Text fontSize="s" fontWeight="regular" color="white">
              {phrase}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...center,
    ...padding('full')('m'),
    flexWrap: 'wrap',
    borderRadius: sizes.xs,
    borderWidth: 1,
    borderColor: hexToRgba(colors.white, 0.06),
  },
  phrase: {
    ...center,
    ...padding('horizontal')('m'),
    backgroundColor: colors.gray22,
    borderRadius: sizes.xs,
    height: 40,
  },
});

export default SeedPhraseSelect;
