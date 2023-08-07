import React, { FC, PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { fontSizes, padding } from '@styles/darkTheme';
import { center, flex1 } from '@styles/common';
import { Text, TextGradient } from '@common/components';
import { useWalkthroughTranslations } from '@i18n/hooks';

interface Props {
  style?: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  isReversed?: boolean;
}

const Slide: FC<PropsWithChildren<Props>> = (props) => {
  const { style, image, title, subtitle, isReversed = false } = props;
  const { t } = useWalkthroughTranslations();

  return (
    <View style={[flex1, center, padding('horizontal')('l'), style]}>
      <View style={[flex1, center]}>
        <Image width={295} height={295} source={image} />
      </View>
      <View style={styles.textContainer}>
        <Text
          fontWeight="regular"
          fontSize="xxl"
          textAlign="center"
          color="white">
          {t(title)}
        </Text>
        <TextGradient
          fontWeight="bold"
          textAlign="center"
          fontSize="xxl"
          gradient="gradient6">
          {t(subtitle)}
        </TextGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: fontSizes.xxl.lineHeight * 2,
    marginBottom: 104,
  },
});

export default Slide;
