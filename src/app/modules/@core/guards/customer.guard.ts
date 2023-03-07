import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserType } from '../enums/user.enum';
import { GuardService } from '../services/guard.service';
import {
  UrlTree,
  CanActivateChild,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CustomerGuard implements CanActivateChild {
  constructor(private guardService: GuardService) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.guardService.isUserEnable(UserType.customer);
  }
}
