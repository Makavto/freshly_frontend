import { useContext } from 'react';
import { AuthStoreContext } from './AuthStoreContext.ts';
import type { AuthStore } from './authStore.ts';

export function useAuthStore(): AuthStore {
  const store = useContext(AuthStoreContext);
  if (!store) {
    throw new Error('AuthStoreProvider is missing');
  }
  return store;
}
