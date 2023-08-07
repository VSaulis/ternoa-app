import React, { FC, ReactNode, useMemo } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors, margin, sizes } from '@styles/darkTheme';
import { center, flex1, rowStart } from '@styles/common';
import Svg from './Svg';
import FormControl from './FormControl';

interface Props {
  style?: StyleProp<ViewStyle>;
  isChecked?: boolean;
  isDisabled?: boolean;
  size?: number;
  label?: ReactNode;
  error?: string;
  onChange?: (isChecked: boolean) => void;
}

const Checkbox: FC<Props> = (props) => {
  const {
    style,
    onChange,
    isChecked = false,
    isDisabled = false,
    error,
    size = 24,
    label,
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
    <FormControl
      errorStyle={{ marginLeft: sizes.xs + size }}
      style={style}
      containerStyle={styles.container}
      error={error}>
      <TouchableOpacity
        onPress={() => onChange?.(!isChecked)}
        disabled={isDisabled}
        style={rowStart}>
        <View
          style={[styles.checkboxContainer, sizeStyle, { backgroundColor }]}>
          {isChecked && <Svg color="white" size={12} name="check" />}
        </View>
        {!!label && <View style={flex1}>{label}</View>}
      </TouchableOpacity>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    backgroundColor: colors.gray24,
    borderWidth: 0,
    borderColor: colors.gray24,
  },
  checkboxContainer: {
    ...center,
    ...margin('right')('xs'),
    borderRadius: sizes.xxs,
  },
});

export default Checkbox;
