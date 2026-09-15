import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { http } from '@shared/api/index.ts';
import { tokenStorage } from './tokenStorage.ts';
import './httpConfig.ts';

const SKIP_REFRESH_URLS = ['/auth/login', '/auth/refresh', '/auth/guest'];

let interceptorsReady = false;

export type AuthInterceptorDeps = {
  refresh: () => Promise<string>;
  clearSession: () => void;
};

function isAuthSkipUrl(url: string | undefined): boolean {
  if (!url) {
    return false;
  }
  return SKIP_REFRESH_URLS.some((path) => url.includes(path));
}

function shouldSkipRefresh(config: InternalAxiosRequestConfig): boolean {
  return Boolean(config.skipAuthRefresh) || isAuthSkipUrl(config.url);
}

export function setupAuthInterceptors(deps: AuthInterceptorDeps): void {
  if (interceptorsReady) {
    return;
  }
  interceptorsReady = true;

  http.interceptors.request.use((config) => {
    if (config.skipAuthHeader) {
      return config;
    }
    const accessToken = tokenStorage.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  // 401 на любом запросе через http: один refresh на пачку, затем повтор
  http.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const original = error.config;
      if (!original || error.response?.status !== 401) {
        return Promise.reject(error);
      }

      if (shouldSkipRefresh(original)) {
        return Promise.reject(error);
      }

      if (original._retry) {
        deps.clearSession();
        return Promise.reject(error);
      }

      original._retry = true;

      if (!tokenStorage.getRefreshToken()) {
        deps.clearSession();
        return Promise.reject(error);
      }

      try {
        const accessToken = await deps.refresh();
        original.headers.Authorization = `Bearer ${accessToken}`;
        return http(original);
      } catch (refreshError) {
        deps.clearSession();
        return Promise.reject(refreshError);
      }
    },
  );
}
