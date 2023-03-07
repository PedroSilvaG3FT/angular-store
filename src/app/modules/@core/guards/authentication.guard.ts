import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  UrlTree,
  CanActivateChild,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivateChild {
  constructor() {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasToken = true;
    if (!hasToken) return true;

    console.log('REDIRECT TO USER ORIGIN');

    return false;
  }
}
