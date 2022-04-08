import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/etudiant';
  private loginUrl = 'http://localhost:8080/loginEtudiant';

  constructor(private http: HttpClient, private auth:AuthService) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStudent(Student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  login(Student: Object): Observable<any> {
    this.auth.setToken("Student");
    return this.http.post(`${this.loginUrl}`, Student);
  }
}
