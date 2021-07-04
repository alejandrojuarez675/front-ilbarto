import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shopExample } from '../mocks/shop.mock';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getInfoByName(name: string): Observable<any> {
    return of(shopExample);
  }

}
