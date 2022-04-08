import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl = 'http://localhost:8080/group';
  

  constructor(private http: HttpClient) { }

  getgroup(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  creategroup(group: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, group);
  }

  updategroup(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletegroup(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getgroupList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
