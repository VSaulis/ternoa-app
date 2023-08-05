import React, { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import {
  Checkbox,
  GradientButton,
  Input,
  PasswordStrengthMeter,
  Switch,
  Text,
  TextGradient,
} from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { Control, Controller } from 'react-hook-form';
import { flex1, rowCenter, rowStart } from '@styles/common';
import { useAuthTranslations } from '@i18n/hooks';
import { Trans } from 'react-i18next';
import { TERMS_AND_CONDITIONS_URL } from '@env';
import { CreateNewPasswordFormData } from '../types';
import { contentStyle, footerStyle } from '../styles';

interface Props {
  control: Control<CreateNewPasswordFormData>;
  onSubmit: () => void;
}

const CreatePasswordForm: FC<Props> = (props) => {
  const { control, onSubmit } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={flex1}>
      <ScrollView
        contentContainerStyle={contentStyle}
        scrollIndicatorInsets={{ right: 1 }}>
        <TextGradient
          style={margin('bottom')('xs')}
          textAlign="center"
          fontSize="m"
          fontWeight="semiBold"
          gradient="gradient1">
          {t('Create Password')}
        </TextGradient>
        <Text
          style={[margin('bottom')('xxl'), padding('horizontal')('xs')]}
          fontSize="s"
          fontWeight="regular"
          textAlign="center"
          color="gray9">
          {t(
            'This password will unlock your Metamask wallet only on this service',
          )}
        </Text>
        <Controller
          control={control}
          name="newPassword"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <>
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
                style={[margin('bottom')('l'), padding('left')('m')]}
                password={rest.value}
              />
            </>
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
        <View
          style={[rowCenter, padding('vertical')('xs'), margin('bottom')('l')]}>
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
        <Controller
          control={control}
          name="isAgreementChecked"
          render={({ field: { onChange, value } }) => (
            <View style={[rowStart, margin('bottom')('l')]}>
              <Checkbox
                onChange={onChange}
                isChecked={value}
                size={24}
                style={margin('right')('xs')}
              />
              <Text fontWeight="regular" fontSize="s" color="white">
                <Trans
                  ns="auth"
                  i18nKey="I understand that DeGe cannot recover this password for me. Learn more"
                  components={{
                    highlighted: (
                      <Text
                        fontWeight="regular"
                        fontSize="s"
                        onPress={() =>
                          Linking.openURL(TERMS_AND_CONDITIONS_URL)
                        }
                        color="primary5"
                      />
                    ),
                  }}
                />
              </Text>
            </View>
          )}
        />
      </ScrollView>
      <View style={footerStyle}>
        <GradientButton
          onPress={onSubmit}
          size="medium"
          variant="primary"
          label={t('Create Password')}
        />
      </View>
    </View>
  );
};

export default CreatePasswordForm;
