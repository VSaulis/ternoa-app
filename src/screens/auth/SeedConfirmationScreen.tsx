import React, { FC } from 'react';
import {
  SeedConfirmationScreenProps,
  walletCreationSuccessRoute,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SeedConfirmation, StepperHeader } from '@features/auth/components';

const SeedConfirmationScreen: FC<SeedConfirmationScreenProps> = (props) => {
  const { navigation, route } = props;
  const seed = route.params.seed;
  const password = route.params.password;

  const handleOnSuccess = () => {
    navigation.replace(walletCreationSuccessRoute, { seed, password });
  };

  return (
    <ScreenContainer>
      <StepperHeader
        canGoBack={navigation.canGoBack()}
        onBack={navigation.goBack}
        step={3}
      />
      <SeedConfirmation seed={seed} onComplete={handleOnSuccess} />
    </ScreenContainer>
  );
};

export default SeedConfirmationScreen;
