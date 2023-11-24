import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private baseUrl: string;
  
    constructor(private http: HttpClient) {
      this.baseUrl = 'https://dummyjson.com/products';
    }
  
    public getAkosPrediction(): Observable<Array<any>> {
      let options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': '/',
          'Access-Control-Allow-Origin': '*'
        })
      }
      return this.http.get<Array<any>>(this.baseUrl + '', options);
    }
}