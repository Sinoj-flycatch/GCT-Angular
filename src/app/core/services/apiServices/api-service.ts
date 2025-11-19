import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  http = inject(HttpClient);
  get<T, U extends Record<string, any>>(url: string, params?: U): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`, { params });
  }
  post<T, U>(url: string, data: U): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, data);
  }
  put<T, U>(url: string, data: U): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, data);
  }
  patch<T, U>(url: string, data: U): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${url}`, data);
  }

  delete<T>(url: string, id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}/${id}`);
  }
}
