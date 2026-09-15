import type { ReactNode } from 'react';
import { UserStoreContext } from './UserStoreContext.ts';
import type { UserStore } from './userStore.ts';

export function UserStoreProvider({
  store,
  children,
}: {
  store: UserStore;
  children: ReactNode;
}) {
  return (
    <UserStoreContext.Provider value={store}>{children}</UserStoreContext.Provider>
  );
}
