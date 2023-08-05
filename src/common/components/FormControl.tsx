import React, { FC, PropsWithChildren, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors, margin, sizes } from '@styles/darkTheme';
import hexToRgba from 'hex-to-rgba';
import Text from './Text';

export interface FormControlProps {
  style?: StyleProp<ViewStyle>;
  error?: string;
  help?: string;
}

const FormControl: FC<PropsWithChildren<FormControlProps>> = (props) => {
  const { style, error, help, children } = props;

  const borderColor = useMemo<string>(
    () => (error ? colors.red5 : colors.gray22),
    [error],
  );

  return (
    <View style={style}>
      <View style={[styles.container, { borderColor }]}>{children}</View>
      {!!help && (
        <Text
          fontWeight="regular"
          fontSize="xs"
          style={[margin('top')('xxs'), margin('left')('m')]}
          color="gray12">
          {help}
        </Text>
      )}
      {!!error && (
        <Text
          fontWeight="regular"
          fontSize="xs"
          style={[margin('top')('xxs'), margin('left')('m')]}
          color="red5">
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: sizes.m,
    backgroundColor: hexToRgba(colors.black, 0),
    borderWidth: 1,
  },
});

export default FormControl;
