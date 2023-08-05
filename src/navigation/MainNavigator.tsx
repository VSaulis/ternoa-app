import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsScreen } from '@screens';
import { transactionsRoute } from './types';

export type MainParamList = {
  [transactionsRoute]: undefined;
};

const MainStack = createStackNavigator<MainParamList>();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={transactionsRoute}>
      <MainStack.Screen
        options={{ headerShown: false }}
        name={transactionsRoute}
        component={TransactionsScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
