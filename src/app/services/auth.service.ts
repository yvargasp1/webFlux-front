import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environtment';
import { Login } from '../models/auth/login.dto';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = environment.apiUrl +'/auth';
  constructor(private http: HttpClient) {}

  login(body: Login) {
    return this.http.post<any>(`${this.URL}/login`, body);
  }
}
