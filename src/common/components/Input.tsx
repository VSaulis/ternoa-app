import React, { FC, useMemo, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  colors,
  fonts,
  fontSizes,
  margin,
  padding,
  sizes,
} from '@styles/darkTheme';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import hexToRgba from 'hex-to-rgba';
import Svg from './Svg';
import Text from './Text';

type InputProps = Omit<
  TextInputProps,
  | 'style'
  | 'placeholderTextColor'
  | 'placeholder'
  | 'keyboardAppearance'
  | 'onContentSizeChange'
  | 'onChange'
  | 'onChangeText'
>;

interface Props extends InputProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  error?: string;
  help?: string;
  onChange: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  const {
    style,
    secureTextEntry = false,
    label,
    value,
    onFocus,
    onBlur,
    error,
    help,
    onChange,
    ...rest
  } = props;

  const ref = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry);
  const [height, setHeight] = useState<number>(64);

  const isSmallLabel = useMemo<boolean>(
    () => !!value || isFocused,
    [isFocused, value],
  );

  const labelTopShift = useMemo<number>(
    () => (isSmallLabel ? sizes.s : sizes.s + sizes.xs),
    [isSmallLabel],
  );

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleOnBlue = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const updateHeight = (contentSize: { height: number }) => {
    setHeight(contentSize.height);
  };

  return (
    <View style={style}>
      <>
        <TextInput
          ref={ref}
          keyboardAppearance="dark"
          onBlur={handleOnBlue}
          onFocus={handleOnFocus}
          value={value}
          secureTextEntry={isHidden}
          cursorColor={colors.white}
          style={[
            styles.input,
            { height, borderColor: error ? colors.red5 : colors.gray22 },
          ]}
          onChangeText={onChange}
          onContentSizeChange={(e) => updateHeight(e.nativeEvent.contentSize)}
          {...rest}
        />
        <Text
          fontWeight={isSmallLabel ? 'regular' : 'semiBold'}
          fontSize={isSmallLabel ? 'xs' : 's'}
          onPress={() => ref.current?.focus()}
          style={[styles.label, { top: labelTopShift }]}
          color="gray12">
          {label}
        </Text>
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.hideIcon}
            onPress={() => setIsHidden((prev) => !prev)}>
            <Svg size={24} color="white" name="eyeVisible" />
          </TouchableOpacity>
        )}
      </>
      {!!help && (
        <Text
          fontWeight="regular"
          fontSize="xs"
          style={[margin('top')('xxs'), padding('left')('m')]}
          color="gray12">
          {help}
        </Text>
      )}
      {!!error && (
        <Text
          fontWeight="regular"
          fontSize="xs"
          style={[margin('top')('xxs'), padding('left')('m')]}
          color="red5">
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    left: sizes.m,
  },
  input: {
    ...fonts.archivo.semiBold,
    ...padding('left')('m'),
    ...padding('bottom')('s'),
    fontSize: fontSizes.s.fontSize,
    height: 64,
    paddingTop: 28,
    borderRadius: 16,
    color: colors.white,
    backgroundColor: hexToRgba(colors.black, 0),
    borderWidth: 1,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: sizes.s + sizes.xs,
  },
});

export default Input;
