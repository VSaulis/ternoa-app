import { useQuery } from '@tanstack/react-query';
import { useRefetch } from '@common/hooks';

export const getQueryKey = (address: string) => {
  return ['transactions', address];
};

const useTransactions = (address: string) => {
  const {
    isLoading,
    refetch: onRefetch,
    data,
  } = useQuery(getQueryKey(address), () => []);

  const { refetch, isRefetching } = useRefetch(onRefetch);

  return {
    transactions: data ?? [],
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useTransactions;
