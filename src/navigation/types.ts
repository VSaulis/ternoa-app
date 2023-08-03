import { StackScreenProps } from '@react-navigation/stack';
import { RootParamList } from './RootNavigator';
import { MainParamList } from './MainNavigator';
import { AuthParamList } from './AuthNavigator';

export type MainNavigatorRoute = 'Main';
export const mainNavigatorRoute: MainNavigatorRoute = 'Main';

export type WalletsRoute = 'Wallets';
export const walletsRoute: WalletsRoute = 'Wallets';
export type WalletsScreenProps = StackScreenProps<MainParamList, WalletsRoute>;

export type AuthNavigatorRoute = 'Auth';
export const authNavigatorRoute: AuthNavigatorRoute = 'Auth';

export type WalkthroughRoute = 'Walkthrough';
export const walkthroughRoute: WalkthroughRoute = 'Walkthrough';
export type WalkthroughScreenProps = StackScreenProps<
  RootParamList,
  WalkthroughRoute
>;

export type WalletSetupRoute = 'WalletSetup';
export const walletSetupRoute: WalletSetupRoute = 'WalletSetup';
export type WalletSetupScreenProps = StackScreenProps<
  AuthParamList,
  WalletSetupRoute
>;

export type ImportFromSeedRoute = 'ImportFromSeed';
export const importFromSeedRoute: ImportFromSeedRoute = 'ImportFromSeed';
export type ImportFromSeedScreenProps = StackScreenProps<
  AuthParamList,
  ImportFromSeedRoute
>;

export type CreateNewWalletRoute = 'CreateNewWallet';
export const createNewWalletRoute: CreateNewWalletRoute = 'CreateNewWallet';
export type CreateNewWalletScreenProps = StackScreenProps<
  AuthParamList,
  CreateNewWalletRoute
>;
