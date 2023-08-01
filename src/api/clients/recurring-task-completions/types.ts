export interface RecurringTaskCompletion {
  id: number;
  completed: string;
}

export interface AddRecurringTaskCompletionRequest {
  recurringTaskId: number;
  completed: string;
}
