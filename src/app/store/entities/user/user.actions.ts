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
