import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_ID = 'tokenId';
  private readonly USER = 'user';

  constructor() { }

  isSignedIn(): Observable<boolean> {
    return timer(0, 1000).pipe(
      map(() => !!this.getTokenId())
    );
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.USER) || '{}');
  }

  setUser(socialUser: SocialUser) {
    localStorage.setItem(this.USER, JSON.stringify(socialUser));
  }

  getTokenId(): string | null {
    return localStorage.getItem(this.TOKEN_ID);
  }

  setTokenId(tokenId: string): void {
    localStorage.setItem(this.TOKEN_ID, tokenId);
  }

  clearData() {
    localStorage.removeItem(this.USER);
    localStorage.removeItem(this.TOKEN_ID);
  }

  setData(socialUser: SocialUser) {
    this.setUser(socialUser);
    this.setTokenId(socialUser.idToken);
  }
}
