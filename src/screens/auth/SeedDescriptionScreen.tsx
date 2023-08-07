import React, { FC } from 'react';
import {
  SeedDescriptionScreenProps,
  seedPreviewRoute,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SeedDescription, StepperHeader } from '@features/auth/components';

const ScreenDescriptionScreen: FC<SeedDescriptionScreenProps> = (props) => {
  const { navigation, route } = props;
  const password = route.params.password;

  const handleOnSuccess = () => {
    navigation.navigate(seedPreviewRoute, { password });
  };

  return (
    <ScreenContainer>
      <StepperHeader
        canGoBack={navigation.canGoBack()}
        onBack={navigation.goBack}
        step={2}
      />
      <SeedDescription onStart={handleOnSuccess} />
    </ScreenContainer>
  );
};

export default ScreenDescriptionScreen;
