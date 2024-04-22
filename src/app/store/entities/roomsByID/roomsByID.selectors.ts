import { StoreState } from '@store/app.state.interface';
import { createSelector } from '@ngrx/store';
import { RommsByIDState, RoomByID, Rooms } from './roomsByID.interface';

const selectRooms = (state: StoreState): RommsByIDState => state.entities.rommsByID;

export const firstRoomIDSelector = createSelector(
  selectRooms,
  rommsByIDState => rommsByIDState.roomsByID[0].id
);

export const roomsDataSelector = createSelector(
  selectRooms,
  rommsByIDState => rommsByIDState.roomsByID
);

export const roomsDataLoadingSelector = createSelector(
  selectRooms,
  rommsByIDState => rommsByIDState.isLoading
);

export const roomByIDSelector = (roomID: number) =>
  createSelector(roomsDataSelector, (rooms: Rooms) => rooms[roomID]);

export const roomLoadingByIDSelector = (roomID: number) =>
  createSelector(roomByIDSelector(roomID), (room: RoomByID) => room.isLoading);

export const roomErrorByIDSelector = (roomID: number) =>
  createSelector(roomByIDSelector(roomID), (room: RoomByID) => room.error);
