import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  useWindowDimensions,
  View,
  ViewabilityConfigCallbackPairs,
  ViewToken,
} from 'react-native';
import { flex1 } from '@styles/common';
import { margin, padding } from '@styles/darkTheme';
import { slides } from '@features/walktrough/constants';
import { Button } from '@common/components';
import { Paging, Slide } from '../components';
import { Slide as SlideType } from '../types';

interface Props {
  onComplete: () => void;
}

const Walkthrough: FC<Props> = (props) => {
  const { onComplete } = props;
  const ref = useRef<FlatList>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { width } = useWindowDimensions();

  const isLastSlide = useMemo<boolean>(
    () => currentSlide === slides.length - 1,
    [currentSlide],
  );

  const renderItem = (info: ListRenderItemInfo<SlideType>) => {
    const { item } = info;
    return <Slide style={{ width }} slide={item} />;
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    const [viewableItem] = viewableItems;
    if (viewableItem && viewableItem.index !== null) {
      setCurrentSlide(viewableItem.index);
    }
  };

  const handleOnNextPress = useCallback(async () => {
    if (isLastSlide) {
      onComplete();
      return;
    }

    ref.current?.scrollToIndex({ index: currentSlide + 1, animated: true });
  }, [currentSlide, isLastSlide, onComplete]);

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [
      {
        onViewableItemsChanged,
        viewabilityConfig: { viewAreaCoveragePercentThreshold: 90 },
      },
    ],
  );

  return (
    <View style={[flex1, padding('vertical')('xxl')]}>
      <FlatList
        ref={ref}
        initialScrollIndex={currentSlide}
        showsHorizontalScrollIndicator={false}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <View style={[padding('horizontal')('l')]}>
        <Paging
          style={margin('bottom')('l')}
          pagesCount={slides.length}
          currentPage={currentSlide}
        />
        <Button
          size="small"
          tx="walktrough.get_start"
          variant="secondary"
          onPress={handleOnNextPress}
        />
      </View>
    </View>
  );
};

export default Walkthrough;
