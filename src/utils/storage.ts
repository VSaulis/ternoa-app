import AsyncStorage from '@react-native-async-storage/async-storage';
import isString from 'lodash/isString';

const tryParseJson = <T>(
  value: string,
): { success: boolean; data: T | null } => {
  try {
    const data = JSON.parse(value);
    return { success: true, data };
  } catch (error) {
    return { success: false, data: null };
  }
};

export const writeAsync = async <T = string>(
  key: string,
  value: T,
): Promise<void> => {
  const formattedValue = isString(value) ? value : JSON.stringify(value);
  await AsyncStorage.setItem(key, formattedValue);
};

export const readAsync = async <T = string>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  if (!value) {
    return null;
  }
  const parsedJson = tryParseJson<T>(value);
  return parsedJson.success ? parsedJson.data : (value as unknown as T);
};

export const removeAsync = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};