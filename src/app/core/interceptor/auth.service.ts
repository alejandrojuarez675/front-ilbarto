import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_ID = 'tokenId';
  private readonly USER = 'user';

  constructor() { }

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
}
