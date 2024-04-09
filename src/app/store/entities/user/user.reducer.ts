import { UserRole } from '@core/enums/user.roles.enum';
import { UserState } from './user.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadUserAction } from './user.actions';

const initialState: UserState = {
  isLoading: false,
  error: null,
  username: null,
  email: null,
  image_id: null,
  role: UserRole.User,
  isLoggedIn: false,
};

const reducer = createReducer(
  initialState,
  on(
    loadUserAction,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  )
);

export const userReducer: ActionReducer<UserState, Action> = (state, action) =>
  reducer(state, action);
