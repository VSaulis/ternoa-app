import { Keyring } from '@polkadot/keyring';
import { stringToUint8Array } from '@utils/encoding';
import { ImportFromSeedRequest } from './types';

export const importWalletFromSeed = (request: ImportFromSeedRequest) => {
  const keyring = new Keyring();
  const seed = Uint8Array.from(stringToUint8Array(request.seedPhrase));
  const keyPair = keyring.addFromSeed(seed);

  if (keyPair.isLocked) {
    keyPair.decodePkcs8(request.password);
  }

  return keyPair;
};
