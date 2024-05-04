import { UserRole } from '@core/enums/user.roles.enum';
import { UserState } from './user.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import {
  loadUserAction,
  loadUserActionFailed,
  loadUserActionSuccess,
  logoutUserAction,
  logoutUserActionSuccess,
} from './user.actions';

const initialState: UserState = {
  isLoading: false,
  error: null,
  userData: null,
  role: UserRole.User,
};

const reducer = createReducer(
  initialState,
  on(
    loadUserAction,
    logoutUserAction,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(loadUserActionSuccess, (state, action): UserState => {
    const { email, username, image_id, is_admin } = action.user;
    const role = is_admin ? UserRole.Admin : UserRole.User;
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    return {
      ...state,
      userData: {
        username: name,
        email,
        image_id,
      },
      role,
      isLoading: false,
      error: null,
    };
  }),
  on(logoutUserActionSuccess, (state): UserState => {
    return {
      ...state,
      userData: null,
      role: UserRole.User,
      isLoading: false,
      error: null,
    };
  }),
  on(loadUserActionFailed, loadUserActionFailed, (state, action): UserState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);

export const userReducer: ActionReducer<UserState, Action> = (state, action) =>
  reducer(state, action);
