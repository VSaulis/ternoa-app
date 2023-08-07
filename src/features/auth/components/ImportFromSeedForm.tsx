import React, { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import { GradientButton, Input, Text } from '@common/components';
import { margin } from '@styles/darkTheme';
import { Controller } from 'react-hook-form';
import { flex1 } from '@styles/common';
import { useAuthTranslations } from '@i18n/hooks';
import { Trans } from 'react-i18next';
import { TERMS_AND_CONDITIONS_URL } from '@env';
import PasswordForm from './PasswordForm';
import { contentStyle, footerStyle } from '../styles';
import { useImportFromSeed } from '../hooks';

const ImportFromSeedForm: FC = () => {
  const { control, handleSubmit, onSubmit, isSubmitting } = useImportFromSeed();
  const { t } = useAuthTranslations();

  return (
    <View style={flex1}>
      <ScrollView
        contentContainerStyle={contentStyle}
        scrollIndicatorInsets={{ right: 1 }}>
        <Controller
          control={control}
          name="seed"
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
        <PasswordForm control={control} style={margin('bottom')('l')} />
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
      <View style={footerStyle}>
        <GradientButton
          isDisabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
          size="medium"
          variant="primary"
          label={t('Import')}
        />
      </View>
    </View>
  );
};

export default ImportFromSeedForm;
