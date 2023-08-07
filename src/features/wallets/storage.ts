import { readAsync, removeAsync, writeAsync } from '@utils/storage';

const key = 'addresses';

export const readAddresses = () => {
  return readAsync<string[]>(key);
};

export const writeAddress = async (address: string) => {
  const addresses = await readAddresses();
  return writeAsync<string[]>(key, [...(addresses ?? []), address]);
};

export const removeAddresses = () => {
  return removeAsync(key);
};
