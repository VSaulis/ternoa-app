import { balanceToNumber, getTotalBalance } from 'ternoa-js';

export const getBalance = async (address: string) => {
  const totalBalanceBN = await getTotalBalance(address);
  return balanceToNumber(totalBalanceBN);
};
