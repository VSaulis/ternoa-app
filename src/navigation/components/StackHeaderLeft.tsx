import React, { FC } from 'react';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import { TouchableOpacity } from 'react-native';
import { Svg } from '@common/components';

const StackHeaderLeft: FC<HeaderBackButtonProps> = (props) => {
  const { canGoBack, onPress } = props;

  if (!canGoBack) {
    return <></>;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Svg size={24} color="white" name="arrowLeftBack" />
    </TouchableOpacity>
  );
};

export default StackHeaderLeft;
