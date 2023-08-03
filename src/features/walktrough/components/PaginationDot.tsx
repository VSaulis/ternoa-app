import React, { FC } from 'react';
import { Colors } from '@styles/types';
import { Dot } from '@common/components';
import { margin } from '@styles/darkTheme';

interface Props {
  color: keyof Colors;
}

const PaginationDot: FC<Props> = (props) => {
  const { color } = props;
  return <Dot style={margin('horizontal')('xxxs')} size={8} color={color} />;
};

export default PaginationDot;
