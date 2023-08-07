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
  paddingTop: top + 20,
});

const getHeaderRightContainerStyle = (top: number): ViewStyle => ({
  ...flexEnd,
  ...rowCenter,
  ...padding('right')('m'),
  paddingTop: top + 20,
});

const getHeaderTitleContainerStyle = (top: number): ViewStyle => ({
  paddingTop: top + 20,
});

const getHeaderStyle = (top: number): ViewStyle => ({
  height: top + 64,
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
  headerTitleContainerStyle: getHeaderTitleContainerStyle(top),
  headerStyle: getHeaderStyle(top),
  ...TransitionPresets.SlideFromRightIOS,
});
