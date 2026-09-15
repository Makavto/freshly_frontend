import type { AuthStore } from '@entities/session/index.ts';
import { loginApi, type LoginPayload } from '../api/loginApi.ts';

export async function submitLogin(
  authStore: AuthStore,
  payload: LoginPayload,
): Promise<void> {
  const tokens = await loginApi.login(payload);
  authStore.applySession(tokens);
}
