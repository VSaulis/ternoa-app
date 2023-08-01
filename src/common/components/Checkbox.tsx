import React, { FC, ReactNode, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors, sizes } from '@styles/darkTheme';
import { center, rowStart } from '@styles/common';
import Svg from './Svg';

interface Props {
  style?: StyleProp<ViewStyle>;
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
  onChange?: (isChecked: boolean) => void;
  Label?: ReactNode;
}

const Checkbox: FC<Props> = (props) => {
  const {
    style,
    onChange,
    isChecked = false,
    isDisabled = false,
    size = 24,
    Label,
  } = props;

  const backgroundColor = useMemo<ViewStyle['backgroundColor']>(
    () => (isChecked ? colors.primary : colors.grey18),
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
    <TouchableOpacity
      onPress={() => onChange?.(!isChecked)}
      disabled={isDisabled}
      style={[style, rowStart]}>
      <View style={[styles.container, sizeStyle, { backgroundColor }]}>
        {isChecked && <Svg color="white" size={12} name="check" />}
      </View>
      {!!Label && Label}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    borderRadius: sizes.xxs,
  },
});

export default Checkbox;
