import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import range from 'lodash/range';
import { rowCenter } from '@styles/common';
import { colors } from '@styles/darkTheme';
import Dot from './Dot';

interface Props {
  style?: StyleProp<ViewStyle>;
  stepsCount: number;
  currentStep: number;
}

const Stepper: FC<Props> = (props) => {
  const { style, currentStep, stepsCount } = props;

  const progressBarWidth = useMemo<number>(
    () => (currentStep / stepsCount) * 100,
    [currentStep, stepsCount],
  );

  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
      </View>
      {range(stepsCount).map((page) => (
        <Dot
          color={page <= currentStep ? 'primary5' : 'gray21'}
          size={8}
          key={page}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    position: 'relative',
    justifyContent: 'space-between',
  },
  progressBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: colors.gray21,
  },
  progressBar: {
    height: 1,
    backgroundColor: colors.primary5,
  },
});

export default Stepper;
