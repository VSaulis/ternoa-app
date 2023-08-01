import { DataResponse, ListRequest, ListResponse } from '@api/types';
import {
  RecurringTask,
  RecurringTasksFilter,
  SaveRecurringTaskRequest,
} from './types';
import httpClient from '../../httpClient';

const baseUrl = '/recurring-tasks';

export const getRecurringTasks = (
  request: ListRequest<RecurringTasksFilter>,
) => {
  const params = { ...request.filter };
  return httpClient.get<void, ListResponse<RecurringTask>>(baseUrl, { params });
};

export const getRecurringTask = (id: number) => {
  return httpClient.get<void, DataResponse<RecurringTask>>(`${baseUrl}/${id}`);
};

export const addRecurringTask = (request: SaveRecurringTaskRequest) => {
  return httpClient.post<SaveRecurringTaskRequest, DataResponse<RecurringTask>>(
    baseUrl,
    request,
  );
};

export const editRecurringTask = (
  id: number,
  request: SaveRecurringTaskRequest,
) => {
  return httpClient.put<SaveRecurringTaskRequest, DataResponse<RecurringTask>>(
    `${baseUrl}/${id}`,
    request,
  );
};
