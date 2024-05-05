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

export const changeAvatarUserAction = createAction(
  '[User] Change Avatar',
  props<{ avatarID: string }>()
);
export const changeAvatarUserActionSuccess = createAction(
  '[User] Change Avatar Success',
  props<{ user: UserApiInterface }>()
);
export const changeAvatarActionFailed = createAction(
  '[User] Change Avatar Failed',
  props<{ error: ApiError }>()
);

export const changeUserNameAction = createAction(
  '[User] Change Username',
  props<{ username: string }>()
);
export const changeUserNameActionSuccess = createAction(
  '[User] Change Username Success',
  props<{ user: UserApiInterface }>()
);
export const changeUserNameFailed = createAction(
  '[User] Change Username Failed',
  props<{ error: ApiError }>()
);
