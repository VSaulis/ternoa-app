import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { flex1 } from '@styles/common';
import { colors } from '@styles/darkTheme';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ScreenContainer: FC<PropsWithChildren<Props>> = (props) => {
  const { children, style } = props;

  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.background,
  },
});

export default ScreenContainer;
