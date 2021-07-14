import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shopExample } from '../mocks/shop.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/shared/models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  endpoint = environment.endpointBaseApi + '/shops';

  constructor(
    private http: HttpClient
  ) { }

  getByName(name: string): Observable<Shop> {
    if(environment.mock) {
      return of(shopExample);
    } else {
      return this.http.get<Shop>(`${this.endpoint}/${name}`)
    }

  }

}
