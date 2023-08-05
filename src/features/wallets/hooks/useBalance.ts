import { useQuery } from '@tanstack/react-query';
import { WalletsClient } from '@api/clients';
import { useRefetch } from '@common/hooks';

export const getQueryKey = (address: string) => {
  return ['balance', address];
};

const useBalance = (address: string) => {
  const {
    isLoading,
    refetch: onRefetch,
    data,
  } = useQuery(getQueryKey(address), () => WalletsClient.getBalance(address));

  const { refetch, isRefetching } = useRefetch(onRefetch);

  return {
    balance: data,
    isLoading,
    isRefetching,
    refetch,
  };
};

export default useBalance;
