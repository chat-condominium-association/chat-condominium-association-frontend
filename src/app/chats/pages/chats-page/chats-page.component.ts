import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { firstRoomIDSelector, roomsDataLoadingSelector } from '@store/entities/roomsByID/roomsByID.selectors';
import { filter, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
  standalone: true,
})
export class ChatsPageComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store<StoreState>);

  ngOnInit(): void {
    this.redirectToTheFirstRoomPage();
  }

  private redirectToTheFirstRoomPage(): void {
    const firstRoomID$ = this.store.select(firstRoomIDSelector);
    const isLoading$ = this.store.select(roomsDataLoadingSelector);

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
