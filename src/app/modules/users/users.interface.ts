import { UserRole } from './users.constants';

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: 'admin' | 'user';
  image: string;
}

export type TUserRole = keyof typeof UserRole;
