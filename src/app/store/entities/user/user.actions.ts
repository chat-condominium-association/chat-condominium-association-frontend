import { createAction, props } from '@ngrx/store';
import { ApiError } from '@core/models/api.inetrface';
import { UserApiInterface } from '@chats/model/user.interface';

export const loadUserAction = createAction('[User] Load User');
export const loadUserActionSuccess = createAction(
  '[User] Load User Success',
  props<{ user: UserApiInterface }>()
);
export const loadUserActionFailed = createAction(
  '[User] Load User Failed',
  props<{ error: ApiError }>()
);

export const logoutUserAction = createAction('[User] Logout');
export const logoutUserActionSuccess = createAction('[User] Logout Success');
export const logoutUserActionFailed = createAction(
  '[User] Logout Failed',
  props<{ error: ApiError }>()
);
