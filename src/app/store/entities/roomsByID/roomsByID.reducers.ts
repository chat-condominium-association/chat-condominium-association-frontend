import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { RoomByID, RommsByIDState } from './roomsByID.interface';
import {
  editRoomAction,
  editRoomActionFailed,
  editRoomActionSuccess,
  loadRoomsInfoAction,
  loadRoomsInfoActionFailed,
  loadRoomsInfoActionSuccess,
} from './roomsByID.actions';

const initialState: RommsByIDState = {
  isLoading: false,
  error: null,
  roomsByID: {},
};

const reducer = createReducer(
  initialState,
  on(
    loadRoomsInfoAction,
    (state): RommsByIDState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(editRoomAction, (state, action): RommsByIDState => {
    const { roomID } = action;
    const updatedRoomsByID = {
      ...state.roomsByID,
      [roomID]: {
        ...state.roomsByID[roomID],
        isLoading: true,
        error: null,
      },
    };
    return {
      ...state,
      roomsByID: updatedRoomsByID,
    };
  }),
  on(loadRoomsInfoActionSuccess, (state, action): RommsByIDState => {
    const { rooms } = action;
    const transformedRooms: Record<string, RoomByID> = {};

    rooms.forEach(room => {
      transformedRooms[room.id] = {
        id: room.id,
        membersQuantity: 0,
        name: room.name,
        posts: [],
        messagesByPostID: [],
        isLoading: false,
        error: null,
      };
    });

    return {
      ...state,
      isLoading: false,
      error: null,
      roomsByID: transformedRooms,
    };
  }),
  on(editRoomActionSuccess, (state, action): RommsByIDState => {
    const { room } = action;
    const updatedRoomsByID = {
      ...state.roomsByID,
      [room.id]: {
        ...state.roomsByID[room.id],
        name: room.name,
        isLoading: false,
        error: null,
      },
    };

    return {
      ...state,
      roomsByID: updatedRoomsByID,
    };
  }),
  on(editRoomActionFailed, (state, action): RommsByIDState => {
    const { roomID } = action;
    const updatedRoomsByID = {
      ...state.roomsByID,
      [roomID]: {
        ...state.roomsByID[roomID],
        isLoading: false,
        error: action.error,
      },
    };
    return {
      ...state,
      roomsByID: updatedRoomsByID,
    };
  }),
  on(loadRoomsInfoActionFailed, editRoomActionFailed, (state, action): RommsByIDState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);

export const rommsByIDReducer: ActionReducer<RommsByIDState, Action> = (state, action) =>
  reducer(state, action);
