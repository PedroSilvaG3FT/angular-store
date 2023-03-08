import { Injectable } from '@angular/core';
import { RouteService } from './route.service';
import { AuthStore } from '@/store/modules/auth/auth.store';
import { IUserAuthentication } from '../interfaces/user.interface';
import { AuthenticationService } from '@/modules/authentication/services/authentication.service';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private authStore: AuthStore,
    private routeService: RouteService,
    private authenticationService: AuthenticationService
  ) {}

  public async login(data: IUserAuthentication) {
    try {
      const response = await this.authenticationService.signIn(data);

      if (!response.user) throw new Error('user error');

      this.authStore.setUser({
        uid: response.user.uid || '',
        email: response.user.email || '',
        photoURL: response.user.photoURL || '',
        emailVerified: response.user.emailVerified,
        displayName: response.user.displayName || '',
      });

      this.authStore.setToken(response.user.refreshToken);
      this.routeService.goToHome();
    } catch (error) {
      throw error;
    }
  }

  public async logout() {
    try {
      await this.authenticationService.signOut();
      this.authStore.logout();
      this.routeService.goToLogin();
    } catch (error) {
      throw error;
    }
  }
}
