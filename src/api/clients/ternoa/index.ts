import {
  balanceToNumber,
  getKeyringFromSeed,
  getTotalBalance,
  initializeApi,
} from 'ternoa-js';

export const getBalance = async (address: string) => {
  await initializeApi();
  const totalBalanceBN = await getTotalBalance(address);
  return balanceToNumber(totalBalanceBN);
};

export const importAccount = async (seed: string, password: string) => {
  const keyring = await getKeyringFromSeed(seed);

  if (keyring.isLocked) {
    keyring.decodePkcs8(password);
  }

  return keyring;
};

export const createAccount = async (seed: string, password: string) => {
  const keyring = await getKeyringFromSeed(seed);

  if (!keyring.isLocked) {
    keyring.encodePkcs8(password);
  }

  return keyring;
};
