import { StoreState } from '@store/app.state.interface';
import { UserState } from './user.interface';
import { createSelector } from '@ngrx/store';

const selectUser = (state: StoreState): UserState => state.entities.user;

export const userDataSelector = createSelector(selectUser, userState => userState.userData);
export const userAvatarIDSelector = createSelector(selectUser, userState =>
  String(userState.userData?.image_id)
);
export const userRoleSelector = createSelector(selectUser, userState => userState.role);
export const userLoggedInSelector = createSelector(selectUser, userState => !!userState.userData);

export const userErrorSelector = createSelector(selectUser, userState => userState.error);
export const isUserLoadingSelector = createSelector(selectUser, userState => userState.isLoading);
export const isUserEditLoadedSelector = createSelector(
  selectUser,
  userState => userState.isEditUserLoading
);

export const userNameErrorSelector = createSelector(
  selectUser,
  userState => userState.userNameError
);
