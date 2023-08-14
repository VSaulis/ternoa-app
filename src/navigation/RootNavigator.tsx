import React, { FC } from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { WalkthroughScreen } from '@screens';
import { useAppSelector } from '@core/redux-store/store';
import { selectIsWalkthroughCompleted } from '@features/walkthrough/selectors';
import { selectIsHasAddress } from '@features/wallets/selectors';
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
  const isWalkthroughCompleted = useAppSelector(selectIsWalkthroughCompleted);
  const isHasAddress = useAppSelector(selectIsHasAddress);

  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator
        screenOptions={screenOptions}
        initialRouteName={walkthroughRoute}>
        <RootStack.Group>
          {!isWalkthroughCompleted && (
            <RootStack.Screen
              name={walkthroughRoute}
              component={WalkthroughScreen}
            />
          )}
          {isHasAddress ? (
            <RootStack.Screen
              name={mainNavigatorRoute}
              component={MainNavigator}
            />
          ) : (
            <RootStack.Screen
              name={authNavigatorRoute}
              component={AuthNavigator}
            />
          )}
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
