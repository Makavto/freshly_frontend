import type { ReactNode } from 'react';
import { AuthStoreContext } from './AuthStoreContext.ts';
import type { AuthStore } from './authStore.ts';

export function AuthStoreProvider({
  store,
  children,
}: {
  store: AuthStore;
  children: ReactNode;
}) {
  return (
    <AuthStoreContext.Provider value={store}>{children}</AuthStoreContext.Provider>
  );
}
