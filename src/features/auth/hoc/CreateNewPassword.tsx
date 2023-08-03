import React, { FC } from 'react';
import { CreatePasswordForm } from '../components';
import { useCreateNewPassword } from '../hooks';

interface Props {
  onComplete: () => void;
}

const CreateNewPassword: FC<Props> = (props) => {
  const { onComplete } = props;
  const { onSubmit, handleSubmit, control } = useCreateNewPassword(onComplete);

  return (
    <CreatePasswordForm control={control} onSubmit={handleSubmit(onSubmit)} />
  );
};

export default CreateNewPassword;
