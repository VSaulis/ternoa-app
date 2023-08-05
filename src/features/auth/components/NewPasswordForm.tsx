import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Input, PasswordStrengthMeter, Switch, Text } from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { flex1, rowCenter } from '@styles/common';
import { useAuthTranslations } from '@i18n/hooks';
import { NewPasswordFormData } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  control: Control<NewPasswordFormData>;
}

const NewPasswordForm: FC<Props> = (props) => {
  const { style, control } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="newPassword"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <View style={margin('bottom')('l')}>
            <Input
              {...rest}
              error={error?.message}
              label={t('New Password')}
              style={margin('bottom')('xxs')}
              textContentType="newPassword"
              autoComplete="password-new"
              secureTextEntry
            />
            <PasswordStrengthMeter
              style={margin('left')('m')}
              password={rest.value}
            />
          </View>
        )}
      />
      <Controller
        control={control}
        name="confirmNewPassword"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <Input
            {...rest}
            error={error?.message}
            label={t('Confirm Password')}
            style={margin('bottom')('l')}
            textContentType="newPassword"
            autoComplete="password-new"
            secureTextEntry
          />
        )}
      />
      <View style={[rowCenter, padding('vertical')('xs')]}>
        <Text
          fontSize="m"
          fontWeight="semiBold"
          color="white"
          style={[flex1, margin('right')('m')]}>
          {t('Sign in with Face ID?')}
        </Text>
        <Controller
          control={control}
          name="isFaceIdEnabled"
          render={({ field: { ref: _, ...rest } }) => <Switch {...rest} />}
        />
      </View>
    </View>
  );
};

export default NewPasswordForm;
