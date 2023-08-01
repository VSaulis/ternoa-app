import React, { FC } from 'react';
import { ImportFromSeedScreenProps } from '@navigation/types';
import { ScreenContainer } from '@common/components';
import { SafeAreaView } from 'react-native';
import { flex1 } from '@styles/common';
import { ImportFromSeed } from '@features/auth/hoc';

const ImportFromSeedScreen: FC<ImportFromSeedScreenProps> = () => {
  return (
    <ScreenContainer>
      <SafeAreaView style={flex1}>
        <ImportFromSeed />
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default ImportFromSeedScreen;
