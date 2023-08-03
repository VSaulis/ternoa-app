import React, { FC, useState } from 'react';
import { Wizard } from '@common/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '@navigation/AuthNavigator';
import { walletCreationSuccessRoute } from '@navigation/types';
import CreateNewPassword from './CreateNewPassword';
import { WalletCreationProvider } from '../providers';
import {
  SecureWalletDescription,
  SeedPhraseConfirmation,
  SeedPhraseDescription,
  SeedPhrasePreview,
} from '../components';

interface Props {
  onClose: () => void;
}

const CreateNewWallet: FC<Props> = (props) => {
  const { onClose } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigation = useNavigation<StackNavigationProp<AuthParamList>>();

  const onNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const handleOnComplete = () => {
    navigation.replace(walletCreationSuccessRoute);
  };

  const renderStep = (step: number) => {
    if (step === 0) {
      return <CreateNewPassword onComplete={onNextStep} />;
    }

    if (step === 1) {
      return <SecureWalletDescription onStart={onNextStep} />;
    }

    if (step === 2) {
      return <SeedPhraseDescription onStart={onNextStep} />;
    }

    if (step === 3) {
      return <SeedPhrasePreview onNext={onNextStep} />;
    }

    if (step === 4) {
      return <SeedPhraseConfirmation onComplete={handleOnComplete} />;
    }

    return <></>;
  };

  return (
    <WalletCreationProvider>
      <Wizard
        renderStep={renderStep}
        onStepChange={setCurrentStep}
        onClose={onClose}
        currentStep={currentStep}
        stepsCount={5}
      />
    </WalletCreationProvider>
  );
};

export default CreateNewWallet;
