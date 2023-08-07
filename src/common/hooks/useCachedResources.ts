import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@core/redux-store/store';
import { getIsWalkthroughCompleted } from '@features/walktrough/storage';
import { setIsWalktroughCompleted } from '@features/walktrough/slice';
import { readAddresses } from '@features/wallets/storage';
import { setAddresses } from '@features/wallets/slice';

const useCachedResources = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadCachedResources = useCallback(async () => {
    const isWalkthroughCompleted = await getIsWalkthroughCompleted();
    const addresses = await readAddresses();

    dispatch(setIsWalktroughCompleted(isWalkthroughCompleted ?? false));
    dispatch(setAddresses(addresses ?? []));
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
