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
  insertProperty(newHouse) {
    console.log(newHouse);
      return new Promise((resolve, reject) => {
        this._http.post('/api/add-house', newHouse)
          .subscribe(res => {
            // this.add(res);
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
  }
  deleteProperty(id) {
    return new Promise((resolve, reject) => {
      this._http.post('/api/delete-house/' + id, id)
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}
