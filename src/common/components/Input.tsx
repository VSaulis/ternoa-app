import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { colors, fonts, fontSizes, padding, sizes } from '@styles/darkTheme';
import Svg from './Svg';
import FormControl, { FormControlProps } from './FormControl';
import Text from './Text';

type InputProps = Omit<
  TextInputProps,
  | 'style'
  | 'placeholderTextColor'
  | 'placeholder'
  | 'keyboardAppearance'
  | 'onChange'
  | 'onChangeText'
  | 'onContentSizeChange'
>;

interface Props extends InputProps, FormControlProps {
  label: string;
  onChange: (text: string) => void;
}

const labelShiftedPadding = sizes.s - sizes.xxs; // 10
const labelPadding = sizes.xxs + sizes.m; // 20

const Input: FC<Props> = (props) => {
  const {
    style,
    secureTextEntry = false,
    label,
    value,
    error,
    help,
    onBlur,
    onFocus,
    onChange,
    ...rest
  } = props;

  const ref = useRef<TextInput>(null);
  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isLabelShifted = isFocused || !!value;
  const labelTopShift = isLabelShifted ? labelShiftedPadding : labelPadding;

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <FormControl style={style} error={error} help={help}>
      <Text
        color="gray12"
        fontSize={isLabelShifted ? 'xs' : 's'}
        fontWeight={isLabelShifted ? 'regular' : 'semiBold'}
        style={[styles.label, { top: labelTopShift }]}
        onPress={() => ref.current?.focus()}>
        {label}
      </Text>
      <TextInput
        ref={ref}
        keyboardAppearance="dark"
        value={value}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        secureTextEntry={isHidden}
        cursorColor={colors.white}
        onChangeText={onChange}
        style={[
          styles.input,
          { paddingBottom: isLabelShifted ? labelShiftedPadding : sizes.xxxs },
        ]}
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.hideIcon}
          onPress={() => setIsHidden((prev) => !prev)}>
          <Svg size={24} color="white" name="eyeVisible" />
        </TouchableOpacity>
      )}
    </FormControl>
  );
};

const styles = StyleSheet.create({
  label: {
    ...padding('left')('m'),
    borderTopLeftRadius: sizes.m,
    borderTopRightRadius: sizes.m,
  },
  input: {
    ...fonts.archivo.semiBold,
    ...fontSizes.s,
    ...padding('horizontal')('m'),
    borderBottomLeftRadius: sizes.m,
    borderBottomRightRadius: sizes.m,
    color: colors.white,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: labelPadding,
  },
});

export default Input;
