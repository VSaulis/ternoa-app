import React, { FC } from 'react';
import { authNavigatorRoute, WalkthroughScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { Walkthrough } from '@features/walktrough/hoc';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from '@navigation/RootNavigator';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';

const WalktroughScreen: FC<WalkthroughScreenProps> = () => {
  const { reset } = useNavigation<StackNavigationProp<RootParamList>>();

  const handleOnComplete = () => {
    reset({ index: 0, routes: [{ name: authNavigatorRoute }] });
  };

  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <Walkthrough onComplete={handleOnComplete} />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default WalktroughScreen;
