import axios from 'axios';

export type ApiError = {
  statusCode: number;
  message: string;
};

export function getApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string | string[] } | undefined;
    const raw = data?.message;
    const message = Array.isArray(raw)
      ? raw.join(', ')
      : typeof raw === 'string'
        ? raw
        : error.message;

    return {
      statusCode: error.response?.status ?? 0,
      message,
    };
  }

  return {
    statusCode: 0,
    message: error instanceof Error ? error.message : 'Unknown error',
  };
}
