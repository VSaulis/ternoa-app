import React, { FC, useMemo } from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import { Colors, Fonts, FontSizes } from '@styles/types';
import { colors, fonts, fontSizes } from '@styles/darkTheme';

export interface TextProps extends RNTextProps {
  fontSize?: keyof FontSizes;
  fontWeight?: keyof Fonts['archivo'];
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  color?: keyof Colors;
}

const Text: FC<TextProps> = (props) => {
  const {
    fontSize = 'm',
    fontWeight = 'regular',
    textDecorationLine = 'none',
    color = 'white',
    textAlign = 'auto',
    style,
    children,
    ...rest
  } = props;

  const themedStyle = useMemo<TextStyle>(
    () => ({
      color: colors[color],
      textAlign,
      textDecorationLine,
      ...fonts.archivo[fontWeight],
      ...fontSizes[fontSize],
    }),
    [color, textAlign, fontWeight, textDecorationLine, fontSize],
  );

  return (
    <RNText style={[themedStyle, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
