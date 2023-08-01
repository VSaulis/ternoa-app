import React, { FC, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Colors } from '@styles/types';
import { center } from '@styles/common';
import { colors, padding } from '@styles/darkTheme';
import LinearGradient from 'react-native-linear-gradient';
import TextArchivo from './TextArchivo';

interface Props {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: Variant;
  size?: Size;
  tx: string;
}

type Variant = 'primary' | 'secondary';
type Size = 'big' | 'small';

const Button: FC<Props> = (props) => {
  const {
    onPress,
    style,
    isDisabled = false,
    tx,
    variant = 'primary',
    size = 'small',
  } = props;

  const backgroundColors = useMemo<string[]>(
    () => backgroundColorsMap[variant].map((color) => colors[color]),
    [variant],
  );

  const height = useMemo<number>(() => heightMap[size], [size]);

  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={isDisabled}>
      <LinearGradient
        style={[styles.background, { height }]}
        colors={isDisabled ? [colors.grey23, colors.grey23] : backgroundColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <TextArchivo
          fontSize="m"
          fontWeight="bold"
          textAlign="center"
          color={isDisabled ? 'grey18' : 'white'}
          tx={tx}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const backgroundColorsMap: Record<Variant, (keyof Colors)[]> = {
  primary: ['lightBlue', 'purple', 'pink', 'orange'],
  secondary: ['grey21', 'grey21'],
};

const heightMap: Record<Size, number> = {
  big: 56,
  small: 48,
};

const styles = StyleSheet.create({
  background: {
    ...padding('horizontal')('m'),
    ...center,
    height: 56,
    borderRadius: 28,
  },
});

export default Button;
