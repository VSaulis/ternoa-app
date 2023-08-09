import { FlexStyle } from 'react-native';
import {
  Colors,
  Fonts,
  FontSizes,
  Gradients,
  Sizes,
  SpacingProperty,
} from './types';

export const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue1: '#E2F0FF',
  blue2: '#C5DFFF',
  blue3: '#A9CDFF',
  blue4: '#93BDFF',
  blue5: '#5f97ff',
  blue6: '#517DDB',
  blue7: '#385BB7',
  blue8: '#233E93',
  green1: '#EEFDE2',
  green2: '#D8FCC5',
  green3: '#BCF6A6',
  green4: '#A0ED8D',
  green5: '#76E268',
  green6: '#50C24C',
  green7: '#34A239',
  green8: '#21832D',
  yellow1: '#FFFACD',
  yellow2: '#FFF39B',
  yellow3: '#FFEB69',
  yellow4: '#FFE243',
  yellow5: '#FFD505',
  yellow6: '#DBB303',
  yellow7: '#B79202',
  yellow8: '#937301',
  red1: '#fdeded',
  red2: '#fbdadc',
  red3: '#f5a3a7',
  red4: '#ef6b72',
  red5: '#ea3943',
  red6: '#e8212b',
  red7: '#cb151e',
  red8: '#941016',
  turquoise1: '#DAFEE9',
  turquoise2: '#B5FDDB',
  turquoise3: '#8FFAD2',
  turquoise4: '#72F6D1',
  turquoise5: '#45F0D1',
  turquoise6: '#32CEC0',
  turquoise7: '#22ABAC',
  turquoise8: '#167F8B',
  primary1: '#D8EEFF',
  primary2: '#B1DBFF',
  primary3: '#8AC4FF',
  primary4: '#6DAFFF',
  primary5: '#3D8DFF',
  primary6: '#2C6DDB',
  primary7: '#1E50B7',
  primary8: '#133893',
  gray1: '#F3F5F7',
  gray2: '#E7EBEF',
  gray3: '#DAE0E7',
  gray4: '#CED6DF',
  gray5: '#C1CBD7',
  gray6: '#B4C0CF',
  gray7: '#A8B6C7',
  gray8: '#9BACBF',
  gray9: '#8FA2B7',
  gray10: '#8398AF',
  gray11: '#768EA7',
  gray12: '#6A84A0',
  gray13: '#5F7A95',
  gray14: '#587089',
  gray15: '#50657C',
  gray16: '#485B70',
  gray17: '#405064',
  gray18: '#384657',
  gray19: '#303C4B',
  gray20: '#28323E',
  gray21: '#202832',
  gray22: '#181E25',
  gray23: '#101419',
  gray24: '#080A0C',
  transparent: 'transparent',
};

export const gradients: Gradients = {
  gradient1: ['#70A2FF', '#54F0D1'],
  gradient2: ['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C'],
  gradient3: ['#76E268', '#FFD505'],
  gradient4: ['#FFD505', '#F44336'],
  gradient5: ['#70A2FF', '#72E5DA', '#72F6D1', '#76E268'],
  gradient6: ['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C'],
  gradient7: ['#70A2FF', '#72F6D1', '#76E268', '#FFD505', '#F76E64'],
  gradient8: ['#A9CDFF', '#72F6D1', '#A0ED8D', '#FED365', '#FAA49E'],
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
  xxxl: 56,
};

export const fonts: Fonts = {
  archivo: {
    regular: {
      fontFamily: 'Archivo-Regular',
    },
    semiBold: {
      fontFamily: 'Archivo-SemiBold',
    },
    bold: {
      fontFamily: 'Archivo-Bold',
    },
  },
};

export const fontSizes: FontSizes = {
  xxs: { fontSize: 10, lineHeight: 12 },
  xs: { fontSize: 12, lineHeight: 16 },
  s: { fontSize: 14, lineHeight: 24 },
  m: { fontSize: 16, lineHeight: 24 },
  l: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 24 },
  xxl: { fontSize: 40, lineHeight: 56 },
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
