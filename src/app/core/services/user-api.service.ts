import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiError } from '@core/models/api.inetrface';
import { UserApiInterface } from '@core/models/user.interface';
import { environment } from '@environment/environment';
import { Icons } from '@shared/enums/icons.enum';
import { ModalService } from '@shared/services/modal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private http = inject(HttpClient);
  private modalService = inject(ModalService);

  private readonly USER_API_URL = `${environment.apiUrl}user/`;
  private readonly USER_GET_TOKEN_URL = 'get_token';
  private readonly USER_GET_INFO_URL = 'my_info';
  private readonly USER_REFRESH_TOKEN_URL = 'refresh_token';

  getToken(): Observable<string> {
    const url = `${this.USER_API_URL}${this.USER_GET_TOKEN_URL}`;
    return this.http.get<string>(url, { withCredentials: true });
  }

  refreshAccessToken(): Observable<null> {
    const url = `${this.USER_API_URL}${this.USER_REFRESH_TOKEN_URL}`;
    return this.http.post<null>(url, {});
  }

  getUserInfo(): Observable<UserApiInterface> {
    const url = `${this.USER_API_URL}${this.USER_GET_INFO_URL}`;
    return this.http.get<UserApiInterface>(url);
  }

  handleError(error: ApiError, buttonText: string): void {
    const errorMessage = error?.error?.detail || 'Виникла помилка';

    this.modalService.openModal({
      headerMessage: errorMessage,
      buttonText,
      showSubmitBtn: true,
      icon: Icons.alertExclamationIcon,
    });
  }
}
