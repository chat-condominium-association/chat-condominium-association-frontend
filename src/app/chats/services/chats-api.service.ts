import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EditRoom, RoomInfo } from '@chats/model/rooms.interface';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatsApiService {
  private http = inject(HttpClient);

  private readonly ROOMS_API_URL = `${environment.apiUrl}rooms/`;
  // private readonly CHAT_API_URL = `${environment.apiUrl}user/`;

  private readonly ROOM_EDIT_URL = 'admin/edit_room_name/';
  private readonly ROOMS_INFO_URL = 'info_rooms';

  getRooms(): Observable<RoomInfo[]> {
    const url = `${this.ROOMS_API_URL}${this.ROOMS_INFO_URL}`;
    return this.http.get<RoomInfo[]>(url);
  }

  editRoom(roomID: number, editData: EditRoom): Observable<RoomInfo> {
    const url = `${this.ROOMS_API_URL}${this.ROOM_EDIT_URL}${roomID}`;
    return this.http.put<RoomInfo>(url, editData);
  }
}
