import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private loginPath = environment.apiUrl + 'identity/login';
  private registerPath = environment.apiUrl + 'identity/register';

  login(data): Observable<any> {
    return this.http.post(this.loginPath, data);
  }
  logout() {
    localStorage.removeItem('token');
  }
  register(data): Observable<any> {
    return this.http.post(this.registerPath, data);
  }
  saveToken(token) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
