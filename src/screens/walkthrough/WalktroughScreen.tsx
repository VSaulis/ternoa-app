import React, { FC } from 'react';
import { WalkthroughScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { Walkthrough } from '@features/walktrough/hoc';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';

const WalktroughScreen: FC<WalkthroughScreenProps> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <Walkthrough />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalktroughScreen;
