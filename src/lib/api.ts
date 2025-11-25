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
  noJson?: boolean;
  auth?: boolean;
}

function getAuthHeaders(): Record<string, string> {
  if (typeof window === 'undefined') return {}; // SSR safe

  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function apiRequest<Response, Body = undefined>(
  endpoint: string,
  options: RequestOptions<Body> = {}
): Promise<Response> {
  const {
    method = 'GET',
    body,
    headers = {},
    credentials = 'same-origin',
    signal,
    retry = 0,
    noJson = false,
    auth = false,
  } = options;

  // ✔ si el body es FormData NO se agrega JSON.stringify
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  const init: RequestInit = {
    method,
    credentials,
    signal,
    headers: {
      Accept: 'application/json',
      ...(auth ? getAuthHeaders() : {}),
      ...headers,
      ...(isFormData ? {} : body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? (isFormData ? (body as any) : JSON.stringify(body)) : undefined,
  };

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, init);

    if (noJson) {
      return response as unknown as Response;
    }

    const json = (await response.json()) as ApiResponse<Response>;

    if (!response.ok) {
      throw <ApiError>{
        message: json?.message ?? 'Error en la petición',
        status: response.status,
        errors: (json as any)?.errors ?? null,
      };
    }

    if (!json?.data) {
      throw <ApiError>{
        message: 'Respuesta vacía del servidor',
        status: response.status,
        errors: null,
      };
    }

    return json.data;
  } catch (error) {
    if (retry > 0) {
      return apiRequest<Response, Body>(endpoint, { ...options, retry: retry - 1 });
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
