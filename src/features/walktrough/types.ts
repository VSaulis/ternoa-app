import { ImageSourcePropType } from 'react-native';

export interface Slide {
  title: string;
  subtitle: string;
  isReversed: boolean;
  image: ImageSourcePropType;
}
