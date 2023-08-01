import { ListResponse } from '@api/types';
import httpClient from '@api/httpClient';
import { Category } from './types';

const baseUrl = '/categories';

export const getCategories = () => {
  return httpClient.get<void, ListResponse<Category>>(baseUrl);
};
