import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ImportFromSeedFormData } from '../types';

const initialFormData: ImportFromSeedFormData = {
  seedPhrase: '',
  newPassword: '',
  confirmNewPassword: '',
  isFaceIdEnabled: true,
};

const getSchema = () => {
  return yup.object().shape({
    seedPhrase: yup.string().required(),
    newPassword: yup.string().min(8).required(),
    isFaceIdEnabled: yup.boolean().required(),
    confirmNewPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),
  });
};

const useImportFromSeedForm = () => {
  const { control, handleSubmit, formState } = useForm<ImportFromSeedFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema()),
  });

  return { control, handleSubmit, isValid: formState.isValid };
};

export default useImportFromSeedForm;
