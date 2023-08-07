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
import { flex1 } from '@styles/common';
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
  const isLabelVisible = isFocused || !!value;

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
      {isLabelVisible && (
        <Text
          color="gray12"
          fontSize="xs"
          fontWeight="regular"
          style={styles.label}
          suppressHighlighting
          onPress={() => ref.current?.focus()}>
          {label}
        </Text>
      )}
      <TextInput
        ref={ref}
        selectionColor={colors.white}
        keyboardAppearance="dark"
        value={value}
        placeholder={!isFocused ? label : undefined}
        placeholderTextColor={colors.gray12}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        secureTextEntry={isHidden}
        cursorColor={colors.white}
        onChangeText={onChange}
        style={[styles.input, isLabelVisible && { paddingTop: sizes.s }]}
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
    left: sizes.m,
    top: sizes.xs,
    position: 'absolute',
    zIndex: 2,
  },
  input: {
    ...fonts.archivo.semiBold,
    ...padding('left')('m'),
    ...padding('right')('xxxl'),
    fontSize: fontSizes.s.fontSize,
    height: 62,
    borderRadius: sizes.m,
    color: colors.white,
    backgroundColor: colors.gray24,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: 18,
  },
});

export default Input;
