import React, { FC } from 'react';
import { Linking, ScrollView, View } from 'react-native';
import {
  Checkbox,
  GradientButton,
  Text,
  TextGradient,
} from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { Controller } from 'react-hook-form';
import { flex1 } from '@styles/common';
import { useAuthTranslations } from '@i18n/hooks';
import { Trans } from 'react-i18next';
import { TERMS_AND_CONDITIONS_URL } from '@env';
import PasswordForm from './PasswordForm';
import { useCreatePassword } from '../hooks';
import { contentStyle, footerStyle } from '../styles';

interface Props {
  onComplete: (password: string) => void;
}

const CreatePasswordForm: FC<Props> = (props) => {
  const { onComplete } = props;
  const { onSubmit, handleSubmit, control } = useCreatePassword(onComplete);
  const { t } = useAuthTranslations();

  return (
    <View style={flex1}>
      <ScrollView
        bounces={false}
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
        <PasswordForm control={control} style={margin('bottom')('l')} />
        <Controller
          control={control}
          name="isAgreementChecked"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Checkbox
              error={error?.message}
              style={margin('bottom')('l')}
              onChange={onChange}
              isChecked={value}
              size={24}
              label={
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
              }
            />
          )}
        />
      </ScrollView>
      <View style={footerStyle}>
        <GradientButton
          onPress={handleSubmit(onSubmit)}
          size="medium"
          variant="primary"
          label={t('Create Password')}
        />
      </View>
    </View>
  );
};

export default CreatePasswordForm;
