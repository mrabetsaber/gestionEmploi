import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrancheService {

  private baseUrl = 'http://localhost:8080/branche';
  

  constructor(private http: HttpClient) { }

  getBranche(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBranche(Branche: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Branche);
  }

  updateBranche(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBranche(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBrancheList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
