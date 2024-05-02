import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  private http = inject(HttpClient);

  private readonly CHAT_API_URL = `${environment.apiUrl}chat/`;
  private readonly CHAT_ADMIN_USERS_LIST_URL = `admin/list_users`;
  private readonly CHAT_USERS_LIST_URL = `list_users`;
}
