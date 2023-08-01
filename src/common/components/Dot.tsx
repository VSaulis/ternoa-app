import React, { FC, useMemo } from 'react';
import { Colors } from '@styles/types';
import { StyleProp, View, ViewStyle } from 'react-native';
import { colors } from '@styles/darkTheme';
import { center } from '@styles/common';

interface Props {
  size: number;
  color: keyof Colors;
  style?: StyleProp<ViewStyle>;
}

const Dot: FC<Props> = (props) => {
  const { size, style, color } = props;

  const dynamicStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor: colors[color],
      height: size,
      width: size,
      borderRadius: size / 2,
    }),
    [size, color],
  );

  return <View style={[center, dynamicStyle, style]} />;
};

export default Dot;
