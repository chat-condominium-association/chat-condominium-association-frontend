import { StoreState } from '@store/app.state.interface';
import { UserState } from './user.interface';
import { createSelector } from '@ngrx/store';

const selectUser = (state: StoreState): UserState => state.entities.user;

export const UserDataSelector = createSelector(selectUser, userState => userState.userData);
