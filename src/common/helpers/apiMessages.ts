/* eslint-disable @typescript-eslint/no-explicit-any */
// helpers/apiMessages.ts

import { ApiResult } from './handleApiResult';

export function getErrorMessage(result: ApiResult<any>): string {
  if (!result.errors) return 'Hubo un error desconocido';
  return Object.values(result.errors).flat().join(' | ');
}
