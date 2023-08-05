import React, { FC, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@core/react-query';
import { store } from '@core/redux-store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { colors } from '@styles/darkTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import YupPassword from 'yup-password';
import * as yup from 'yup';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import RootNavigator from '@navigation/RootNavigator';
import { setupTranslations } from '@i18n/setup';
import { CachedResourcesLoader } from '@common/hoc';
import { setupApi } from '@api/setup';

setupTranslations();
setupApi();
dayjs.extend(isToday);
YupPassword(yup);

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={colors.gray24}
        barStyle="light-content"
        translucent={false}
      />
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <CachedResourcesLoader>
            <RootNavigator />
          </CachedResourcesLoader>
        </QueryClientProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
