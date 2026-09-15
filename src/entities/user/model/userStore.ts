import { makeAutoObservable } from 'mobx';
import type { User } from './types.ts';

export class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isGuest(): boolean {
    return this.user?.isGuest ?? false;
  }

  get isRegistered(): boolean {
    return this.user !== null && !this.user.isGuest;
  }

  setUser(user: User): void {
    this.user = user;
  }

  clear(): void {
    this.user = null;
  }
}
