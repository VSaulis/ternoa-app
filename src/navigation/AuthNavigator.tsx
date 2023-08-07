import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  CreatePasswordScreen,
  ImportWalletScreen,
  SecureWalletDescriptionScreen,
  SeedConfirmationScreen,
  SeedDescriptionScreen,
  SeedPreviewScreen,
  WalletCreationSuccessScreen,
  WalletSetupScreen,
} from '@screens';
import { getStackScreenOptions } from '@navigation/options';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationTranslations } from '@i18n/hooks';
import {
  createPasswordRoute,
  importWalletRoute,
  secureWalletDescriptionRoute,
  seedConfirmationRoute,
  seedDescriptionRoute,
  seedPreviewRoute,
  walletCreationSuccessRoute,
  walletSetupRoute,
} from './types';

export type AuthParamList = {
  [walletSetupRoute]: undefined;
  [importWalletRoute]: undefined;
  [createPasswordRoute]: undefined;
  [secureWalletDescriptionRoute]: { password: string };
  [seedDescriptionRoute]: { password: string };
  [seedPreviewRoute]: { password: string };
  [seedConfirmationRoute]: { seed: string; password: string };
  [walletCreationSuccessRoute]: { seed: string; password: string };
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
        name={walletCreationSuccessRoute}
        component={WalletCreationSuccessScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={createPasswordRoute}
        component={CreatePasswordScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={secureWalletDescriptionRoute}
        component={SecureWalletDescriptionScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={seedDescriptionRoute}
        component={SeedDescriptionScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={seedPreviewRoute}
        component={SeedPreviewScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={seedConfirmationRoute}
        component={SeedConfirmationScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
