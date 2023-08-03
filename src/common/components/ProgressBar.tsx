import React, { FC, useCallback } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import range from 'lodash/range';
import { center, flex1, rowCenter } from '@styles/common';
import { colors, margin, sizes } from '@styles/darkTheme';
import { Colors } from '@styles/types';

interface Props {
  style?: StyleProp<ViewStyle>;
  total: number;
  value: number;
  width?: number;
  color?: keyof Colors;
}

const ProgressBar: FC<Props> = (props) => {
  const { style, total, width, value, color = 'green5' } = props;
  const isLast = useCallback((step: number) => step === total - 1, [total]);

  return (
    <View style={[styles.container, { width }, style]}>
      {range(total).map((step) => (
        <View
          style={[
            styles.stepContainer,
            step <= value - 1 && { backgroundColor: colors[color] },
            !isLast(step) && margin('right')('xs'),
          ]}
          key={step}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    height: 24,
  },
  stepContainer: {
    ...flex1,
    ...center,
    height: 2,
    backgroundColor: colors.gray23,
    borderRadius: sizes.xxxs,
  },
});

export default ProgressBar;
