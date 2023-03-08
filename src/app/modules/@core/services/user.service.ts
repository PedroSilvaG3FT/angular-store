import { Injectable } from '@angular/core';
import { FireBaseService } from './firebase.service';
import { IUser, IUserRegister } from '../interfaces/user.interface';
import { AuthenticationService } from '@/modules/authentication/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly path = 'users';

  constructor(
    private fireBaseService: FireBaseService,
    private authenticationService: AuthenticationService
  ) {}

  public createUser(data: IUser) {
    return this.fireBaseService.create(this.path, data);
  }

  public async create(data: IUserRegister) {
    try {
      const response = await this.authenticationService.createLogin({
        email: data.email,
        password: data.password,
      });

      await response.user?.updateProfile({
        photoURL: data.photoURL,
        displayName: data.displayName,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}
