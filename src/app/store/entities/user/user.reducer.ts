import { UserRole } from '@core/enums/user.roles.enum';
import { UserState } from './user.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
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
  logoutUserActionSuccess,
} from './user.actions';

const initialState: UserState = {
  isLoading: false,
  isUserNameLoading: false,
  error: null,
  userNameError: null,
  userData: null,
  role: UserRole.User,
};

const reducer = createReducer(
  initialState,
  on(
    loadUserAction,
    logoutUserAction,
    changeAvatarUserAction,
    (state): UserState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    changeUserNameAction,
    (state): UserState => ({
      ...state,
      isUserNameLoading: true,
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
  on(changeAvatarUserActionSuccess, (state, action): UserState => {
    const { image_id } = action.user;
    return {
      ...state,
      userData: state.userData && {
        ...state.userData,
        image_id,
      },
      isLoading: false,
      error: null,
    };
  }),
  on(changeUserNameActionSuccess, (state, action): UserState => {
    const { username } = action.user;
    return {
      ...state,
      userData: state.userData && {
        ...state.userData,
        username,
      },
      isUserNameLoading: false,
      userNameError: null,
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
  on(loadUserActionFailed, changeAvatarActionFailed, (state, action): UserState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  }),
  on(changeUserNameFailed, (state, action): UserState => {
    return {
      ...state,
      isUserNameLoading: false,
      userNameError: action.error,
    };
  })
);

export const userReducer: ActionReducer<UserState, Action> = (state, action) =>
  reducer(state, action);
