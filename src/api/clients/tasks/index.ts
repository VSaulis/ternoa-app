import { DataResponse, ListRequest, ListResponse } from '@api/types';
import {
  SaveTaskRequest,
  Task,
  TasksFilter,
  UpdateTaskCompletionRequest,
} from './types';
import httpClient from '../../httpClient';

const baseUrl = '/tasks';

export const getTasks = (request: ListRequest<TasksFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<void, ListResponse<Task>>(baseUrl, { params });
};

export const getTask = (id: number) => {
  return httpClient.get<void, DataResponse<Task>>(`${baseUrl}/${id}`);
};

export const addTask = (request: SaveTaskRequest) => {
  return httpClient.post<SaveTaskRequest, DataResponse<Task>>(baseUrl, request);
};

export const editTask = (id: number, request: SaveTaskRequest) => {
  return httpClient.put<SaveTaskRequest, DataResponse<Task>>(
    `${baseUrl}/${id}`,
    request,
  );
};

export const updateTaskCompletion = (
  id: number,
  request: UpdateTaskCompletionRequest,
) => {
  return httpClient.put<UpdateTaskCompletionRequest, DataResponse<Task>>(
    `${baseUrl}/${id}/completion`,
    request,
  );
};

export const deleteTask = (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
