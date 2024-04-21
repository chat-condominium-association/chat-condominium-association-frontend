import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import {
  loadRoomsInfoAction,
  loadRoomsInfoActionFailed,
  loadRoomsInfoActionSuccess,
} from './roomsByID.actions';
import { ChatsApiService } from '@chats/services/chats-api.service';

@Injectable()
export class RommsByIDEffects {
  private actions$ = inject(Actions);
  private chatsApiService = inject(ChatsApiService);

  loadRoomsInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRoomsInfoAction),
      switchMap(() => {
        return this.chatsApiService.getRooms().pipe(
          map(rooms => {
            return loadRoomsInfoActionSuccess({
              rooms,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loadRoomsInfoActionFailed({ error: error.error }));
          })
        );
      })
    )
  );
}
