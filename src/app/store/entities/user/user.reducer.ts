import { UserRole } from '@core/enums/user.roles.enum';
import { UserState } from './user.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadUserAction, loadUserActionFailed, loadUserActionSuccess } from './user.actions';

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
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(loadUserActionSuccess, (state, action): UserState => {
    const { email, username, image_id, is_admin } = action.user;
    const role = is_admin ? UserRole.Admin : UserRole.User;
    return {
      ...state,
      userData: {
        username,
        email,
        image_id,
      },
      role: UserRole.User,
      isLoading: false,
      error: null,
    };
  }),
  on(loadUserActionFailed, (state, action): UserState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);

export const userReducer: ActionReducer<UserState, Action> = (state, action) =>
  reducer(state, action);
