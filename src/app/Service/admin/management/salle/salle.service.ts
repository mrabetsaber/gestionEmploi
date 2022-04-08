import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private baseUrl = 'http://localhost:8080/salle';
  

  constructor(private http: HttpClient) { }

  getSalle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSalle(Salle: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Salle);
  }

  updateSalle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSalle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSalleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
