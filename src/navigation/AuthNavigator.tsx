import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CreateNewWalletScreen,
  ImportFromSeedScreen,
  SetupScreen,
} from '@screens';
import { useTranslation } from 'react-i18next';
import { getStackScreenOptions } from '@navigation/options';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNewWalletRoute, importFromSeedRoute, setupRoute } from './types';

export type AuthParamList = {
  [setupRoute]: undefined;
  [importFromSeedRoute]: undefined;
  [createNewWalletRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthParamList>();

const AuthNavigator: FC = () => {
  const { t } = useTranslation();
  const { top } = useSafeAreaInsets();

  return (
    <AuthStack.Navigator
      screenOptions={getStackScreenOptions(top)}
      initialRouteName={setupRoute}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={setupRoute}
        component={SetupScreen}
      />
      <AuthStack.Screen
        options={{ title: t('navigation.import_from_seed') }}
        name={importFromSeedRoute}
        component={ImportFromSeedScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={createNewWalletRoute}
        component={CreateNewWalletScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
