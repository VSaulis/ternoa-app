import { colors, fonts, fontSizes, padding } from '@styles/darkTheme';
import { flexEnd, flexStart, rowCenter } from '@styles/common';
import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import { TextStyle, ViewStyle } from 'react-native';
import { StackHeaderLeft } from './components';

const headerTitleStyle: TextStyle = {
  ...fontSizes.s,
  ...fonts.archivo.semiBold,
  color: colors.white,
};

const headerLeftContainerStyle: ViewStyle = {
  ...flexStart,
  ...rowCenter,
  ...padding('left')('m'),
};

const headerRightContainerStyle: ViewStyle = {
  ...flexEnd,
  ...rowCenter,
  ...padding('right')('m'),
};

const headerStyle: ViewStyle = {
  backgroundColor: colors.gray24,
};

export const stackScreenOptions: StackNavigationOptions = {
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle,
  headerLeft: StackHeaderLeft,
  headerLeftContainerStyle,
  headerRightContainerStyle,
  headerStyle,
  ...TransitionPresets.SlideFromRightIOS,
};
