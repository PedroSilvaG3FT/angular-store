import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouteService } from '../services/route.service';
import { AuthStore } from '@/store/modules/auth/auth.store';
import {
  UrlTree,
  CanActivateChild,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivateChild {
  constructor(
    private authStore: AuthStore,
    private routeService: RouteService
  ) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!!this.authStore.state.token) {
      return true;
    }

    this.routeService.goToLogin();
    return false;
  }
}
