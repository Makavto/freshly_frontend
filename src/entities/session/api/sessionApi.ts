import type { User } from '@entities/user/index.ts';
import { http } from '@shared/api/index.ts';
import '../lib/httpConfig.ts';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

const withoutAuth = {
  skipAuthHeader: true,
  skipAuthRefresh: true,
};

export const sessionApi = {
  refresh(refreshToken: string) {
    return http
      .post<AuthTokens>('/auth/refresh', { refreshToken }, withoutAuth)
      .then((response) => response.data);
  },

  logout(refreshToken: string) {
    return http.post('/auth/logout', { refreshToken }, withoutAuth);
  },
};
