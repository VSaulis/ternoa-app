export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
}

export interface RemindPasswordRequest {
  email: string;
}

export interface ChangePasswordRequest {
  password: string;
  token: string;
}

export interface TokensResponse {
  token: string;
  refreshToken: string;
}

export type LoginResponse = TokensResponse;
export type RegisterResponse = TokensResponse;
