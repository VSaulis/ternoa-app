import React, { FC } from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { WalktroughScreen } from '@screens';
import AuthNavigator, { AuthParamList } from './AuthNavigator';
import MainNavigator, { MainParamList } from './MainNavigator';
import {
  authNavigatorRoute,
  mainNavigatorRoute,
  walkthroughRoute,
} from './types';
import { theme } from './theme';

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export type RootParamList = {
  [walkthroughRoute]: undefined;
  [authNavigatorRoute]: NavigatorScreenParams<AuthParamList>;
  [mainNavigatorRoute]: NavigatorScreenParams<MainParamList>;
};

const RootStack = createStackNavigator<RootParamList>();

const RootNavigator: FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={walkthroughRoute}>
        <RootStack.Group>
          <RootStack.Screen
            name={walkthroughRoute}
            component={WalktroughScreen}
          />
          <RootStack.Screen
            name={authNavigatorRoute}
            component={AuthNavigator}
          />
          <RootStack.Screen
            name={mainNavigatorRoute}
            component={MainNavigator}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
