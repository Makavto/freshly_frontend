import { http } from '@shared/api/index.ts';
import type { AuthTokens } from '@entities/session/index.ts';

export type LoginPayload = {
  email: string;
  password: string;
};

export const loginApi = {
  login(payload: LoginPayload) {
    return http
      .post<AuthTokens>('/auth/login', payload, {
        skipAuthHeader: true,
        skipAuthRefresh: true,
      })
      .then((response) => response.data);
  },
};
