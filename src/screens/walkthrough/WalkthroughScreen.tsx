import React, { FC } from 'react';
import { WalkthroughScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { Walkthrough } from '@features/walkthrough/hoc';

const WalkthroughScreen: FC<WalkthroughScreenProps> = () => {
  return (
    <ScreenContainer>
      <Walkthrough />
    </ScreenContainer>
  );
};

export default WalkthroughScreen;
