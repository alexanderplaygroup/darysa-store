// types/user/user-create.ts

import { User } from '@/common/interfaces';

export interface RegisterUserPayload extends Pick<User, 'full_name' | 'email'> {
  password: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
