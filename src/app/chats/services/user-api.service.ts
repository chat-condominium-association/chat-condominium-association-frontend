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
  private readonly USER_CHANGE_AVATAR_URL = 'change_image';
  private readonly USER_CHANGE_USERNAME_URL = 'change_username';

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

  changeAvatar(avatarID: string): Observable<UserApiInterface> {
    const url = `${this.USER_API_URL}${this.USER_CHANGE_AVATAR_URL}/${Number(avatarID)}`;
    return this.http.patch<UserApiInterface>(url, {});
  }

  changeUsername(usernmae: string): Observable<UserApiInterface> {
    const url = `${this.USER_API_URL}${this.USER_CHANGE_AVATAR_URL}/${usernmae}`;
    return this.http.patch<UserApiInterface>(url, {});
  }
}
