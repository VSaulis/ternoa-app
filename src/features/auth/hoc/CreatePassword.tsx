import React, { FC } from 'react';
import { CreatePasswordForm } from '../components';
import { useCreateNewPassword, useCreateNewPasswordForm } from '../hooks';

interface Props {
  onComplete: () => void;
}

const CreatePassword: FC<Props> = (props) => {
  const { onComplete } = props;
  const { createNewPassword } = useCreateNewPassword(onComplete);
  const { control, handleSubmit } = useCreateNewPasswordForm();

  return (
    <CreatePasswordForm
      control={control}
      onSubmit={handleSubmit(createNewPassword)}
    />
  );
};

export default CreatePassword;
