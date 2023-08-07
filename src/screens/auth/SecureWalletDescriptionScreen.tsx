import React, { FC } from 'react';
import {
  SecureWalletDescriptionScreenProps,
  seedDescriptionRoute,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import {
  SecureWalletDescription,
  StepperHeader,
} from '@features/auth/components';

const SecureWalletDescriptionScreen: FC<SecureWalletDescriptionScreenProps> = (
  props,
) => {
  const { navigation, route } = props;
  const password = route.params.password;

  const handleOnSuccess = () => {
    navigation.navigate(seedDescriptionRoute, { password });
  };

  return (
    <ScreenContainer>
      <StepperHeader
        canGoBack={navigation.canGoBack()}
        onBack={navigation.goBack}
        step={2}
      />
      <SecureWalletDescription onStart={handleOnSuccess} />
    </ScreenContainer>
  );
};

export default SecureWalletDescriptionScreen;
