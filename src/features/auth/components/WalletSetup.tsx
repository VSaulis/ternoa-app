import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { margin, padding } from '@styles/darkTheme';
import { center, flex1 } from '@styles/common';
import { Button, GradientButton, Text } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';

const setupWalletIllustration = require('@assets/images/setup-wallet.png');

interface Props {
  onImportWalletPress: () => void;
  onCreateWalletPress: () => void;
}

const WalletSetup: FC<Props> = (props) => {
  const { onImportWalletPress, onCreateWalletPress } = props;
  const { t } = useAuthTranslations();

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
        onPress={onImportWalletPress}
        style={margin('bottom')('m')}
        variant="secondary"
      />
      <GradientButton
        size="large"
        label={t('Create a New Wallet')}
        onPress={onCreateWalletPress}
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
