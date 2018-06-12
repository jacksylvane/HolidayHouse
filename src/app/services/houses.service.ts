import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';

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
  uploadImage(img) {
    console.log(img);
    const headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json');
    // const requestOptions = {
    //   params: new HttpParams()
    // };
    // requestOptions.params.set('headers', 'headers');
    // const options = new RequestOptions({ headers: headers });
    return this._http.post('/api/upload-image', img, {
      headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
    })
      .subscribe(
        data => console.log('success'),
        error => console.log(error)
      );
  }
    // return new Promise((resolve, reject) => {
    //   this._http.post('/api/upload-image', img)
    //     .subscribe(res => {
    //       // this.add(res);
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
  // }
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
