import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { Store } from '@ngrx/store';
import {
  selectRoomsDataLoading,
  selectFirstRoomID,
} from '@store/entities/roomsByID/roomsByID.selectors';
import { filter, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store);

  ngOnInit(): void {
    this.redirectToTheFirstRoomPage();
  }

  private redirectToTheFirstRoomPage(): void {
    const firstRoomID$ = this.store.select(selectFirstRoomID);
    const isLoading$ = this.store.select(selectRoomsDataLoading);

    isLoading$
      .pipe(
        filter(isLoading => !isLoading),
        switchMap(() => firstRoomID$),
        take(1)
      )
      .subscribe(firstChatID => {
        this.router.navigate([AppRoutes.CHATS_PAGE_ROUTE, firstChatID]);
      });
  }
}
