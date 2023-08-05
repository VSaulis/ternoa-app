import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CreateNewWalletScreen,
  ImportWalletScreen,
  WalletCreationSuccessScreen,
  WalletSetupScreen,
} from '@screens';
import { getStackScreenOptions } from '@navigation/options';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationTranslations } from '@i18n/hooks';
import {
  createNewWalletRoute,
  importWalletRoute,
  walletCreationSuccessRoute,
  walletSetupRoute,
} from './types';

export type AuthParamList = {
  [walletSetupRoute]: undefined;
  [importWalletRoute]: undefined;
  [createNewWalletRoute]: undefined;
  [walletCreationSuccessRoute]: undefined;
};

const AuthStack = createStackNavigator<AuthParamList>();

const AuthNavigator: FC = () => {
  const { t } = useNavigationTranslations();
  const { top } = useSafeAreaInsets();

  return (
    <AuthStack.Navigator
      screenOptions={getStackScreenOptions(top)}
      initialRouteName={walletSetupRoute}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={walletSetupRoute}
        component={WalletSetupScreen}
      />
      <AuthStack.Screen
        options={{ title: t('Import From Seed') }}
        name={importWalletRoute}
        component={ImportWalletScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={createNewWalletRoute}
        component={CreateNewWalletScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={walletCreationSuccessRoute}
        component={WalletCreationSuccessScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
