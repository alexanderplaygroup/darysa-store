import { ApiError } from '../interfaces';

export function handleApiSuccess<T>(data: T) {
  return {
    ok: true as const,
    data,
  };
}

export function handleApiError(err: unknown) {
  const error = err as ApiError;

  return {
    ok: false as const,
    status: error.status,
    message: error.message,
    errors: error.errors,
  };
}
