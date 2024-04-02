import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserApiInterface } from '@core/models/user.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private readonly USER_API_URL = `${environment.apiUrl}user/`;

  private readonly USER_GET_TOKEN_URL = 'get_token';
  private readonly USER_GET_INFO_URL = 'my_info';

  getToken(): Observable<string> {
    const url = `${this.USER_API_URL}${this.USER_GET_TOKEN_URL}`;
    return this.http.get<string>(url);
  }

  getUserInfo(): Observable<UserApiInterface> {
    const url = `${this.USER_API_URL}${this.USER_GET_INFO_URL}`;
    return this.http.get<UserApiInterface>(url);
  }
}
