import { createContext } from 'react';
import type { AuthStore } from './authStore.ts';

export const AuthStoreContext = createContext<AuthStore | null>(null);
