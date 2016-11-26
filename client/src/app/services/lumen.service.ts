import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LumenService{



  constructor(private _http: Http){
    console.log("Lumen Service Ready............");

  }

  getUser(){
    return this._http.get('/api/users').map(res => res.json());
  }
  
}