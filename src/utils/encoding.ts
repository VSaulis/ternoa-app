import { TextEncoder } from 'text-encoding-utf-8';

export const stringToUint8Array = (text: string) => {
  const encoder = new TextEncoder();
  return encoder.encode(text);
};
