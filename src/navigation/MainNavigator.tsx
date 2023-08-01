import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WalktroughScreen } from '@screens';
import { walkthroughRoute } from './types';

export type MainParamList = {
  [walkthroughRoute]: undefined;
};

const MainStack = createStackNavigator<MainParamList>();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={walkthroughRoute}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={walkthroughRoute}
        component={WalktroughScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
