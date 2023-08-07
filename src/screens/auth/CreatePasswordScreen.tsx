import React, { FC } from 'react';
import {
  CreatePasswordScreenProps,
  secureWalletDescriptionRoute,
} from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { CreatePasswordForm, StepperHeader } from '@features/auth/components';

const CreatePasswordScreen: FC<CreatePasswordScreenProps> = (props) => {
  const { navigation } = props;

  const handleOnComplete = (password: string) => {
    navigation.navigate(secureWalletDescriptionRoute, { password });
  };

  return (
    <ScreenContainer>
      <StepperHeader
        canGoBack={navigation.canGoBack()}
        onBack={navigation.goBack}
        step={1}
      />
      <CreatePasswordForm onComplete={handleOnComplete} />
    </ScreenContainer>
  );
};

export default CreatePasswordScreen;
