import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoomInfo } from '@chats/model/rooms.interface';
import { Store, select } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import {
  roomsDataSelector,
  roomsInfoSelector,
} from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-chats-nav',
  templateUrl: './main-chats-nav.component.html',
  styleUrls: ['./main-chats-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoNavComponent {
  private store = inject(Store<StoreState>);
  protected roomsInfo$: Observable<RoomInfo[]>;

  constructor() {
    this.roomsInfo$ = this.store.pipe(select(roomsInfoSelector));
  }
}
