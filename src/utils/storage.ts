import AsyncStorage from '@react-native-async-storage/async-storage';
import isString from 'lodash/isString';
import { tryParseJson } from './json';

export const writeAsync = async <T = string>(key: string, value: T) => {
  const formattedValue = isString(value) ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, formattedValue);
};

export const readAsync = async <T = string>(key: string) => {
  const value = await AsyncStorage.getItem(key);
  if (!value) {
    return null;
  }
  const parsedJson = tryParseJson<T>(value);
  return parsedJson.success ? parsedJson.data : (value as unknown as T);
};

export const removeAsync = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
