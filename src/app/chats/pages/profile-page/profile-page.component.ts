import { Component, OnInit, inject } from '@angular/core';
import { RoomInfo } from '@chats/model/rooms.interface';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { Store, select } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { roomsInfoSelector } from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  private store = inject(Store<StoreState>);
  protected roomsInfo$: Observable<RoomInfo[]>;
  protected authService = inject(AuthService);
  protected UserRole = UserRole;

  constructor() {
    this.roomsInfo$ = this.store.pipe(select(roomsInfoSelector));
  }
}
