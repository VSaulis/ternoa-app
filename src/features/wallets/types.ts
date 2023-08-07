export type TransactionType = 'sent' | 'received';
export type TransactionStatus = 'confirmed' | 'cancelled';

export interface Transaction {
  id: number;
  tokenName: string;
  type: TransactionType;
  status: TransactionStatus;
  amountInTokens: number;
  amountInDollars: number;
  created: string;
}

export interface Wallet {
  address: string;
}
