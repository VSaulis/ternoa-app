import { mnemonicGenerate } from '@polkadot/util-crypto';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';
import range from 'lodash/range';
import sample from 'lodash/sample';

export const generateSeedPhrase = () => {
  return mnemonicGenerate().split(' ');
};

export const pickRandomPhrases = (phrases: string[], includedIndex: number) => {
  const includedPhrase = phrases[includedIndex];
  const filteredPhrases = phrases.filter((_, index) => index !== includedIndex);
  const randomPhrases = sampleSize(filteredPhrases, 4);
  return shuffle([...randomPhrases, includedPhrase]);
};

export const pickRandomIndex = (usedIndexes: number[] = []) => {
  const indexes = range(0, 11).filter((index) => !usedIndexes.includes(index));
  return sample(indexes) as number;
};
