import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDatas(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/data');
  }
  postDatas(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/data', data);
  }
}
