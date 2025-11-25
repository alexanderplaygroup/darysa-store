// services/auth.service.ts

import { handleApiError, handleApiSuccess } from '@/common/helpers/handleApiResult';
import { User } from '@/common/interfaces';
import { api } from '@/lib/api';
import { LoginPayload, RegisterUserPayload } from './interfaces';

export async function registerUser(data: RegisterUserPayload) {
  try {
    const response = await api.post('v1/auth/register', data);
    return handleApiSuccess(response);
  } catch (err) {
    return handleApiError(err);
  }
}

export async function loginUser(data: LoginPayload) {
  try {
    const user = await api.post<User>('v1/auth/login', data, {
      credentials: 'include',
    });
    return handleApiSuccess(user);
  } catch (err) {
    return handleApiError(err);
  }
}
