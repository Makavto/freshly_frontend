import { AuthStore } from '@entities/session/index.ts';
import { UserStore } from '@entities/user/index.ts';

export class RootStore {
  readonly user: UserStore;
  readonly auth: AuthStore;

  constructor() {
    this.user = new UserStore();
    this.auth = new AuthStore(this.user);
  }
}

export const rootStore = new RootStore();
