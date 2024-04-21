import { Component, OnInit, inject } from '@angular/core';
import { RoomInfo } from '@chats/model/rooms.interface';
import { Store, select } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { roomsInfoSelector } from '@store/entities/roomsByID/roomsByID.selectors';
import { setAsideStateAction } from '@store/ui/components/components.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  private store = inject(Store<StoreState>);
  protected roomsInfo$: Observable<RoomInfo[]>;

  constructor() {
    this.roomsInfo$ = this.store.pipe(select(roomsInfoSelector));
  }
}
