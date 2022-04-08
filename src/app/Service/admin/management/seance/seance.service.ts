import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  private baseUrl = 'http://localhost:8080/seance';
  

  constructor(private http: HttpClient) { }

  getSeance(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSeance(Seance: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Seance);
  }

  updateSeance(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSeance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSeanceList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
