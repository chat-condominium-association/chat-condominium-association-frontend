import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthInterface } from '@auth/models/auth.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthApiService {
  private readonly ADMIN_API_URL = `${environment.apiUrl}admin/`;

  private readonly ADMIN_REGISTER_ENDPOINT = 'register';
  private readonly ADMIN_LOGIN_ENDPOINT = 'login';

  private http = inject(HttpClient);

  signUp(data: AuthInterface): Observable<null> {
    const url = `${this.ADMIN_API_URL}${this.ADMIN_REGISTER_ENDPOINT}`;
    return this.http.post<null>(url, data);
  }

  signIn(data: AuthInterface): Observable<null> {
    const url = `${this.ADMIN_API_URL}${this.ADMIN_LOGIN_ENDPOINT}`;
    return this.http.post<null>(url, data);
  }
}
