import { EditRoom, RoomInfo } from '@chats/model/rooms.interface';
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

export const editRoomAction = createAction(
  '[Rooms] Edit Room',
  props<{ roomID: number; editData: EditRoom }>()
);
export const editRoomActionSuccess = createAction(
  '[Rooms] Edit Room Success',
  props<{ room: RoomInfo }>()
);
export const editRoomActionFailed = createAction(
  '[Rooms] Edit Room Failed',
  props<{ roomID: number; error: ApiError }>()
);
