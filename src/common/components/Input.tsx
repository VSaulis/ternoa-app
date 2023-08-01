import React, { FC, ReactNode, useMemo, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { colors, fonts, fontSizes, padding, sizes } from '@styles/darkTheme';
import { useTranslation } from 'react-i18next';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import Svg from './Svg';
import TextArchivo from './TextArchivo';

interface Props
  extends Omit<
    TextInputProps,
    'style' | 'placeholderTextColor' | 'placeholder' | 'keyboardAppearance'
  > {
  style?: ViewStyle;
  labelTx: string;
  Help?: ReactNode;
}

const Input: FC<Props> = (props) => {
  const {
    style,
    secureTextEntry = false,
    labelTx,
    value,
    onFocus,
    onBlur,
    Help,
    ...rest
  } = props;

  const ref = useRef<TextInput>(null);
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry);

  const isSmallLabel = useMemo<boolean>(
    () => !!value || isFocused,
    [isFocused, value],
  );

  const dynamicLabelStyle = useMemo<TextStyle>(
    () => ({
      top: isSmallLabel ? sizes.s : sizes.s + sizes.xs,
      ...(isSmallLabel ? fontSizes.xs : fontSizes.s),
    }),
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

  return (
    <View style={style}>
      <View>
        <TextArchivo
          onPress={() => ref.current?.focus()}
          style={[styles.label, dynamicLabelStyle]}
          fontWeight="regular"
          color="grey12"
          tx={t(labelTx)}
        />
        <TextInput
          ref={ref}
          keyboardAppearance="dark"
          onBlur={handleOnBlue}
          onFocus={handleOnFocus}
          value={value}
          secureTextEntry={isHidden}
          cursorColor={colors.white}
          style={styles.input}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.hideIcon}
            onPress={() => setIsHidden((prev) => !prev)}>
            <Svg size={24} color="white" name="eyeVisible" />
          </TouchableOpacity>
        )}
      </View>
      {!!Help && Help}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    left: sizes.m,
    zIndex: 2,
  },
  input: {
    ...fonts.archivo.semiBold,
    ...fontSizes.s,
    ...padding('horizontal')('m'),
    ...padding('bottom')('s'),
    height: 64,
    paddingTop: 28,
    borderRadius: 16,
    color: colors.white,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.grey22,
  },
  hideIcon: {
    position: 'absolute',
    right: sizes.m,
    top: sizes.s + sizes.xs,
  },
});

export default Input;
