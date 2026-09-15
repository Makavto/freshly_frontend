import { useContext } from 'react';
import { UserStoreContext } from './UserStoreContext.ts';
import type { UserStore } from './userStore.ts';

export function useUserStore(): UserStore {
  const store = useContext(UserStoreContext);
  if (!store) {
    throw new Error('UserStoreProvider is missing');
  }
  return store;
}
