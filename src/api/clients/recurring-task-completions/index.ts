import httpClient from '@api/httpClient';
import { DataResponse } from '@api/types';
import {
  AddRecurringTaskCompletionRequest,
  RecurringTaskCompletion,
} from './types';

const baseUrl = '/recurring-task-completions';

export const addRecurringTaskCompletion = (
  request: AddRecurringTaskCompletionRequest,
) => {
  return httpClient.post<
    AddRecurringTaskCompletionRequest,
    DataResponse<RecurringTaskCompletion>
  >(baseUrl, request);
};

export const deleteRecurringTaskCompletion = (id: number) => {
  return httpClient.delete(`${baseUrl}/${id}`);
};
