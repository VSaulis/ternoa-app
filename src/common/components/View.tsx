import React, { FC, useMemo } from 'react';
import {
  View as RNView,
  ViewProps as RNViewProps,
  ViewStyle,
} from 'react-native';
import { Colors, Sizes } from '@styles/types';
import { colors, sizes } from '@styles/darkTheme';
import { center as centerStyle, flex1 as flex1Style } from '@styles/common';

export interface ViewProps extends RNViewProps {
  backgroundColor?: keyof Colors;
  borderRadius?: keyof Sizes;
  flex1?: boolean;
  center?: boolean;
  mb?: keyof Sizes;
  mh?: keyof Sizes;
  ph?: keyof Sizes;
  pv?: keyof Sizes;
  pt?: keyof Sizes;
  pb?: keyof Sizes;
  p?: keyof Sizes;
}

const View: FC<ViewProps> = (props) => {
  const {
    backgroundColor = 'gray24',
    style,
    children,
    mb,
    mh,
    ph,
    pv,
    pt,
    pb,
    borderRadius,
    p,
    flex1,
    center,
    ...rest
  } = props;

  const themedStyle = useMemo<ViewStyle>(
    () => ({
      backgroundColor: colors[backgroundColor],
      ...(mb && { marginBottom: sizes[mb] }),
      ...(mh && { marginHorizontal: sizes[mh] }),
      ...(ph && { paddingHorizontal: sizes[ph] }),
      ...(pt && { paddingTop: sizes[pt] }),
      ...(pb && { paddingBottom: sizes[pb] }),
      ...(pv && { paddingVertical: sizes[pv] }),
      ...(p && { padding: sizes[p] }),
      ...(borderRadius && { borderRadius: sizes[borderRadius] }),
      ...(flex1 && { ...flex1Style }),
      ...(center && { ...centerStyle }),
    }),
    [backgroundColor, mb, ph, pv, pt, pb, p, borderRadius, mh, flex1, center],
  );

  return (
    <RNView style={[themedStyle, style]} {...rest}>
      {children}
    </RNView>
  );
};

export default View;
