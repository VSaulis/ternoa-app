import React, { FC } from 'react';
import {
  createNewWalletRoute,
  importFromSeedRoute,
  SetupScreenProps,
} from '@navigation/types';
import { Button, ScreenContainer, TextArchivo } from '@common/components';
import { Image, SafeAreaView, View } from 'react-native';
import { center, flex1 } from '@styles/common';
import { margin, padding } from '@styles/darkTheme';

const setupWalletIllustration = require('@assets/images/setup-wallet.png');

const SetupScreen: FC<SetupScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <View style={[padding('full')('l'), flex1]}>
          <View style={[center, flex1]}>
            <Image source={setupWalletIllustration} />
          </View>
          <TextArchivo
            style={margin('bottom')('xl')}
            fontWeight="regular"
            fontSize="xxl"
            textAlign="center"
            color="white"
            tx="auth.wallet_setup"
          />
          <Button
            size="big"
            onPress={() => navigation.navigate(importFromSeedRoute)}
            style={margin('bottom')('m')}
            variant="secondary"
            tx="auth.import_using_seed_phrase"
          />
          <Button
            size="big"
            onPress={() => navigation.navigate(createNewWalletRoute)}
            style={margin('bottom')('m')}
            variant="primary"
            tx="auth.create_a_new_wallet"
          />
        </View>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default SetupScreen;
