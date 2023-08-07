import React, { FC, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Platform,
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

const labelShift = 18;

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
    multiline,
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
      <Text
        color="gray12"
        fontSize={isLabelVisible ? 'xs' : 's'}
        fontWeight={isLabelVisible ? 'regular' : 'semiBold'}
        style={[styles.label, { top: isLabelVisible ? sizes.xs : labelShift }]}
        suppressHighlighting
        onPress={() => ref.current?.focus()}>
        {label}
      </Text>
      <TextInput
        ref={ref}
        selectionColor={colors.white}
        keyboardAppearance="dark"
        value={value}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        secureTextEntry={isHidden}
        multiline={multiline}
        cursorColor={colors.white}
        onChangeText={onChange}
        style={[
          styles.input,
          multiline && padding('bottom')('s'),
          multiline && { lineHeight: fontSizes.xs.lineHeight },
          isLabelVisible && {
            paddingTop: multiline
              ? Platform.select({ ios: sizes.l + sizes.xxs, android: sizes.l })
              : Platform.select({ ios: sizes.s, android: 20 }),
          },
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
    left: sizes.m,
    position: 'absolute',
    zIndex: 2,
  },
  input: {
    ...fonts.archivo.semiBold,
    ...padding('left')('m'),
    ...padding('right')('xxxl'),
    fontSize: fontSizes.s.fontSize,
    minHeight: 62,
    borderRadius: sizes.m,
    color: colors.white,
    backgroundColor: colors.gray24,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: labelShift,
  },
});

export default Input;
