import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserApiInterface } from '@chats/model/user.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private http = inject(HttpClient);

  private readonly USER_API_URL = `${environment.apiUrl}user/`;
  private readonly USER_GET_TOKEN_URL = 'get_token';
  private readonly USER_GET_INFO_URL = 'my_info';
  private readonly USER_REFRESH_TOKEN_URL = 'refresh_token';
  private readonly USER_LOGOUT_URL = 'logout';

  getToken(): Observable<string> {
    const url = `${this.USER_API_URL}${this.USER_GET_TOKEN_URL}`;
    return this.http.get<string>(url, { withCredentials: true });
  }

  refreshAccessToken(): Observable<null> {
    const url = `${this.USER_API_URL}${this.USER_REFRESH_TOKEN_URL}`;
    return this.http.post<null>(url, null);
  }

  getUserInfo(): Observable<UserApiInterface> {
    const url = `${this.USER_API_URL}${this.USER_GET_INFO_URL}`;
    return this.http.get<UserApiInterface>(url);
  }

  logout(): Observable<null> {
    const url = `${this.USER_API_URL}${this.USER_LOGOUT_URL}`;
    return this.http.post<null>(url, {});
  }
}
