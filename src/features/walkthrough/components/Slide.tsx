import React, { FC, PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { fontSizes } from '@styles/darkTheme';
import { Text, TextGradient, View } from '@common/components';
import { useWalkthroughTranslations } from '@i18n/hooks';

interface Props {
  style?: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
  heading: string;
  subtitle: string;
  isReversed?: boolean;
}

const Slide: FC<PropsWithChildren<Props>> = (props) => {
  const { style, image, subtitle, isReversed = false, heading } = props;
  const { t } = useWalkthroughTranslations();

  return (
    <View center flex1 pt="xl" ph="l" style={[styles.container, style]}>
      <View center flex1>
        <Image width={295} height={295} source={image} />
      </View>
      <View
        style={[
          styles.textContainer,
          isReversed && styles.reverseTextContainer,
        ]}>
        <Text
          fontWeight="regular"
          fontSize="xxl"
          textAlign="center"
          color="white">
          {isReversed ? t(subtitle) : t(heading)}
        </Text>
        <TextGradient
          fontWeight="bold"
          textAlign="center"
          fontSize="xxl"
          gradient="gradient6">
          {isReversed ? t(heading) : t(subtitle)}
        </TextGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 104,
  },
  textContainer: {
    height: fontSizes.xxl.lineHeight * 2,
  },
  reverseTextContainer: {
    flexDirection: 'column-reverse',
  },
});

export default Slide;
