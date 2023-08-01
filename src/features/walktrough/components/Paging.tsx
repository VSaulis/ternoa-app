import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { margin } from '@styles/darkTheme';
import { range } from 'lodash';
import { center, rowCenter } from '@styles/common';
import Dot from '@common/components/Dot';

interface Props {
  pagesCount: number;
  currentPage: number;
  style?: StyleProp<ViewStyle>;
}

const Paging: FC<Props> = (props) => {
  const { style, currentPage, pagesCount } = props;

  return (
    <View style={[center, rowCenter, style]}>
      {range(0, pagesCount).map((page) => (
        <Dot
          size={8}
          color={page === currentPage ? 'primary' : 'grey18'}
          key={page}
          style={margin('horizontal')('xxxs')}
        />
      ))}
    </View>
  );
};

export default Paging;
