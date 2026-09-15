import { makeAutoObservable } from 'mobx';
import type { User } from './types.ts';

class UserModel {
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

export const userModel = new UserModel();