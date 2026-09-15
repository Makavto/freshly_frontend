import type { ReactNode } from 'react';
import { AuthStoreProvider } from '@entities/session/index.ts';
import { UserStoreProvider } from '@entities/user/index.ts';
import { StoreContext } from './StoreContext.ts';
import { rootStore } from '../stores/rootStore.ts';

export function StoreProvider({ children }: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={rootStore}>
      <UserStoreProvider store={rootStore.user}>
        <AuthStoreProvider store={rootStore.auth}>{children}</AuthStoreProvider>
      </UserStoreProvider>
    </StoreContext.Provider>
  );
}
