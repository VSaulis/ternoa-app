import React, { FC } from 'react';
import { CreateNewWalletScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { CreateWallet } from '@features/auth/hoc';

const CreateNewWalletScreen: FC<CreateNewWalletScreenProps> = (props) => {
  const { navigation } = props;

  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <CreateWallet onClose={navigation.goBack} />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default CreateNewWalletScreen;
