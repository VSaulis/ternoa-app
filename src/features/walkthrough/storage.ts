import { readAsync, writeAsync } from '@utils/storage';

const key = 'walkthrough';

export const getIsWalkthroughCompleted = () => {
  return readAsync<boolean>(key);
};

export const completeWalkthrough = () => {
  return writeAsync<boolean>(key, true);
};
