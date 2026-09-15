import type { AuthStore } from '@entities/session/index.ts';
import { registerApi, type RegisterPayload } from '../api/registerApi.ts';

export async function submitRegister(
  authStore: AuthStore,
  payload: RegisterPayload,
): Promise<void> {
  const tokens = await registerApi.register(payload);
  authStore.applySession(tokens);
}
