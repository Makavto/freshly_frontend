import type { AuthStore } from '@entities/session/index.ts';
import { loginAsGuestApi } from '../api/loginAsGuestApi.ts';

export async function submitLoginAsGuest(authStore: AuthStore): Promise<void> {
  const tokens = await loginAsGuestApi.guest();
  authStore.applySession(tokens);
}
