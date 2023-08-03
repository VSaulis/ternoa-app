import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WalletsScreen } from '@screens';
import { walletsRoute } from './types';

export type MainParamList = {
  [walletsRoute]: undefined;
};

const MainStack = createStackNavigator<MainParamList>();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={walletsRoute}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={walletsRoute}
        component={WalletsScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
