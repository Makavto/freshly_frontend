export {};

declare module 'axios' {
  interface AxiosRequestConfig {
    skipAuthHeader?: boolean;
    skipAuthRefresh?: boolean;
    _retry?: boolean;
  }
}
