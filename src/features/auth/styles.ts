import { ViewStyle } from 'react-native';
import { padding } from '@styles/darkTheme';

export const slideFooterStyle: ViewStyle = {
  ...padding('horizontal')('l'),
  ...padding('top')('xs'),
  ...padding('bottom')('xxl'),
};

export const slideContentStyle: ViewStyle = {
  ...padding('horizontal')('l'),
  ...padding('top')('l'),
  ...padding('bottom')('xs'),
};
