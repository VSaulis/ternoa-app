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

export type WalletCreationSuccessRoute = 'WalletCreationSuccess';
export const walletCreationSuccessRoute: WalletCreationSuccessRoute =
  'WalletCreationSuccess';
export type WalletCreationSuccessScreenProps = StackScreenProps<
  AuthParamList,
  WalletCreationSuccessRoute
>;

export type SeedConfirmationRoute = 'SeedConfirmation';
export const seedConfirmationRoute: SeedConfirmationRoute = 'SeedConfirmation';
export type SeedConfirmationScreenProps = StackScreenProps<
  AuthParamList,
  SeedConfirmationRoute
>;

export type SeedDescriptionRoute = 'SeedDescription';
export const seedDescriptionRoute: SeedDescriptionRoute = 'SeedDescription';
export type SeedDescriptionScreenProps = StackScreenProps<
  AuthParamList,
  SeedDescriptionRoute
>;

export type SeedPreviewRoute = 'SeedPreview';
export const seedPreviewRoute: SeedPreviewRoute = 'SeedPreview';
export type SeedPreviewScreenProps = StackScreenProps<
  AuthParamList,
  SeedPreviewRoute
>;

export type SecureWalletDescriptionRoute = 'SecureWalletDescription';
export const secureWalletDescriptionRoute: SecureWalletDescriptionRoute =
  'SecureWalletDescription';
export type SecureWalletDescriptionScreenProps = StackScreenProps<
  AuthParamList,
  SecureWalletDescriptionRoute
>;

export type CreatePasswordRoute = 'CreatePassword';
export const createPasswordRoute: CreatePasswordRoute = 'CreatePassword';
export type CreatePasswordScreenProps = StackScreenProps<
  AuthParamList,
  CreatePasswordRoute
>;
