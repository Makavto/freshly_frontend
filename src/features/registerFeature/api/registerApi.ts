import { http } from '@shared/api/index.ts';
import type { AuthTokens } from '@entities/session/index.ts';

export type RegisterPayload = {
  email: string;
  nickname: string;
  password: string;
};

export const registerApi = {
  register(payload: RegisterPayload) {
    return http
      .post<AuthTokens>('/auth/register', payload)
      .then((response) => response.data);
  },
};
