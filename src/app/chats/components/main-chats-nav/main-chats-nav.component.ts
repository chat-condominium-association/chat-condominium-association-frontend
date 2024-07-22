import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import { selectRoomsData } from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-chats-nav',
  templateUrl: './main-chats-nav.component.html',
  styleUrls: ['./main-chats-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoNavComponent {
  private store = inject(Store);
  protected roomsData$: Observable<Rooms>;

  constructor() {
    this.roomsData$ = this.store.select(selectRoomsData);
  }
}
