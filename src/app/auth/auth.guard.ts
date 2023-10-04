import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authSrv: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authSrv.isLoggedIn()) {
      return true;
    } else {
      alert ("Per visualizzare la pagina effettua il login!")
    return this.router.createUrlTree(['/login']);
  }
}
}

  /*{


    return this.authSrv.user$.pipe(
      take(1),
      map((user) => {
        if (user) {
          return true
        }
        alert('Per visualizzare questa risorsa accedi o registrati')
        return this.router.createUrlTree(['login']);
      })

    )


  }*/

