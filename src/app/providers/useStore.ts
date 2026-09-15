import { useContext } from 'react';
import type { RootStore } from '../stores/rootStore.ts';
import { StoreContext } from './StoreContext.ts';

export function useStore(): RootStore {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('StoreProvider is missing');
  }
  return store;
}
