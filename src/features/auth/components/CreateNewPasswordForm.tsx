import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Checkbox,
  Input,
  Switch,
  TextArchivo,
} from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { Control, Controller } from 'react-hook-form';
import { flex1, rowCenter } from '@styles/common';
import { CreateNewPasswordFormData } from '../types';

interface Props {
  control: Control<CreateNewPasswordFormData>;
  isValid: boolean;
  onSubmit: () => void;
}

const CreateNewPasswordForm: FC<Props> = (props) => {
  const { control, isValid, onSubmit } = props;

  return (
    <View style={flex1}>
      <ScrollView
        contentContainerStyle={[
          padding('horizontal')('l'),
          padding('top')('xxl'),
        ]}
        scrollIndicatorInsets={{ right: 1 }}>
        <TextArchivo
          style={margin('bottom')('xs')}
          textAlign="center"
          color="white"
          fontSize="m"
          fontWeight="semiBold"
          tx="auth.create_password"
        />
        <TextArchivo
          style={margin('bottom')('xxl')}
          textAlign="center"
          color="grey9"
          fontSize="s"
          fontWeight="regular"
          tx="auth.this_password_will_unlock_your_metamask_wallet_only_on_this_service"
        />
        <Controller
          control={control}
          name="newPassword"
          render={({ field: { ref: _, onChange, ...rest } }) => (
            <Input
              {...rest}
              onChangeText={onChange}
              style={margin('bottom')('l')}
              textContentType="newPassword"
              autoComplete="password-new"
              secureTextEntry
              labelTx="auth.new_password"
              Help={
                <TextArchivo
                  style={[margin('top')('xxs'), padding('left')('m')]}
                  fontSize="xs"
                  fontWeight="regular"
                  color="grey12"
                  tx="auth.password_strength"
                />
              }
            />
          )}
        />
        <Controller
          control={control}
          name="confirmNewPassword"
          render={({ field: { ref: _, onChange, ...rest } }) => (
            <Input
              {...rest}
              onChangeText={onChange}
              style={margin('bottom')('l')}
              textContentType="newPassword"
              autoComplete="password-new"
              secureTextEntry
              labelTx="auth.confirm_password"
            />
          )}
        />
        <View
          style={[rowCenter, padding('vertical')('xs'), margin('bottom')('l')]}>
          <TextArchivo
            color="white"
            fontSize="m"
            fontWeight="semiBold"
            style={[flex1, margin('right')('m')]}
            tx="auth.sign_in_with_face_id"
          />
          <Controller
            control={control}
            name="isFaceIdEnabled"
            render={({ field: { ref: _, ...rest } }) => <Switch {...rest} />}
          />
        </View>
        <Controller
          control={control}
          name="isAgreementChecked"
          render={({ field: { onChange, value } }) => (
            <Checkbox
              onChange={onChange}
              isChecked={value}
              size={24}
              style={margin('bottom')('l')}
              Label={
                <TextArchivo
                  style={margin('left')('xs')}
                  color="white"
                  fontSize="s"
                  fontWeight="regular"
                  tx="auth.i_understand_that_dege_cannot_recover_this_password_for_me">
                  <TextArchivo
                    fontWeight="regular"
                    fontSize="s"
                    color="blue5"
                    tx="auth.learn_more"
                  />
                </TextArchivo>
              }
            />
          )}
        />
      </ScrollView>
      <View style={padding('horizontal')('l')}>
        <Button
          onPress={onSubmit}
          size="small"
          variant="primary"
          tx="auth.create_password"
        />
      </View>
    </View>
  );
};

export default CreateNewPasswordForm;
