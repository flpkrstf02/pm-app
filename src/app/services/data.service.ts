import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ModelRequest } from '../models/ModelRequest';
import { ModelType } from '../models/modelType.enum';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private baseUrlAkos: string;
    private baseUrlMartin: string;
    private baseUrlVajk: string;
  
    constructor(private http: HttpClient) {
      this.baseUrlAkos = 'http://localhost:80';
      this.baseUrlMartin = 'http://localhost:81';
      this.baseUrlVajk = 'http://localhost:82';
    }
  
    public postPrediction(request: ModelRequest, activeModel: ModelType): Observable<Array<Array<number>>> {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': '/',
          'Access-Control-Allow-Origin': '*'
        })
      }
      
      switch (activeModel){
        case ModelType.Akos:
          return this.http.post<Array<Array<number>>>(this.baseUrlAkos, JSON.stringify(request), options);
        case ModelType.Martin:
          return this.http.post<Array<Array<number>>>(this.baseUrlMartin, JSON.stringify(request), options);
        case ModelType.Vajk:
          return this.http.post<Array<Array<number>>>(this.baseUrlVajk, JSON.stringify(request), options);
        default:
          return new Observable<Array<Array<number>>>;
      }
    }
}