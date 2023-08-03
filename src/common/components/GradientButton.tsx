import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors, Gradients } from '@styles/types';
import { colors, gradients, padding } from '@styles/darkTheme';
import { center, flex1 } from '@styles/common';
import LinearGradient from 'react-native-linear-gradient';
import Text from './Text';
import { ButtonProps, containerStyleMap, labelStyleMap } from './Button';

type Variant = 'primary';

interface Props extends Omit<ButtonProps, 'variant'> {
  variant?: Variant;
}

const Button: FC<Props> = (props) => {
  const {
    onPress,
    style,
    isDisabled = false,
    variant = 'primary',
    size = 'medium',
    label,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyleMap[size], style]}
      disabled={isDisabled}>
      <LinearGradient
        style={[
          flex1,
          center,
          padding('horizontal')('m'),
          containerStyleMap[size],
        ]}
        colors={
          isDisabled
            ? [colors.gray23, colors.gray23]
            : gradients[backgroundColorsMap[variant]]
        }
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text
          textAlign="center"
          style={labelStyleMap[size]}
          color={isDisabled ? 'gray18' : labelColorMap[variant]}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const backgroundColorsMap: Record<Variant, keyof Gradients> = {
  primary: 'gradient6',
};

const labelColorMap: Record<Variant, keyof Colors> = {
  primary: 'white',
};

export default Button;
