import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input, Switch, TextArchivo } from '@common/components';
import { margin, padding } from '@styles/darkTheme';
import { Control, Controller } from 'react-hook-form';
import { flex1, rowCenter } from '@styles/common';
import { ImportFromSeedFormData } from '../types';

interface Props {
  control: Control<ImportFromSeedFormData>;
  isValid: boolean;
  onSubmit: () => void;
}

const ImportFromSeedForm: FC<Props> = (props) => {
  const { control, isValid, onSubmit } = props;

  return (
    <View style={flex1}>
      <ScrollView
        contentContainerStyle={padding('full')('l')}
        scrollIndicatorInsets={{ right: 1 }}>
        <Controller
          control={control}
          name="seedPhrase"
          render={({ field: { ref: _, onChange, ...rest } }) => (
            <Input
              {...rest}
              multiline
              onChangeText={onChange}
              numberOfLines={3}
              style={margin('bottom')('l')}
              labelTx="auth.seed_phrase"
            />
          )}
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
                  tx="auth.must_be_at_least_8_characters"
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
        <TextArchivo
          style={margin('bottom')('l')}
          color="grey9"
          fontSize="s"
          fontWeight="regular"
          tx="auth.by_proceeding_you_agree_to_these">
          <TextArchivo
            fontSize="s"
            fontWeight="regular"
            textDecorationLine="underline"
            color="blue5"
            tx="auth.terms_and_conditions"
          />
        </TextArchivo>
      </ScrollView>
      <View style={[padding('horizontal')('l'), padding('bottom')('xxl')]}>
        <Button
          onPress={onSubmit}
          size="small"
          variant="primary"
          tx="auth.import"
        />
      </View>
    </View>
  );
};

export default ImportFromSeedForm;
