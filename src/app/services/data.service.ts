import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ResponseAkos } from '../models/ResponseAkos';
import { RequestAkos } from '../models/RequestAkos';

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private baseUrl: string;
  
    constructor(private http: HttpClient) {
      this.baseUrl = 'https://dummyjson.com/products';
    }
  
    public postAkosPrediction(request: RequestAkos): Observable<ResponseAkos> {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': '/',
          'Access-Control-Allow-Origin': '*'
        })
      }
      return this.http.post<ResponseAkos>(this.baseUrl + '/', JSON.stringify(request), options);
    }
}