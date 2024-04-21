import { RoomInfo } from '@chats/model/rooms.interface';
import { ApiError } from '@core/models/api.inetrface';
import { createAction, props } from '@ngrx/store';

export const loadRoomsInfoAction = createAction('[Rooms] Load Rooms Info');
export const loadRoomsInfoActionSuccess = createAction(
  '[Rooms] Load Rooms Info Success',
  props<{ rooms: RoomInfo[] }>()
);
export const loadRoomsInfoActionFailed = createAction(
  '[Rooms] Load Rooms Info Failed',
  props<{ error: ApiError }>()
);
