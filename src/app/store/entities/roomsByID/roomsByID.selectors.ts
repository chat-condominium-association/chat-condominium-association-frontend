import { StoreState } from '@store/app.state.interface';
import { createSelector } from '@ngrx/store';
import { RommsByIDState, RoomByID, Rooms } from './roomsByID.interface';

const selectRooms = (state: StoreState): RommsByIDState => state.entities.rommsByID;

export const selectFirstRoomID = createSelector(selectRooms, (rooms: RommsByIDState) => {
  return Object.values(rooms.roomsByID)[0].id;
});

export const selectRoomsData = createSelector(
  selectRooms,
  rommsByIDState => rommsByIDState.roomsByID
);

export const selectRoomsDataLoading = createSelector(
  selectRooms,
  rommsByIDState => rommsByIDState.isLoading
);

export const selectRoomByID = (roomID: number) =>
  createSelector(selectRoomsData, (rooms: Rooms) => rooms[roomID]);

export const selectRoomLoadingByID = (roomID: number) =>
  createSelector(selectRoomByID(roomID), (room: RoomByID) => room.isLoading);

export const selectRoomErrorByID = (roomID: number) =>
  createSelector(selectRoomByID(roomID), (room: RoomByID) => room.error);
