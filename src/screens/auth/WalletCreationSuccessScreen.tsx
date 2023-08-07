import React, { FC } from 'react';
import { ScreenContainer } from '@common/components';
import { WalletCreationSuccess } from '@features/auth/components';
import { WalletCreationSuccessScreenProps } from '@navigation/types';

const WalletCreationSuccessScreen: FC<WalletCreationSuccessScreenProps> = (
  props,
) => {
  const { route } = props;
  const seed = route.params.seed;
  const password = route.params.password;

  return (
    <ScreenContainer>
      <WalletCreationSuccess seed={seed} password={password} />
    </ScreenContainer>
  );
};

export default WalletCreationSuccessScreen;
