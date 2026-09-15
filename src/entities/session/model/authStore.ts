import { makeAutoObservable, runInAction } from 'mobx';
import { getApiError } from '@shared/api/index.ts';
import { userApi } from '@entities/user/index.ts';
import type { UserStore } from '@entities/user/index.ts';
import { sessionApi, type AuthTokens } from '../api/sessionApi.ts';
import { tokenStorage } from '../lib/tokenStorage.ts';

export class AuthStore {
  isBootstrapped = false;

  _bootstrapPromise: Promise<void> | null = null;
  _refreshPromise: Promise<string> | null = null;
  readonly userStore: UserStore;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
    makeAutoObservable(this);
  }

  get isAuthenticated(): boolean {
    return this.userStore.user !== null;
  }

  bootstrap(): Promise<void> {
    if (this.isBootstrapped) {
      return Promise.resolve();
    }
    if (!this._bootstrapPromise) {
      this._bootstrapPromise = this.runBootstrap();
    }
    return this._bootstrapPromise;
  }

  async logout(): Promise<void> {
    const refreshToken = tokenStorage.getRefreshToken();
    this.clearSession();
    if (!refreshToken) {
      return;
    }
    try {
      await sessionApi.logout(refreshToken);
    } catch {
      return;
    }
  }

  refresh(): Promise<string> {
    if (!this._refreshPromise) {
      this._refreshPromise = this.runRefresh().finally(() => {
        this._refreshPromise = null;
      });
    }
    return this._refreshPromise;
  }

  applySession(tokens: AuthTokens): void {
    const previousRefresh = tokenStorage.getRefreshToken();
    tokenStorage.setTokens(tokens.accessToken, tokens.refreshToken);
    this.userStore.setUser(tokens.user);
    if (previousRefresh && previousRefresh !== tokens.refreshToken) {
      void sessionApi.logout(previousRefresh).catch(() => undefined);
    }
  }

  clearSession(): void {
    tokenStorage.clear();
    this.userStore.clear();
  }

  private async runBootstrap(): Promise<void> {
    const hasTokens = Boolean(
      tokenStorage.getAccessToken() || tokenStorage.getRefreshToken(),
    );
    if (!hasTokens) {
      runInAction(() => {
        this.isBootstrapped = true;
      });
      return;
    }

    try {
      const user = await userApi.me();
      runInAction(() => {
        this.userStore.setUser(user);
        this.isBootstrapped = true;
      });
    } catch (error) {
      const { statusCode } = getApiError(error);
      runInAction(() => {
        if (statusCode === 401) {
          this.clearSession();
        }
        this.isBootstrapped = true;
      });
    }
  }

  private async runRefresh(): Promise<string> {
    const refreshToken = tokenStorage.getRefreshToken();
    if (!refreshToken) {
      runInAction(() => {
        this.clearSession();
      });
      throw new Error('No refresh token');
    }

    const tokens = await sessionApi.refresh(refreshToken);
    runInAction(() => {
      this.applySession(tokens);
    });
    return tokens.accessToken;
  }
}
