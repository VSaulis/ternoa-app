import React, { FC, useMemo } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Colors } from '@styles/types';
import { colors, fonts, margin, padding } from '@styles/darkTheme';
import { center, rowCenter } from '@styles/common';
import { IconName } from '@icons';
import Text from './Text';
import Svg from './Svg';

type Size = 'large' | 'medium' | 'small';
type Variant = 'secondary' | 'text' | 'link' | 'ghost';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: Size;
  variant?: Variant;
  label: string;
  icon?: IconName;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    onPress,
    style,
    isDisabled = false,
    variant = 'secondary',
    size = 'medium',
    icon,
    label,
  } = props;

  const dynamicContainerStyle = useMemo<ViewStyle>(
    () => ({
      ...containerStyleMap[size],
      backgroundColor: isDisabled
        ? colors.gray23
        : colors[backgroundColorMap[variant]],
    }),
    [size, variant, isDisabled],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        center,
        rowCenter,
        padding('horizontal')('m'),
        dynamicContainerStyle,
        style,
      ]}
      disabled={isDisabled}>
      {!!icon && (
        <Svg
          style={margin('right')('xs')}
          color="primary5"
          size={24}
          name={icon}
        />
      )}
      <Text
        textAlign="center"
        style={labelStyleMap[size]}
        textDecorationLine={variant === 'link' ? 'underline' : 'none'}
        color={isDisabled ? 'gray18' : labelColorMap[variant]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const backgroundColorMap: Record<Variant, keyof Colors> = {
  secondary: 'gray21',
  text: 'transparent',
  link: 'transparent',
  ghost: 'transparent',
};

const labelColorMap: Record<Variant, keyof Colors> = {
  secondary: 'white',
  text: 'blue5',
  link: 'blue5',
  ghost: 'blue5',
};

export const labelStyleMap: Record<Size, TextStyle> = {
  small: { fontSize: 14, lineHeight: 24, ...fonts.archivo.semiBold },
  medium: { fontSize: 16, lineHeight: 24, ...fonts.archivo.bold },
  large: { fontSize: 16, lineHeight: 24, ...fonts.archivo.bold },
};

export const containerStyleMap: Record<Size, ViewStyle> = {
  small: { height: 40, borderRadius: 20 },
  medium: { height: 48, borderRadius: 24 },
  large: { height: 56, borderRadius: 28 },
};

export default Button;
