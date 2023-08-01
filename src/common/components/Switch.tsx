import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from '@styles/darkTheme';
import { Switch as RNSwitch } from 'react-native-switch';

export interface SwitchProps {
  value?: boolean | null;
  style?: StyleProp<ViewStyle>;
  onChange?: (isOn: boolean) => void;
  isDisabled?: boolean;
}

const Switch: FC<SwitchProps> = (props) => {
  const { value, style, onChange, isDisabled } = props;

  return (
    <View style={style}>
      <RNSwitch
        value={value ?? undefined}
        onValueChange={onChange}
        disabled={isDisabled}
        circleSize={24}
        barHeight={32}
        circleBorderWidth={0}
        backgroundActive={colors.primary}
        backgroundInactive={colors.grey18}
        circleActiveColor={colors.white}
        circleInActiveColor={colors.white}
        changeValueImmediately
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={1.5}
        switchRightPx={1.5}
        switchWidthMultiplier={68 / 24}
        switchBorderRadius={16}
      />
    </View>
  );
};

export default Switch;
