import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserApiService } from '@chats/services/user-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import {
  changeAvatarActionFailed,
  changeAvatarUserAction,
  changeAvatarUserActionSuccess,
  changeUserNameAction,
  changeUserNameActionSuccess,
  changeUserNameFailed,
  loadUserAction,
  loadUserActionFailed,
  loadUserActionSuccess,
  logoutUserAction,
  logoutUserActionFailed,
  logoutUserActionSuccess,
} from './user.actions';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userApiService = inject(UserApiService);
  private router = inject(Router);

  loadUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserAction),
      switchMap(() => {
        return this.userApiService.getUserInfo().pipe(
          map(response => {
            return loadUserActionSuccess({
              user: response,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(loadUserActionFailed({ error: error.error }));
          })
        );
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutUserAction),
      switchMap(() => {
        return this.userApiService.logout().pipe(
          map(() => {
            this.router.navigate(['/']);
            return logoutUserActionSuccess();
          }),
          catchError((error: HttpErrorResponse) => {
            return of(logoutUserActionFailed({ error: error.error }));
          })
        );
      })
    )
  );

  changeAvatar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeAvatarUserAction),
      switchMap(({ avatarID }) => {
        return this.userApiService.changeAvatar(avatarID).pipe(
          map(response => {
            return changeAvatarUserActionSuccess({
              user: response,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(changeAvatarActionFailed({ error: error.error }));
          })
        );
      })
    )
  );

  changeUserName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeUserNameAction),
      switchMap(({ username }) => {
        return this.userApiService.changeUsername(username).pipe(
          map(response => {
            return changeUserNameActionSuccess({
              user: response,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(changeUserNameFailed({ error: error.error }));
          })
        );
      })
    )
  );
}
