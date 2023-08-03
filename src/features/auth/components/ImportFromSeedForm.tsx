import React, { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { GradientButton, Input, Switch, Text } from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { Control, Controller } from 'react-hook-form';
import { flex1, rowCenter } from '@styles/common';
import { useAuthTranslations } from '@i18n/hooks';
import { Trans } from 'react-i18next';
import { TERMS_AND_CONDITIONS_URL } from '@env';
import { ImportFromSeedFormData } from '../types';

interface Props {
  control: Control<ImportFromSeedFormData>;
  isConfirming?: boolean;
  onSubmit: () => void;
}

const ImportFromSeedForm: FC<Props> = (props) => {
  const { control, onSubmit, isConfirming = false } = props;
  const { t } = useAuthTranslations();

  return (
    <View style={[flex1, padding('top')('m')]}>
      <ScrollView
        contentContainerStyle={padding('full')('l')}
        scrollIndicatorInsets={{ right: 1 }}>
        <Controller
          control={control}
          name="seedPhrase"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <Input
              {...rest}
              label={t('Seed Phrase')}
              multiline
              error={error?.message}
              style={margin('bottom')('l')}
            />
          )}
        />
        <Controller
          control={control}
          name="newPassword"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <Input
              {...rest}
              label={t('New Password')}
              textContentType="newPassword"
              autoComplete="password-new"
              secureTextEntry
              help={t('Must be at least 8 characters')}
              error={error?.message}
              style={margin('bottom')('l')}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmNewPassword"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <Input
              {...rest}
              label={t('Confirm Password')}
              style={margin('bottom')('l')}
              textContentType="newPassword"
              autoComplete="password-new"
              error={error?.message}
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
        <Text
          fontSize="s"
          fontWeight="regular"
          style={margin('bottom')('l')}
          color="gray9">
          <Trans
            ns="auth"
            i18nKey="By proceeding, you agree to these Term and Conditions"
            components={{
              highlighted: (
                <Text
                  fontSize="s"
                  fontWeight="regular"
                  onPress={() => Linking.openURL(TERMS_AND_CONDITIONS_URL)}
                  textDecorationLine="underline"
                  color="blue5"
                />
              ),
            }}
          />
        </Text>
      </ScrollView>
      <View style={[padding('horizontal')('l'), padding('bottom')('xxl')]}>
        <GradientButton
          isDisabled={isConfirming}
          onPress={onSubmit}
          size="medium"
          variant="primary"
          label={t('Import')}
        />
      </View>
    </View>
  );
};

export default ImportFromSeedForm;
