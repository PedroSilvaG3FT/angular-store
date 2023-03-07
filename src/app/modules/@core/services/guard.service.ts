import { Injectable } from '@angular/core';
import { UserType } from '../enums/user.enum';

@Injectable({ providedIn: 'root' })
export class GuardService {
  constructor() {}

  public isUserEnable(permission: UserType) {
    const hasToken = true;
    const isRule = !!permission;

    if (!hasToken) {
      console.log('REDIRECT TO LOGIN');
      return false;
    } else if (!isRule) {
      console.log('REDIRECT TO USER ORIGIN');
      return false;
    } else return true;
  }
}
