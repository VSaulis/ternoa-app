import { colors, padding, typographies } from '@styles/darkTheme';
import { flexEnd, flexStart, rowCenter } from '@styles/common';
import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import { TextStyle, ViewStyle } from 'react-native';
import { StackHeaderLeft } from './components';

const headerTitleStyle: TextStyle = {
  ...typographies.paragraphSemiBold,
  color: colors.white,
};

const getHeaderLeftContainerStyle = (top: number): ViewStyle => ({
  ...flexStart,
  ...rowCenter,
  ...padding('left')('m'),
});

const getHeaderRightContainerStyle = (top: number): ViewStyle => ({
  ...flexEnd,
  ...rowCenter,
  ...padding('right')('m'),
});

const getHeaderStyle = (top: number): ViewStyle => ({
  backgroundColor: colors.gray24,
});

export const getStackScreenOptions = (top: number): StackNavigationOptions => ({
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle,
  headerLeft: StackHeaderLeft,
  headerLeftContainerStyle: getHeaderLeftContainerStyle(top),
  headerRightContainerStyle: getHeaderRightContainerStyle(top),
  headerStyle: getHeaderStyle(top),
  ...TransitionPresets.SlideFromRightIOS,
});
