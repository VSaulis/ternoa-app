import { getKeyringFromSeed } from 'ternoa-js';

export const createAccount = async (seed: string, password: string) => {
  const keyring = await getKeyringFromSeed(seed);
  keyring.encodePkcs8(password);
  return keyring;
};

export const importAccount = async (seed: string, password: string) => {
  const keyring = await getKeyringFromSeed(seed);
  if (keyring.isLocked) {
    keyring.decodePkcs8(password);
  }
  return keyring;
};
