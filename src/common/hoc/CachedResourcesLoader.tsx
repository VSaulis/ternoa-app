import React, { FC, PropsWithChildren } from 'react';
import { useCachedResources } from '@common/hooks';

const CachedResourcesLoader: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { isLoaded } = useCachedResources();

  if (!isLoaded) {
    return <></>;
  }

  return <>{children}</>;
};

export default CachedResourcesLoader;
