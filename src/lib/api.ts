/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError, ApiResponse } from '@/common/interfaces';
import { API_URL } from '@/config/env.config';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions<Body = undefined> {
  method?: HttpMethod;
  body?: Body;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
  signal?: AbortSignal;
  retry?: number;
}

async function apiRequest<T = any, Body = undefined>(
  endpoint: string,
  options: RequestOptions<Body> = {}
): Promise<ApiResponse<T>> {
  const {
    method = 'GET',
    body,
    headers = {},
    credentials = 'same-origin',
    signal,
    retry = 0,
  } = options;

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  const init: RequestInit = {
    method,
    credentials,
    signal,
    headers: {
      Accept: 'application/json',
      ...headers,
      ...(isFormData ? {} : body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? (isFormData ? (body as any) : JSON.stringify(body)) : undefined,
  };

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, init);

    const json = (await response.json()) as ApiResponse<T>;

    if (!response.ok) {
      throw <ApiError>{
        message: json?.message ?? 'Error en la petición',
        status: response.status,
        errors: (json as any)?.errors ?? null,
      };
    }

    // Retornamos siempre el objeto completo del backend
    return json;
  } catch (error) {
    if (retry > 0) {
      return apiRequest<T, Body>(endpoint, { ...options, retry: retry - 1 });
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('API ERROR:', error);
    }

    throw error;
  }
}

export const api = {
  get: <T>(endpoint: string, options?: Omit<RequestOptions, 'method'>) =>
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),

  post: <T, B = unknown>(endpoint: string, body?: B, options?: Omit<RequestOptions<B>, 'method'>) =>
    apiRequest<T, B>(endpoint, { ...options, method: 'POST', body }),

  put: <T, B = unknown>(endpoint: string, body?: B, options?: Omit<RequestOptions<B>, 'method'>) =>
    apiRequest<T, B>(endpoint, { ...options, method: 'PUT', body }),

  patch: <T, B = unknown>(
    endpoint: string,
    body?: B,
    options?: Omit<RequestOptions<B>, 'method'>
  ) => apiRequest<T, B>(endpoint, { ...options, method: 'PATCH', body }),

  delete: <T>(endpoint: string, options?: Omit<RequestOptions, 'method'>) =>
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),

  upload: <T>(
    endpoint: string,
    formData: FormData,
    options?: Omit<RequestOptions<FormData>, 'method' | 'body'>
  ) =>
    apiRequest<T, FormData>(endpoint, {
      ...options,
      method: 'POST',
      body: formData,
    }),
};
