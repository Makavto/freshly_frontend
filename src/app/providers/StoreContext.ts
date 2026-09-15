import { createContext } from 'react';
import type { RootStore } from '../stores/rootStore.ts';

export const StoreContext = createContext<RootStore | null>(null);
