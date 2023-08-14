import React, { FC, useMemo } from 'react';
import { ViewStyle } from 'react-native';
import View, { ViewProps } from './View';

interface Props extends ViewProps {
  size: number;
}

const Dot: FC<Props> = (props) => {
  const { size, style, ...rest } = props;

  const dynamicStyle = useMemo<ViewStyle>(
    () => ({
      height: size,
      width: size,
      borderRadius: size / 2,
    }),
    [size],
  );

  return <View center {...rest} style={[dynamicStyle, style]} />;
};

export default Dot;
