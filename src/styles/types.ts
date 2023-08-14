export interface Colors {
  white: string;
  black: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  turquoise1: string;
  turquoise2: string;
  turquoise3: string;
  turquoise4: string;
  turquoise5: string;
  turquoise6: string;
  turquoise7: string;
  turquoise8: string;
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primary6: string;
  primary7: string;
  primary8: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  gray13: string;
  gray14: string;
  gray15: string;
  gray16: string;
  gray17: string;
  gray18: string;
  gray19: string;
  gray20: string;
  gray21: string;
  gray22: string;
  gray23: string;
  gray24: string;
  transparent: string;
}

export interface Gradients {
  gradient1: string[];
  gradient2: string[];
  gradient3: string[];
  gradient4: string[];
  gradient5: string[];
  gradient6: string[];
  gradient7: string[];
  gradient8: string[];
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
  xxs: FontSizeVariant;
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
    regular: FontVariant;
    semiBold: FontVariant;
    bold: FontVariant;
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
