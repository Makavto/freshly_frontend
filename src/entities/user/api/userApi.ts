import { http } from '@shared/api/index.ts';
import type { User } from '../model/types.ts';

export const userApi = {
  me() {
    return http.get<User>('/auth/me').then((response) => response.data);
  },
};
