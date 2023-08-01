import { DataResponse } from '@api/types';
import { Profile } from './types';
import httpClient from '../../httpClient';

const baseUrl = '/profile';

export const getProfile = async () => {
  return httpClient.get<void, DataResponse<Profile>>(baseUrl);
};
