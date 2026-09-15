import { makeAutoObservable, runInAction } from 'mobx';
import { getApiError } from '@shared/api/index.ts';
import { userApi } from '@entities/user/index.ts';
import { userModel } from '@entities/user/index.ts';
import { sessionApi, type AuthTokens } from '../api/sessionApi.ts';
import { tokenStorage } from '../lib/tokenStorage.ts';

class SessionModel {
  isBootstrapped = false;

  _bootstrapPromise: Promise<void> | null = null;
  _refreshPromise: Promise<string> | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthenticated(): boolean {
    return userModel.user !== null;
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
    tokenStorage.setTokens(tokens.accessToken, tokens.refreshToken);
  }

  clearSession(): void {
    tokenStorage.clear();
    userModel.clear();
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
        userModel.setUser(user);
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

export const sessionModel = new SessionModel();