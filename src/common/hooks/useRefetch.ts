import { useCallback, useState } from 'react';

const useRefetch = (refetch: () => Promise<unknown>) => {
  const [isRefetching, setIsRefetching] = useState<boolean>(false);

  const onRefetch = useCallback(async () => {
    try {
      setIsRefetching(true);
      await refetch();
    } finally {
      setIsRefetching(false);
    }
  }, [refetch]);

  return { refetch: onRefetch, isRefetching };
};

export default useRefetch;
