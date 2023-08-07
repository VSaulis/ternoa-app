import isString from 'lodash/isString';
import * as Keychain from 'react-native-keychain';
import { tryParseJson } from '@utils/json';

export const writeSecureAsync = async <T = string>(
  service: string,
  key: string,
  value: T,
) => {
  const formattedValue = isString(value) ? value : JSON.stringify(value);
  await Keychain.setInternetCredentials(service, key, formattedValue);
};

export const readSecureAsync = async <T = string>(service: string) => {
  const credentials = await Keychain.getInternetCredentials(service);
  if (!credentials) {
    return null;
  }
  const { username, password } = credentials;
  const parsedJson = tryParseJson<T>(password);
  return {
    username,
    password: parsedJson.success ? parsedJson.data : (password as unknown as T),
  };
};

export const removeSecureAsync = async (service: string) => {
  await Keychain.resetInternetCredentials(service);
};
