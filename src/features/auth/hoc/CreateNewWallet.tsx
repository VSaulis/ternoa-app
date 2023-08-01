import React, { FC, useState } from 'react';
import { Wizard } from '@common/components';
import { padding } from '@styles/darkTheme';
import CreateNewPassword from './CreateNewPassword';

interface Props {
  onClose: () => void;
}

const CreateNewWallet: FC<Props> = (props) => {
  const { onClose } = props;
  const [currentStep, setCurrentStep] = useState<number>(0);

  const renderStep = (step: number) => {
    if (step === 0) {
      return <CreateNewPassword />;
    }

    return <></>;
  };

  return (
    <Wizard
      style={padding('vertical')('l')}
      renderStep={renderStep}
      onStepChange={setCurrentStep}
      onClose={onClose}
      currentStep={currentStep}
      stepsCount={3}
    />
  );
};

export default CreateNewWallet;
