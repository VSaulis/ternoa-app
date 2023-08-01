export interface Colors {
  white: string;
  black: string;
  background: string;
  primary: string;
  grey23: string;
  grey22: string;
  grey21: string;
  grey18: string;
  grey12: string;
  grey9: string;
  blue5: string;
  lightBlue: string;
  purple: string;
  pink: string;
  orange: string;
}

export interface Sizes {
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface FontSizeVariant {
  lineHeight: number;
  fontSize: number;
}

export interface FontSizes {
  xs: FontSizeVariant;
  s: FontSizeVariant;
  m: FontSizeVariant;
  l: FontSizeVariant;
  xl: FontSizeVariant;
  xxl: FontSizeVariant;
}

export interface FontVariant {
  fontFamily: string;
}

export interface Fonts {
  archivo: {
    thin: FontVariant;
    extraLight: FontVariant;
    light: FontVariant;
    regular: FontVariant;
    medium: FontVariant;
    semiBold: FontVariant;
    bold: FontVariant;
    extraBold: FontVariant;
    black: FontVariant;
  };
}

export type SpacingProperty =
  | 'full'
  | 'top'
  | 'right'
  | 'left'
  | 'bottom'
  | 'horizontal'
  | 'vertical';
