import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import {
  editRoomAction,
  editRoomActionFailed,
  editRoomActionSuccess,
  loadRoomsInfoAction,
  loadRoomsInfoActionFailed,
  loadRoomsInfoActionSuccess,
} from './roomsByID.actions';
import { ChatsApiService } from '@chats/services/chats-api.service';
import { SnackBarService } from '@shared/services/snack-bar.service';

@Injectable()
export class RommsByIDEffects {
  private actions$ = inject(Actions);
  private chatsApiService = inject(ChatsApiService);
  private snackBar = inject(SnackBarService);

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

  editRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editRoomAction),
      switchMap(({ roomID, editData }) => {
        return this.chatsApiService.editRoom(roomID, editData).pipe(
          map(room => {
            this.snackBar.showSnackbar('Назву кімнати змінено');
            return editRoomActionSuccess({
              room,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this.snackBar.showSnackbar(`Виникла помилка: ${error.message}`, false);
            return of(editRoomActionFailed({ roomID, error: error.error }));
          })
        );
      })
    )
  );
}
