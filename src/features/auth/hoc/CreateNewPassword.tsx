import React, { FC } from 'react';
import { CreateNewPasswordForm } from '../components';
import { useCreateNewPasswordForm } from '../hooks';

const CreateNewPassword: FC = () => {
  const { control, isValid, handleSubmit } = useCreateNewPasswordForm();

  return (
    <CreateNewPasswordForm
      control={control}
      isValid={isValid}
      onSubmit={handleSubmit(console.log)}
    />
  );
};

export default CreateNewPassword;
