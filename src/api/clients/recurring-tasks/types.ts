import { BaseSaveTaskRequest, BaseTask, BaseTasksFilter } from '@api/types';
import { RecurringTaskCompletion } from '../recurring-task-completions/types';

export type RecurringTaskFrequency = 'everyday' | 'weekday' | 'month' | 'year';

export interface RecurringTask extends BaseTask {
  completions: RecurringTaskCompletion[];
  frequency: RecurringTaskFrequency;
  days: number[];
  weekdays: number[];
  months: number[];
}

export interface SaveRecurringTaskRequest extends BaseSaveTaskRequest {
  frequency: RecurringTaskFrequency;
  days?: number[] | null;
  weekdays?: number[] | null;
  months?: number[] | null;
}

export interface RecurringTasksFilter extends BaseTasksFilter {
  date: string;
}
