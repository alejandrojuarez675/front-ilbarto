import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/interceptor/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  isSignedIn: Observable<boolean>;

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
  ) {
    this.isSignedIn = this.authService.isSignedIn();
  }

  ngOnInit(): void {
  }

  loginWithGoogle(): void {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.authService.setData(user);
        this.router.navigate(['/admin/dashboard']);
      });
  }

  logout(): void {
    this.authService.clearData();
  }
}
