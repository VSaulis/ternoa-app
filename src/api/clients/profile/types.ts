import { BaseModel } from '@api/types';

export interface Profile extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
}
