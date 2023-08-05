import { ViewStyle } from 'react-native';
import { padding } from '@styles/darkTheme';

export const footerStyle: ViewStyle = {
  ...padding('horizontal')('l'),
  ...padding('top')('xs'),
  ...padding('bottom')('xxl'),
};

export const contentStyle: ViewStyle = {
  ...padding('horizontal')('l'),
  ...padding('top')('l'),
  ...padding('bottom')('xs'),
};
