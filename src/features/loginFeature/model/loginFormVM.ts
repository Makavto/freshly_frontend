import { getApiError } from '@shared/api/error';
import { makeAutoObservable } from 'mobx';
import { loginApi } from '../api/loginApi';
import { sessionModel } from '@entities/session';
import { userModel } from '@entities/user';

export interface ILoginForm {
  email: string;
  password: string;
}

class LoginFormVM {
  private _isPending = false;
  private _error: string | null = null;

  get isPending() {
    return this._isPending;
  }

  get error() {
    return this._error;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async submitLogin(email: string, password: string) {
    this._error = null;
    this._isPending = true;
    try {
      const tokens = await loginApi.login({ email, password });
      sessionModel.applySession(tokens);
      userModel.setUser(tokens.user);
    } catch (error) {
      const apiError = getApiError(error);
      if (apiError.statusCode === 401) {
        this._error = 'Неверный e-mail или пароль';
      } else {
        this._error = apiError.message;
      }
      throw error;
    } finally {
      this._isPending = false;
    }
  }
}

export const loginFormVM = new LoginFormVM();