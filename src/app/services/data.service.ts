import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ModelRequest } from '../models/ModelRequest';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private baseUrl: string;
  
    constructor(private http: HttpClient) {
      this.baseUrl = 'http://localhost:5280';
    }
  
    public postPrediction(request: ModelRequest, activeModel: any): Observable<Array<Array<number>>> {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': '/',
          'Access-Control-Allow-Origin': '*'
        })
      }
      return this.http.post<Array<Array<number>>>(this.baseUrl + '/pm', JSON.stringify(request), options);
    }
}