import { BaseSaveTaskRequest, BaseTask, BaseTasksFilter } from '@api/types';

export interface Task extends BaseTask {
  dueDate: string | null;
  completed: string | null;
}

export interface SaveTaskRequest extends BaseSaveTaskRequest {
  dueDate?: string | null;
  completed?: string | null;
}

export interface UpdateTaskCompletionRequest {
  completed?: string | null;
}

export interface TasksFilter extends BaseTasksFilter {
  isOverdue?: boolean | null;
}
