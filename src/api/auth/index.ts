import { TokenRefreshRequest } from 'react-native-axios-jwt';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '@env';
import { RefreshTokenRequest, RefreshTokenResponse } from './types';

const baseUrl = `${API_URL}/auth`;

export const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string,
) => {
  const formData = new FormData();
  formData.append('refreshToken', refreshToken);
  const headers = { 'Content-Type': 'multipart/form-data' };

  const response = await axios.post<
    RefreshTokenRequest,
    AxiosResponse<RefreshTokenResponse>
  >(`${baseUrl}/token/refresh`, formData, { headers });

  return {
    accessToken: response.data.token,
    refreshToken: response.data.refreshToken,
  };
};
