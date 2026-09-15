import { http } from '@shared/api/index.ts';
import type { AuthTokens } from '@entities/session/index.ts';

export const loginAsGuestApi = {
  guest() {
    return http
      .post<AuthTokens>('/auth/guest', undefined, {
        skipAuthHeader: true,
        skipAuthRefresh: true,
      })
      .then((response) => response.data);
  },
};
