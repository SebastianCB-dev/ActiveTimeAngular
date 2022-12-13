import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';

import { FirebaseService } from 'src/app/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private fs: FirebaseService
  ) {
  }

   async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {
    const userSession: string = localStorage.getItem('att-session') || '';
    if(!userSession) {
      return this.router.navigateByUrl('/auth/login');
    }
    const user = await this.fs.getUser(userSession);
    if(!user) {
      localStorage.removeItem('att-session');
      return this.router.navigateByUrl('/auth/login');
    }
    return true;
  }

  async canLoad(
    route: Route,
    segments: UrlSegment[]): Promise<boolean> {

     const userSession: string = localStorage.getItem('att-session') || '';
     if (!userSession) {
       return this.router.navigateByUrl('/auth/login');
     }
     const user = await this.fs.getUser(userSession);
     if (!user) {
       localStorage.removeItem('att-session');
       return this.router.navigateByUrl('/auth/login');
     }
     return true;

  }
}
