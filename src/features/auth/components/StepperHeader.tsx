import React, { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { margin, padding, sizes } from '@styles/darkTheme';
import { flex1, rowCenter } from '@styles/common';
import Stepper from '@common/components/Stepper';
import { Svg } from '@common/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  style?: StyleProp<ViewStyle>;
  canGoBack: boolean;
  onBack: () => void;
  step: number;
}

const StepperHeader: FC<Props> = (props) => {
  const { style, onBack, canGoBack, step } = props;
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: 20 + top }, style]}>
      {canGoBack && (
        <TouchableOpacity onPress={onBack}>
          <Svg size={24} color="white" name="arrowLeftBack" />
        </TouchableOpacity>
      )}
      <Stepper
        style={[flex1, margin('horizontal')('xl')]}
        stepsCount={3}
        currentStep={step}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...padding('horizontal')('m'),
    paddingRight: sizes.l + sizes.m,
    height: 44,
  },
});

export default StepperHeader;
