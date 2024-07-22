import { StoreState } from '@store/app.state.interface';
import { UserState } from './user.interface';
import { createSelector } from '@ngrx/store';

const selectUser = (state: StoreState): UserState => state.entities.user;

export const selectUserData = createSelector(selectUser, userState => userState.userData);
export const selectUserAvatarID = createSelector(selectUser, userState =>
  String(userState.userData?.image_id)
);
export const selectUserRole = createSelector(selectUser, userState => userState.role);
export const selectUserLoggedIn = createSelector(selectUser, userState => !!userState.userData);

export const selectUserError = createSelector(selectUser, userState => userState.error);
export const selectIsUserLoading = createSelector(selectUser, userState => userState.isLoading);
export const selectIsUserEditLoaded = createSelector(
  selectUser,
  userState => userState.isEditUserLoading
);

export const selectUserNameError = createSelector(selectUser, userState => userState.userNameError);
