// types/user/user-create.ts

import { User } from '@/common/interfaces';

export interface UserCreate extends Pick<User, 'full_name' | 'email'> {
  password: string;
}
