import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import { roomsDataSelector } from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserInfoComponent } from '@chats/components/user-info/user-info.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ToArrayPipe } from '@shared/pipes/to-array.pipe';

@Component({
  selector: 'app-main-chats-nav',
  templateUrl: './main-chats-nav.component.html',
  styleUrls: ['./main-chats-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    UserInfoComponent,
    AsyncPipe,
    ToArrayPipe,
    NgForOf,
    RouterLinkActive,
  ],
})
export class MainInfoNavComponent {
  private store = inject(Store<StoreState>);
  protected roomsData$: Observable<Rooms>;

  constructor() {
    this.roomsData$ = this.store.pipe(select(roomsDataSelector));
  }
}
