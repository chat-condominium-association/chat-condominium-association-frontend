import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserApiService } from '@core/services/user-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { loadUserAction, loadUserActionFailed, loadUserActionSuccess } from './user.actions';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userApiService = inject(UserApiService);

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
}
