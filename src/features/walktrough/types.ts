import { ImageSourcePropType } from 'react-native';

export interface SlideText {
  tx: string;
  isGradient: boolean;
}

export interface Slide {
  imageSource: ImageSourcePropType;
  title: SlideText;
  description: SlideText;
}
