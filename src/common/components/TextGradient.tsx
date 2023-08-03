import React, { FC } from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { Gradients } from '@styles/types';
import { gradients } from '@styles/darkTheme';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Text, { TextProps } from './Text';

interface Props extends Omit<TextProps, 'color' | 'style'> {
  gradient?: keyof Gradients;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const TextGradient: FC<Props> = (props) => {
  const { gradient = 'gradient1', textStyle, style, ...rest } = props;

  return (
    <MaskedView
      androidRenderingMode="hardware"
      style={style}
      maskElement={<Text {...rest} />}>
      <LinearGradient
        colors={gradients[gradient]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text {...rest} style={[styles.text, textStyle]} />
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  text: {
    opacity: 0,
  },
});

export default TextGradient;
