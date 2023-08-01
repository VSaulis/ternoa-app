import { colors, fonts, fontSizes, padding } from '@styles/darkTheme';
import { flexEnd, flexStart, rowCenter } from '@styles/common';
import { StackNavigationOptions } from '@react-navigation/stack';
import { TextStyle, ViewStyle } from 'react-native';
import { StackHeaderLeft } from './components';

const headerTitleStyle: TextStyle = {
  ...fonts.archivo.semiBold,
  ...fontSizes.m,
  color: colors.white,
};

const getHeaderLeftContainerStyle = (top: number): ViewStyle => ({
  ...flexStart,
  ...rowCenter,
  ...padding('left')('m'),
  paddingTop: top,
});

const getHeaderRightContainerStyle = (top: number): ViewStyle => ({
  ...flexEnd,
  ...rowCenter,
  ...padding('right')('m'),
  paddingTop: top,
});

const getHeaderStyle = (top: number): ViewStyle => ({
  height: top + 40,
  backgroundColor: colors.background,
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
});
