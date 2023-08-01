import { OAuthLoginRequest, TokensResponse } from './types';
import httpClient from '../../httpClient';

const baseUrl = '/oauth';

export const oauthLogin = (request: OAuthLoginRequest) => {
  return httpClient.post<OAuthLoginRequest, TokensResponse>(baseUrl, request);
};
