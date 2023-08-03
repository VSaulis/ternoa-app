import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { margin, padding } from '@styles/darkTheme';
import { center, flex1 } from '@styles/common';
import { Button, GradientButton, Text } from '@common/components';
import { createNewWalletRoute, importFromSeedRoute } from '@navigation/types';
import { useAuthTranslations } from '@i18n/hooks';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '@navigation/AuthNavigator';

const setupWalletIllustration = require('@assets/images/setup-wallet.png');

const WalletSetup: FC = () => {
  const { t } = useAuthTranslations();
  const navigation = useNavigation<StackNavigationProp<AuthParamList>>();

  return (
    <View style={styles.container}>
      <View style={[center, flex1]}>
        <Image source={setupWalletIllustration} />
      </View>
      <Text
        fontSize="xxl"
        fontWeight="regular"
        style={margin('bottom')('xl')}
        textAlign="center"
        color="white">
        {t('Wallet Setup')}
      </Text>
      <Button
        size="large"
        label={t('Import Using Seed Phrase')}
        onPress={() => navigation.navigate(importFromSeedRoute)}
        style={margin('bottom')('m')}
        variant="secondary"
      />
      <GradientButton
        size="large"
        label={t('Create a New Wallet')}
        onPress={() => navigation.navigate(createNewWalletRoute)}
        variant="primary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    ...padding('top')('l'),
    ...padding('horizontal')('l'),
    paddingBottom: 66,
  },
});

export default WalletSetup;
