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
