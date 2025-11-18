/* eslint-disable @typescript-eslint/no-explicit-any */
// services/auth.service.ts

import { api } from '@/lib/api';
import { UserCreate } from './interfaces';

export async function registerUser(data: UserCreate) {
  try {
    const user = await api.post('v1/auth/register', data);

    return {
      ok: true,
      data: user,
    };
  } catch (err: any) {
    return {
      ok: false,
      status: err.status,
      message: err.message || 'Error inesperado',
      errors: err.data || null,
    };
  }
}
