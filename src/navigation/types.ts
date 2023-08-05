import { StackScreenProps } from '@react-navigation/stack';
import { RootParamList } from './RootNavigator';
import { MainParamList } from './MainNavigator';
import { AuthParamList } from './AuthNavigator';

export type MainNavigatorRoute = 'Main';
export const mainNavigatorRoute: MainNavigatorRoute = 'Main';

export type TransactionsRoute = 'Transactions';
export const transactionsRoute: TransactionsRoute = 'Transactions';
export type TransactionsScreenProps = StackScreenProps<
  MainParamList,
  TransactionsRoute
>;

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

export type ImportWalletRoute = 'ImportWallet';
export const importWalletRoute: ImportWalletRoute = 'ImportWallet';
export type ImportWalletScreenProps = StackScreenProps<
  AuthParamList,
  ImportWalletRoute
>;

export type CreateNewWalletRoute = 'CreateNewWallet';
export const createNewWalletRoute: CreateNewWalletRoute = 'CreateNewWallet';
export type CreateNewWalletScreenProps = StackScreenProps<
  AuthParamList,
  CreateNewWalletRoute
>;

export type WalletCreationSuccessRoute = 'WalletCreationSuccess';
export const walletCreationSuccessRoute: WalletCreationSuccessRoute =
  'WalletCreationSuccess';
export type WalletCreationSuccessScreenProps = StackScreenProps<
  AuthParamList,
  WalletCreationSuccessRoute
>;
