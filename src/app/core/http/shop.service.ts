import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shopExample } from '../mocks/shop.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endpoint = environment.endpointBaseApi + '/shops';

  constructor(
    private http: HttpClient
  ) { }

  getInfoByName(name: string): Observable<any> {
    if(environment.mock) {
      return of(shopExample);
    } else {
      return this.http.get(`${this.endpoint}/${name}`)
    }

  }

}
