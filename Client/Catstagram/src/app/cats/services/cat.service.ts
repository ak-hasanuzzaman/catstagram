import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private catPath = environment.apiUrl + 'cats';
  constructor(private http: HttpClient, private authService: AuthService) {}

  create(data): Observable<Cat> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set(
      'Authorization',
      `Bearer ${this.authService.getToken()}`
    );

    return this.http.post<Cat>(this.catPath, data);
  }

  getCats(): Observable<Array<Cat>> {
    return this.http.get<Array<Cat>>(this.catPath);
  }

  getCat(id): Observable<Cat> {
    return this.http.get<Cat>(this.catPath + '/' + id);
  }

  editCat(data) {
    return this.http.put(this.catPath, data);
  }

  deleteCat(id) {
    return this.http.delete(this.catPath + '/' + id);
  }
}