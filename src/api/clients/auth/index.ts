import {
  ChangePasswordRequest,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  RemindPasswordRequest,
} from './types';
import httpClient from '../../httpClient';

const baseUrl = '/auth';

export const login = async (request: LoginRequest) => {
  return httpClient.post<LoginRequest, LoginResponse>(
    `${baseUrl}/login`,
    request,
  );
};

export const register = async (request: RegisterRequest) => {
  return httpClient.post<RegisterRequest, RegisterResponse>(
    `${baseUrl}/register`,
    request,
  );
};

export const remindPassword = (request: RemindPasswordRequest) => {
  return httpClient.post<RemindPasswordRequest>(
    `${baseUrl}/remind-password`,
    request,
  );
};

export const changePassword = (request: ChangePasswordRequest) => {
  const { token, ...rest } = request;

  return httpClient.post<ChangePasswordRequest>(
    `${baseUrl}/change-password`,
    rest,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
};
