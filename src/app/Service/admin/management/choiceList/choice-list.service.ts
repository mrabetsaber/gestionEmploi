import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChoiceListService {

  private baseUrl = 'http://localhost:8080/choiceList';
  

  constructor(private http: HttpClient) { }

  getChoiceList(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createChoiceList(ChoiceList: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, ChoiceList);
  }

  updateChoiceList(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteChoiceList(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getChoiceListList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
