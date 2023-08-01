import { Category } from './clients/categories/types';

export interface DataResponse<T> {
  data: T;
}

export interface ListResponse<T> extends DataResponse<T[]> {
  total: number;
}

export interface BaseModel {
  id: number;
  updated: string | null;
  created: string;
}

export interface BaseTask extends BaseModel {
  title: string;
  description: string;
  category: Category;
}

export interface BaseSaveTaskRequest {
  title: string;
  description: string;
  categoryId: number;
}

export interface BaseTasksFilter {
  isCompleted?: boolean | null;
  categoryId?: number | null;
}

export interface ListRequest<TFilter = undefined> {
  paging?: Paging;
  sort?: Sort;
  filter?: TFilter;
}

export interface Sort {
  sortBy: string;
  sortDirection: 'desc' | 'asc';
}

export interface Paging {
  limit: number;
  offset: number;
}
