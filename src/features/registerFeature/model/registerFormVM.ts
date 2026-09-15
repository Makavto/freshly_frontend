import { userModel } from '@entities/user';
import { getApiError } from '@shared/api/error';
import { makeAutoObservable } from 'mobx';
import { registerApi } from '../api/registerApi';
import { sessionModel } from '@entities/session';

export interface IRegisterForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

class RegisterFormVM {
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

  async submitRegister({
    email,
    nickname,
    password,
  }: {
    email: string;
    nickname: string;
    password: string;
  }): Promise<void> {
    this._error = null;
    this._isPending = true;
    try {
      const tokens = await registerApi.register({ email, nickname, password });
      sessionModel.applySession(tokens);
      userModel.setUser(tokens.user);
    } catch (error) {
      const apiError = getApiError(error);
      console.error(apiError.statusCode === 409);
      if (apiError.statusCode === 409) {
        if (apiError.message.includes('Email')) {
          this._error = 'E-mail уже зарегистрирован';
        } else if (apiError.message.includes('Nickname')) {
          this._error = 'Имя пользователя уже занято';
        } else {
          this._error = apiError.message;
        }
      } else {
        this._error = apiError.message;
      }
      throw error;
    } finally {
      this._isPending = false;
    }
  }
}


export const registerFormVM = new RegisterFormVM();