import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { padding, sizes } from '@styles/darkTheme';
import { Button, Dot, View } from '@common/components';
import { useWalkthroughTranslations } from '@i18n/hooks';
import Swiper from 'react-native-swiper';
import { useAppDispatch } from '@core/redux-store/store';
import { completeWalkthrough } from '../storage';
import { setIsWalkthroughCompleted } from '../slice';
import { slides } from '../constants';
import { Slide } from '../components';

const Walkthrough: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useWalkthroughTranslations();

  const handleOnGetStartedPress = async () => {
    await completeWalkthrough();
    dispatch(setIsWalkthroughCompleted(true));
  };

  return (
    <View flex1>
      <Swiper
        horizontal
        loop={false}
        showsPagination
        dot={<Dot mh="xxxs" size={8} backgroundColor="gray18" />}
        activeDot={<Dot mh="xxxs" size={8} backgroundColor="primary5" />}
        paginationStyle={styles.pagination}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            heading={slide.heading}
            isReversed={slide.isReversed}
            subtitle={slide.subtitle}
            image={slide.image}
          />
        ))}
      </Swiper>
      <View ph="l" pt="xs" pb="xxl">
        <Button
          size="medium"
          label={t('Get Started')}
          variant="secondary"
          onPress={handleOnGetStartedPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    ...padding('horizontal')('s'),
    ...padding('vertical')('xs'),
    bottom: sizes.xs,
  },
});

export default Walkthrough;
