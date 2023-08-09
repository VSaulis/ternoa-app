import React, { FC, useMemo, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  ViewStyle,
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
    multiline,
    ...rest
  } = props;

  const ref = useRef<TextInput>(null);
  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const isLabelSmall = useMemo<boolean>(
    () => isFocused || !!value,
    [isFocused, value],
  );

  const dynamicInputStyle = useMemo<ViewStyle>(
    () => ({
      ...(!isLabelSmall && { display: 'none' }),
      ...(isLabelSmall && { minHeight: fontSizes.s.lineHeight }),
      ...(isLabelSmall && multiline && { lineHeight: 20 }),
    }),
    [isLabelSmall, multiline],
  );

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <FormControl
      containerStyle={styles.container}
      style={style}
      error={error}
      help={help}>
      <Pressable style={styles.content} onPress={() => ref.current?.focus()}>
        <Text
          style={padding('left')('m')}
          color="gray12"
          fontSize={isLabelSmall ? 'xs' : 's'}
          fontWeight={isLabelSmall ? 'regular' : 'semiBold'}>
          {label}
        </Text>
        <TextInput
          ref={ref}
          selectionColor={colors.white}
          keyboardAppearance="dark"
          textAlignVertical="center"
          value={value}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          secureTextEntry={isHidden}
          multiline={multiline}
          cursorColor={colors.white}
          onChangeText={onChange}
          style={[styles.input, dynamicInputStyle]}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.hideIcon}
            onPress={() => setIsHidden((prev) => !prev)}>
            <Svg size={24} color="white" name="eyeVisible" />
          </TouchableOpacity>
        )}
      </Pressable>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 64,
  },
  content: {
    ...flex1,
    ...padding('vertical')('xs'),
    justifyContent: 'center',
  },
  input: {
    ...fonts.archivo.semiBold,
    ...padding('left')('m'),
    ...padding('right')('xxxl'),
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: fontSizes.s.fontSize,
    color: colors.white,
    backgroundColor: colors.gray24,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: 20,
  },
});

export default Input;
