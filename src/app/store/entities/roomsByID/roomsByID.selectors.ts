import { StoreState } from '@store/app.state.interface';
import { createSelector } from '@ngrx/store';
import { RommsByIDState } from './roomsByID.interface';

const selectUser = (state: StoreState): RommsByIDState => state.entities.rommsByID;

export const roomsInfoSelector = createSelector(
  selectUser,
  rommsByIDState => rommsByIDState.roomsInfo
);
export const firstRoomIDSelector = createSelector(
  selectUser,
  rommsByIDState => rommsByIDState.roomsInfo[0].id
);

export const roomsDataSelector = createSelector(
  selectUser,
  rommsByIDState => rommsByIDState.roomsByID
);

export const roomsDataLoadingSelector = createSelector(
  selectUser,
  rommsByIDState => rommsByIDState.isLoading
);
