import { Injectable } from '@angular/core';
import { FireBaseService } from '@/modules/@core/services/firebase.service';
import { IUserAuthentication } from '@/modules/@core/interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private fireBaseService: FireBaseService) {}

  public async createLogin(data: IUserAuthentication) {
    return this.fireBaseService.auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
  }

  public signIn(data: IUserAuthentication) {
    return this.fireBaseService.auth.signInWithEmailAndPassword(
      data.email,
      data.password
    );
  }

  public signOut() {
    return this.fireBaseService.auth.signOut();
  }
}
