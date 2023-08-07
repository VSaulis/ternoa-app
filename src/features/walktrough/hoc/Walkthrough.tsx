import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { flex1 } from '@styles/common';
import { padding, sizes } from '@styles/darkTheme';
import { Button } from '@common/components';
import { useWalkthroughTranslations } from '@i18n/hooks';
import Swiper from 'react-native-swiper';
import { useAppDispatch } from '@core/redux-store/store';
import { completeWalkthrough } from '../storage';
import { setIsWalktroughCompleted } from '../slice';
import { slides } from '../constants';
import { PaginationDot, Slide } from '../components';

const Walkthrough: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useWalkthroughTranslations();

  const handleOnGetStartedPress = async () => {
    await completeWalkthrough();
    dispatch(setIsWalktroughCompleted(true));
  };

  return (
    <View style={flex1}>
      <Swiper
        horizontal
        loop={false}
        showsPagination
        dot={<PaginationDot color="gray18" />}
        activeDot={<PaginationDot color="primary5" />}
        paginationStyle={styles.pagination}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            subtitle={slide.subtitle}
            image={slide.image}
          />
        ))}
      </Swiper>
      <View
        style={[
          padding('horizontal')('l'),
          padding('top')('xs'),
          padding('bottom')('xxl'),
        ]}>
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
