import { mnemonicGenerate } from '@polkadot/util-crypto';

export const generateSeedPhrase = () => {
  return mnemonicGenerate().split(' ');
};
