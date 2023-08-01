import axios from 'axios';
import { API_URL } from '@env';
import { applyAuthTokenInterceptor } from 'react-native-axios-jwt';
import { showErrorToast } from '@core/toast';
import { requestRefresh } from './auth';

const httpClient = axios.create({
  baseURL: API_URL,
});

applyAuthTokenInterceptor(httpClient, {
  requestRefresh,
  header: 'Authorization',
  headerPrefix: 'Bearer ',
});

httpClient.interceptors.response.use(
  async (response) => response.data,
  async (error) => {
    const { response } = error;

    if (response.data.message) {
      showErrorToast(response.data.message);
    }

    return Promise.reject(error);
  },
);

export default httpClient;
