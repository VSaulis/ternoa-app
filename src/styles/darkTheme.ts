import { FlexStyle } from 'react-native';
import { Colors, Fonts, FontSizes, Sizes, SpacingProperty } from './types';

export const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  background: '#080A0C',
  primary: '#3D8DFF',
  grey23: '#101419',
  grey22: '#181E25',
  grey21: '#202832',
  grey18: '#384657',
  grey12: '#6A84A0',
  grey9: '#8FA2B7',
  blue5: '#5F97FF',
  lightBlue: '#8AD4EC',
  purple: '#EF96FF',
  pink: '#FF56A9',
  orange: '#FFAA6C',
};

export const sizes: Sizes = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 36,
  xxl: 42,
  xxxl: 48,
};

export const fontSizes: FontSizes = {
  xs: { fontSize: 12, lineHeight: 16 },
  s: { fontSize: 14, lineHeight: 24 },
  m: { fontSize: 16, lineHeight: 24 },
  l: { fontSize: 18, lineHeight: 22 },
  xl: { fontSize: 20, lineHeight: 24 },
  xxl: { fontSize: 40, lineHeight: 56 },
};

export const fonts: Fonts = {
  archivo: {
    thin: {
      fontFamily: 'Archivo-Thin',
    },
    extraLight: {
      fontFamily: 'Archivo-ExtraLight',
    },
    light: {
      fontFamily: 'Archivo-Light',
    },
    regular: {
      fontFamily: 'Archivo-Regular',
    },
    medium: {
      fontFamily: 'Archivo-Medium',
    },
    semiBold: {
      fontFamily: 'Archivo-SemiBold',
    },
    bold: {
      fontFamily: 'Archivo-Bold',
    },
    extraBold: {
      fontFamily: 'Archivo-ExtraBold',
    },
    black: {
      fontFamily: 'Archivo-Black',
    },
  },
};

const paddingPropertyMap: Record<SpacingProperty, keyof FlexStyle> = {
  full: 'padding',
  top: 'paddingTop',
  left: 'paddingLeft',
  right: 'paddingRight',
  bottom: 'paddingBottom',
  vertical: 'paddingVertical',
  horizontal: 'paddingHorizontal',
};

const marginPropertyMap: Record<SpacingProperty, keyof FlexStyle> = {
  full: 'margin',
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
  vertical: 'marginVertical',
  horizontal: 'marginHorizontal',
};

export const padding = (property: SpacingProperty) => (key: keyof Sizes) => {
  return { [paddingPropertyMap[property]]: sizes[key] };
};

export const margin = (property: SpacingProperty) => (key: keyof Sizes) => {
  return { [marginPropertyMap[property]]: sizes[key] };
};
