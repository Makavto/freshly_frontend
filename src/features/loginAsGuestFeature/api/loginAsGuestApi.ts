import { http } from '@shared/api';
import type { AuthTokens } from '@entities/session';

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
