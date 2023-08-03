import { Wallet } from '../types';

const useWallets = () => {
  const walletsMock: Wallet[] = [
    { id: 1, balanceInDollars: 4360.8582, balanceInTokens: 19.2371 },
    { id: 2, balanceInDollars: 5360.8585, balanceInTokens: 20.2375 },
  ];

  return { isLoading: false, wallets: walletsMock };
};

export default useWallets;
