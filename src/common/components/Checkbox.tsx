import React, { FC, useMemo } from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { colors, sizes } from '@styles/darkTheme';
import { center } from '@styles/common';
import Svg from './Svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
  onChange?: (isChecked: boolean) => void;
}

const Checkbox: FC<Props> = (props) => {
  const {
    style,
    onChange,
    isChecked = false,
    isDisabled = false,
    size = 24,
  } = props;

  const backgroundColor = useMemo<ViewStyle['backgroundColor']>(
    () => (isChecked ? colors.primary5 : colors.gray20),
    [isChecked],
  );

  const sizeStyle = useMemo<ViewStyle>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  return (
    <Pressable
      onPress={() => onChange?.(!isChecked)}
      disabled={isDisabled}
      style={[styles.container, sizeStyle, { backgroundColor }, style]}>
      {isChecked && <Svg color="white" size={12} name="check" />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    borderRadius: sizes.xxs,
  },
});

export default Checkbox;
