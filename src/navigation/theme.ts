import { DefaultTheme } from '@react-navigation/native';
import { colors } from '@styles/darkTheme';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};
