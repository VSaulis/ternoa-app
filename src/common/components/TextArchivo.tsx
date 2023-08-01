import React, { FC, useMemo } from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { Colors, Fonts, FontSizes } from '@styles/types';
import { colors, fonts, fontSizes } from '@styles/darkTheme';
import { useTranslation } from 'react-i18next';

interface Props extends TextProps {
  fontSize?: keyof FontSizes;
  fontWeight?: keyof Fonts['archivo'];
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  color?: keyof Colors;
  tx: string;
}

const TextArchivo: FC<Props> = (props) => {
  const {
    tx,
    fontSize = 'm',
    color = 'black',
    fontWeight = 'regular',
    textAlign = 'auto',
    textDecorationLine = 'none',
    style,
    children,
    ...rest
  } = props;

  const { t } = useTranslation();

  const themedStyle = useMemo<TextStyle>(
    () => ({
      color: colors[color],
      textAlign,
      textDecorationLine,
      ...fonts.archivo[fontWeight],
      ...fontSizes[fontSize],
    }),
    [fontSize, color, fontWeight, textAlign, textDecorationLine],
  );

  return (
    <RNText style={[themedStyle, style]} {...rest}>
      {t(tx)}
      {children}
    </RNText>
  );
};

export default TextArchivo;
