import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private baseUrl = 'http://localhost:8080/matiere';
  

  constructor(private http: HttpClient) { }

  getMatiere(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMatiere(Matiere: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Matiere);
  }

  updateMatiere(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteMatiere(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMatiereList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
