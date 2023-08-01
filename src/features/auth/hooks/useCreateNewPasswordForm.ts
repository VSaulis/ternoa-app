import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateNewPasswordFormData } from '../types';

const initialFormData: CreateNewPasswordFormData = {
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
  isAgreementChecked: false,
};

const getSchema = () => {
  return yup.object().shape({
    newPassword: yup.string().min(8).required(),
    isFaceIdEnabled: yup.boolean().required(),
    isAgreementChecked: yup.boolean().required().oneOf([true]),
    confirmNewPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),
  });
};

const useCreateNewPasswordForm = () => {
  const { control, handleSubmit, formState } =
    useForm<CreateNewPasswordFormData>({
      mode: 'onChange',
      reValidateMode: 'onChange',
      defaultValues: initialFormData,
      resolver: yupResolver(getSchema()),
    });

  return { control, handleSubmit, isValid: formState.isValid };
};

export default useCreateNewPasswordForm;
