import { generateSeed as ternoaGenerateSeed } from 'ternoa-js';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';
import range from 'lodash/range';
import sample from 'lodash/sample';

export const generateSeed = () => {
  return ternoaGenerateSeed();
};

export const seedToSeedPhrases = (seed: string) => {
  return seed.split(' ');
};

export const pickRandomSeedPhrases = (seed: string, includedIndex: number) => {
  const seedPhrases = seed.split(' ');
  const includedPhrase = seedPhrases[includedIndex];
  const filteredPhrases = seedPhrases.filter((_, i) => i !== includedIndex);
  const randomPhrases = sampleSize(filteredPhrases, 4);
  return shuffle([...randomPhrases, includedPhrase]);
};

export const pickRandomIndex = (usedIndexes: number[] = []) => {
  const indexes = range(0, 11).filter((index) => !usedIndexes.includes(index));
  return sample(indexes) as number;
};
