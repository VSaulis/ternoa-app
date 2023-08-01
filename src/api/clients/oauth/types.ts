export type OAuthProvider = 'apple' | 'google';

export interface OAuthLoginRequest {
  code?: string;
  accessToken?: string;
  provider: OAuthProvider;
}

export interface TokensResponse {
  token: string;
  refreshToken: string;
}
