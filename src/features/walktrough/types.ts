import { ImageSourcePropType } from 'react-native';

export interface Slide {
  heading: string;
  subtitle: string;
  isReversed: boolean;
  image: ImageSourcePropType;
}
