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
import { Trans } from 'react-i18next';
import { Text, TextGradient } from '@common/components';

interface Props {
  style?: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
  label: string;
}

const Slide: FC<PropsWithChildren<Props>> = (props) => {
  const { style, image, label } = props;

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
          <Trans
            ns="walktrough"
            i18nKey={label}
            components={{
              gradient: (
                <TextGradient
                  style={styles.gradientText}
                  fontWeight="bold"
                  textAlign="center"
                  fontSize="xxl"
                  gradient="gradient6"
                />
              ),
            }}
          />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: fontSizes.xxl.lineHeight * 2,
    marginBottom: 104,
  },
  gradientText: {
    transform: [
      { translateY: (fontSizes.xxl.lineHeight - fontSizes.xxl.fontSize) / 2 },
    ],
  },
});

export default Slide;
