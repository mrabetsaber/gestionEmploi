import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:8080/prof';
  private loginUrl = 'http://localhost:8080/loginprof';

  constructor(private http: HttpClient,private auth:AuthService) { }

  getTeacher(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTeacher(Teacher: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Teacher);
  }

  updateTeacher(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTeacherList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  login(Teacher: Object): Observable<any> {
    this.auth.setToken("Teacher");
    return this.http.post(`${this.loginUrl}`, Teacher);
  }
}
