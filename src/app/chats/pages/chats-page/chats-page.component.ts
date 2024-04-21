import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { firstRoomIDSelector } from '@store/entities/roomsByID/roomsByID.selectors';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent {
  private router = inject(Router);
  private store = inject(Store<StoreState>);
  protected firstRoomID$: Observable<number>;

  constructor() {
    this.firstRoomID$ = this.store.select(firstRoomIDSelector);

    this.firstRoomID$.pipe(take(1)).subscribe(firstChatID => {
      this.router.navigate([AppRoutes.CHATS_PAGE_ROUTE, firstChatID]);
    });
  }
}
