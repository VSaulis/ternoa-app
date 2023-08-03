import React, { FC, useState } from 'react';
import { Wizard } from '@common/components';
import CreatePassword from './CreatePassword';
import {
  SecureWalletDescription,
  SeedPhraseConfirmation,
  SeedPhraseDescription,
  SeedPhrasePreview,
  SeedPhraseSuccess,
} from '../components';
import { WalletCreationProvider } from '../providers';

interface Props {
  onClose: () => void;
}

const CreateNewWallet: FC<Props> = (props) => {
  const { onClose } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);

  const onNextStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };

  const renderStep = (step: number) => {
    if (step === 0) {
      return <CreatePassword onComplete={onNextStep} />;
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
      return <SeedPhraseConfirmation onComplete={onNextStep} />;
    }

    if (step === 5) {
      return <SeedPhraseSuccess onNext={onNextStep} />;
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
        stepsCount={6}
      />
    </WalletCreationProvider>
  );
};

export default CreateNewWallet;
