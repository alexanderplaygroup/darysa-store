export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]> | null;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
