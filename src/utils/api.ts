import { Keyring } from '@polkadot/keyring';
import { stringToUint8Array } from '@utils/encoding';
import { balanceToNumber, getTotalBalance, initializeApi } from 'ternoa-js';

export const importWalletFromSeed = (seedPhrase: string, password: string) => {
  const keyring = new Keyring();
  const seed = Uint8Array.from(stringToUint8Array(seedPhrase));
  const keyPair = keyring.addFromSeed(seed);

  if (keyPair.isLocked) {
    keyPair.decodePkcs8(password);
  }

  return keyPair;
};

export const addWalletFromSeed = (seedPhrase: string, password: string) => {
  const keyring = new Keyring();
  const seed = Uint8Array.from(stringToUint8Array(seedPhrase));
  const keyPair = keyring.addFromSeed(seed);
  keyPair.encodePkcs8(password);
  return keyPair;
};

export const getBalance = async (address: string) => {
  await initializeApi();
  const totalBalanceBN = await getTotalBalance(address);
  return balanceToNumber(totalBalanceBN);
};
