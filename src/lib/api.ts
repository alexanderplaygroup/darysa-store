// lib/api.ts

import { API_URL } from '@/config/env.config';

export interface ApiError<T = unknown> {
  message: string;
  status?: number;
  data?: T;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

interface RequestOptions<BodyType = undefined> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: BodyType;
  headers?: Record<string, string>;
  credentials?: RequestCredentials;
}

async function apiRequest<ResponseType, BodyType = undefined>(
  endpoint: string,
  options: RequestOptions<BodyType> = {}
): Promise<ResponseType> {
  const { method = 'GET', body, headers = {}, credentials } = options;

  const config: RequestInit = {
    method,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    credentials: credentials || 'same-origin', // default
  };

  if (body) {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
    };
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${API_URL}/${endpoint}`, config);

  let json: ApiResponse<ResponseType> | null = null;

  try {
    json = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    throw {
      message: 'Respuesta no válida del servidor',
      status: res.status,
    } as ApiError<undefined>;
  }

  if (!res.ok) {
    throw {
      message: json?.message || 'Error en la petición',
      status: res.status,
      data: json?.data,
    } as ApiError<ResponseType>;
  }

  if (!json) {
    throw {
      message: 'Respuesta vacía del servidor',
      status: res.status,
    } as ApiError<undefined>;
  }

  return json.data as ResponseType;
}

export const api = {
  get: <T>(endpoint: string, options?: Omit<RequestOptions, 'method'>) =>
    apiRequest<T>(endpoint, { ...options, method: 'GET' }),

  post: <T, B = unknown>(endpoint: string, body?: B, options?: Omit<RequestOptions<B>, 'method'>) =>
    apiRequest<T, B>(endpoint, { ...options, method: 'POST', body }),

  put: <T, B = unknown>(endpoint: string, body?: B, options?: Omit<RequestOptions<B>, 'method'>) =>
    apiRequest<T, B>(endpoint, { ...options, method: 'PUT', body }),

  delete: <T>(endpoint: string, options?: Omit<RequestOptions, 'method'>) =>
    apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
};
