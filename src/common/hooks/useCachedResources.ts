import { useCallback, useEffect, useState } from 'react';

const useCachedResources = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadCachedResources = useCallback(async () => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoading(false));
  }, [loadCachedResources]);

  return { isLoading };
};

export default useCachedResources;
