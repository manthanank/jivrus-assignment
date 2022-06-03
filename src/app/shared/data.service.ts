import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStates() {
    return this.http.get('http://localhost:3000/states');
  }
  getDistricts() {
    return this.http.get('http://localhost:3000/districts');
  }
}
