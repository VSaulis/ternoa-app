import { StackScreenProps } from '@react-navigation/stack';
import { MainParamList } from './MainNavigator';
import { AuthParamList } from './AuthNavigator';

export type MainNavigatorRoute = 'Main';
export const mainNavigatorRoute: MainNavigatorRoute = 'Main';

export type AuthNavigatorRoute = 'Auth';
export const authNavigatorRoute: AuthNavigatorRoute = 'Auth';

export type WalkthroughRoute = 'Walkthrough';
export const walkthroughRoute: WalkthroughRoute = 'Walkthrough';
export type WalkthroughScreenProps = StackScreenProps<
  MainParamList,
  WalkthroughRoute
>;

export type SetupRoute = 'Setup';
export const setupRoute: SetupRoute = 'Setup';
export type SetupScreenProps = StackScreenProps<AuthParamList, SetupRoute>;

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
