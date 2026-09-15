import { createContext } from 'react';
import type { UserStore } from './userStore.ts';

export const UserStoreContext = createContext<UserStore | null>(null);
