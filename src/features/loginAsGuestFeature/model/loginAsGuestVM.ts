import { makeAutoObservable } from 'mobx';
import { loginAsGuestApi } from '../api/loginAsGuestApi';
import { sessionModel } from '@entities/session';
import { getApiError } from '@shared/api';
import { userModel } from '@entities/user';

export class LoginAsGuestVM {
  private _error: string | null = null;
  private _isPending = false;
  private _isOpenDialog = false;

  constructor() {
    makeAutoObservable(this);
  }

  get error() {
    return this._error;
  }

  get isPending() {
    return this._isPending;
  }

  get isOpenDialog() {
    return this._isOpenDialog;
  }

  set isOpenDialog(value: boolean) {
    this._isOpenDialog = value;
  }

  async submitLoginAsGuest() {
    this._error = null;
    this._isPending = true;
    try {
      const tokens = await loginAsGuestApi.guest();
      sessionModel.applySession(tokens);
      userModel.setUser(tokens.user);
    } catch (error) {
      this._error = getApiError(error).message;
    } finally {
      this._isPending = false;
    }
  }
}


export const loginAsGuestVM = new LoginAsGuestVM();