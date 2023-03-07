import { Injectable } from '@angular/core';
import { PersistService } from '@/store/services/persist.service';
import { decodeJWT } from '@/modules/@core/functions/jwt.function';
import { IAuthInitialState } from '@/store/@interfaces/auth.interface';

@Injectable()
export class AuthStore extends PersistService {
  constructor() {
    super('auth');
  }

  public get state() {
    return this.getState<IAuthInitialState>({
      user: {},
      token: '',
    } as IAuthInitialState);
  }

  public get decodedToken() {
    return decodeJWT(this.state?.token);
  }

  public setUser(user: object) {
    const state = this.state;

    state.user = user;
    this.commit(state);
  }

  public setToken(value: string) {
    const state = this.state;

    state.token = value;
    this.commit(state);
  }

  public logout() {
    const state = this.state;

    state.user = {};
    state.token = '';
    this.commit(state);
  }
}
