import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RoomInfo } from '@chats/model/rooms.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatsApiService {
  private http = inject(HttpClient);

  private readonly ROOMS_API_URL = `${environment.apiUrl}rooms/`;
  // private readonly CHAT_API_URL = `${environment.apiUrl}user/`;

  private readonly ROOM_EDIT_URL = 'admin/edit_room/';
  private readonly ROOMS_INFO_URL = 'info_rooms';

  getRooms(): Observable<RoomInfo[]> {
    const url = `${this.ROOMS_API_URL}${this.ROOMS_INFO_URL}`;
    return this.http.get<RoomInfo[]>(url);
  }
}
