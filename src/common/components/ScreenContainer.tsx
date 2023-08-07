import React, { FC, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { flex1 } from '@styles/common';
import { colors } from '@styles/darkTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ScreenContainer: FC<PropsWithChildren<Props>> = (props) => {
  const { children, style } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.gray24,
  },
});

export default ScreenContainer;
