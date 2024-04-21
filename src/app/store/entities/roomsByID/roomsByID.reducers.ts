import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { RoomsByID, RommsByIDState } from './roomsByID.interface';
import {
  loadRoomsInfoAction,
  loadRoomsInfoActionFailed,
  loadRoomsInfoActionSuccess,
} from './roomsByID.actions';

const initialState: RommsByIDState = {
  isLoading: false,
  error: null,
  roomsByID: {},
  roomsInfo: [],
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
  on(loadRoomsInfoActionSuccess, (state, action): RommsByIDState => {
    const { rooms } = action;
    const transformedRooms: Record<string, RoomsByID> = {};

    rooms.forEach(room => {
      transformedRooms[room.id] = {
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
      roomsInfo: rooms,
      roomsByID: transformedRooms,
    };
  }),
  on(loadRoomsInfoActionFailed, (state, action): RommsByIDState => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  })
);

export const rommsByIDReducer: ActionReducer<RommsByIDState, Action> = (state, action) =>
  reducer(state, action);
