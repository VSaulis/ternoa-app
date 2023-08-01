import React, { FC, useMemo } from 'react';
import { SvgProps } from 'react-native-svg';
import { IconName } from '@icons';
import { Colors } from '@styles/types';
import { colors } from '@styles/darkTheme';

import ArrowLeftBack from '@assets/svg/arrow-left-back.svg';
import EyeVisible from '@assets/svg/eye-visble.svg';
import Check from '@assets/svg/check.svg';

const icons: Record<IconName, FC<SvgProps>> = {
  arrowLeftBack: ArrowLeftBack,
  eyeVisible: EyeVisible,
  check: Check,
};

export interface SvgIconProps
  extends Omit<SvgProps, 'color' | 'width' | 'height' | 'disabled'> {
  name: IconName;
  color?: keyof Colors;
  size?: number;
  isEnabled?: boolean;
}

const Svg: FC<SvgIconProps> = (props) => {
  const { name, size, color = 'black', ...rest } = props;
  const Icon = useMemo(() => icons[name], [name]);

  return (
    <Icon disabled color={colors[color]} width={size} height={size} {...rest} />
  );
};

export default Svg;
