// services/auth.service.ts
import { ApiResult } from '@/common/helpers/handleApiResult';
import { ApiError, User } from '@/common/interfaces';
import { api } from '@/lib/api';
import { LoginPayload, RegisterUserPayload } from './interfaces';

export async function registerUser(data: RegisterUserPayload): Promise<ApiResult<User>> {
  try {
    const response = await api.post<{ user: User }>('v1/auth/register', data);
    return {
      success: response.success,
      message: response.message,
      data: response.data?.user,
    };
  } catch (err) {
    const error = err as ApiError;
    return {
      success: false,
      message: error.message,
      errors: error.errors,
    };
  }
}

export async function loginUser(data: LoginPayload): Promise<ApiResult<User>> {
  try {
    const response = await api.post<{ user: User }>('v1/auth/login', data, {
      credentials: 'include',
    });
    return {
      success: response.success,
      message: response.message,
      data: response.data?.user,
    };
  } catch (err) {
    const error = err as ApiError;
    return {
      success: false,
      message: error.message,
      errors: error.errors,
    };
  }
}

export async function getMe(): Promise<ApiResult<User>> {
  try {
    const response = await api.get<{ user: User }>('v1/auth/me', {
      credentials: 'include',
    });
    return {
      success: response.success,
      message: response.message,
      data: response.data?.user,
    };
  } catch (err) {
    const error = err as ApiError;

    return {
      success: false,
      message: error.message,
      errors: error.errors,
    };
  }
}
