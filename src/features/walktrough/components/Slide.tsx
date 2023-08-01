import React, { FC } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { margin, padding } from '@styles/darkTheme';
import { TextArchivo } from '@common/components';
import { center } from '@styles/common';
import { Slide as SlideType } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  slide: SlideType;
}

const Slide: FC<Props> = (props) => {
  const { style, slide } = props;

  return (
    <View style={[center, padding('horizontal')('l'), style]}>
      <Image
        width={295}
        height={295}
        style={margin('bottom')('xxxl')}
        source={slide.imageSource}
      />
      <TextArchivo
        textAlign="center"
        tx={slide.title.tx}
        fontSize="xxl"
        fontWeight="bold"
        color="white"
      />
      <TextArchivo
        textAlign="center"
        tx={slide.description.tx}
        fontSize="xxl"
        fontWeight="bold"
        color="white"
      />
    </View>
  );
};

export default Slide;
