export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface TokensResponse {
  token: string;
  refreshToken: string;
}

export type RefreshTokenResponse = TokensResponse;
