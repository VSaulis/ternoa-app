import React, { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import {
  FlatList,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { center, flex1, rowCenter } from '@styles/common';
import { range } from 'lodash';
import { Svg } from '@common/components/index';
import { margin, padding, sizes } from '@styles/darkTheme';
import Stepper from './Stepper';

interface Props {
  style?: StyleProp<ViewStyle>;
  stepsCount: number;
  currentStep: number;
  onStepChange: (step: number) => void;
  onClose: () => void;
  renderStep: (step: number) => ReactNode;
}

const Wizard: FC<Props> = (props) => {
  const { style, onClose, renderStep, stepsCount, currentStep, onStepChange } =
    props;
  const ref = useRef<FlatList>(null);
  const { width } = useWindowDimensions();

  const scrollToStep = useCallback(() => {
    ref.current?.scrollToIndex({ index: currentStep });
  }, [currentStep]);

  useEffect(() => {
    scrollToStep();
  }, [scrollToStep]);

  const handleOnBack = useCallback(() => {
    currentStep === 0 ? onClose() : onStepChange(currentStep - 1);
  }, [currentStep, onClose, onStepChange]);

  const renderItem = useCallback(
    (index: number) => (
      <View style={[flex1, { width }]}>{renderStep(index)}</View>
    ),
    [renderStep, width],
  );

  return (
    <View style={[flex1, style]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleOnBack}>
          <Svg size={24} color="white" name="arrowLeftBack" />
        </TouchableOpacity>
        <Stepper
          style={[flex1, margin('horizontal')('xxxl')]}
          stepsCount={stepsCount}
          currentStep={currentStep}
        />
      </View>
      <FlatList
        scrollEnabled={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ index }) => renderItem(index)}
        data={range(stepsCount)}
        ref={ref}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...rowCenter,
    ...padding('left')('m'),
    paddingRight: sizes.l + sizes.m,
  },
});

export default Wizard;
