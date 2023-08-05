import React, { FC, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { rowCenter } from '@styles/common';
import { useCommonTranslations } from '@i18n/hooks';
import { Text } from '@common/components/index';
import { Options, passwordStrength } from 'check-password-strength';
import { Colors } from '@styles/types';

interface Props {
  style?: StyleProp<ViewStyle>;
  password: string;
}

const PasswordStrengthMeter: FC<Props> = (props) => {
  const { style, password } = props;
  const { t } = useCommonTranslations();

  const options = useMemo<Options<string>>(
    () => [
      {
        id: 0,
        value: t('Too weak'),
        minDiversity: 0,
        minLength: 0,
      },
      {
        id: 1,
        value: t('Medium'),
        minDiversity: 0,
        minLength: 8,
      },
      {
        id: 2,
        value: t('Strong'),
        minDiversity: 4,
        minLength: 8,
      },
    ],
    [t],
  );

  const { id, value } = useMemo(
    () => passwordStrength(password, options),
    [password, options],
  );

  return (
    <View style={[rowCenter, style]}>
      <Text fontSize="xs" fontWeight="regular" color="gray12">
        {t('Password strength: ')}
      </Text>
      <Text fontSize="xs" fontWeight="regular" color={colorMap[id]}>
        {value}
      </Text>
    </View>
  );
};

const colorMap: Record<number, keyof Colors> = {
  0: 'red5',
  1: 'yellow5',
  2: 'green5',
};

export default PasswordStrengthMeter;
