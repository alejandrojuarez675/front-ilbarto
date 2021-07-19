import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../interceptor/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.socialAuthService.authState.pipe(
      tap((socialUser: SocialUser) => {
        this.authService.setUser(socialUser);
        this.authService.setTokenId(socialUser.idToken);
      }),
      map((socialUser: SocialUser) => !!socialUser),
      tap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['auth/login']); // TODO why this not work
        }
      })
    );
  }
}
