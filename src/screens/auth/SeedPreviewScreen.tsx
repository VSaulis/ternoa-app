import React, { FC } from 'react';
import {
  seedConfirmationRoute,
  SeedPreviewScreenProps,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SeedPreview, StepperHeader } from '@features/auth/components';

const SeedPreviewScreen: FC<SeedPreviewScreenProps> = (props) => {
  const { navigation, route } = props;
  const password = route.params.password;

  const handleOnNext = (seed: string) => {
    navigation.navigate(seedConfirmationRoute, { seed, password });
  };

  return (
    <ScreenContainer>
      <StepperHeader
        canGoBack={navigation.canGoBack()}
        onBack={navigation.goBack}
        step={2}
      />
      <SeedPreview onNext={handleOnNext} />
    </ScreenContainer>
  );
};

export default SeedPreviewScreen;
