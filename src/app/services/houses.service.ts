import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HousesService {
  result: any;
  deletedCount: number;
  constructor(private _http: HttpClient) {
  }


  getAllHouses() {
    return this._http.get<any>('/api/houses').pipe(
      map(result => this.result = result.data));
  }
}
