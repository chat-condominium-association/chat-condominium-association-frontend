import { RoomInfo } from '@chats/model/rooms.interface';
import { ApiError } from '@core/models/api.inetrface';

//change posts and messages inetrfaces in he furute
export interface RommsByIDState {
  isLoading: boolean;
  error: ApiError | null;
  roomsByID: Rooms;
  roomsInfo: RoomInfo[];
}

export type Rooms = Record<number, RoomsByID>;

export interface RoomsByID {
  posts: string[];
  isLoading: boolean;
  error: ApiError | null;
  messagesByPostID: string[];
  name: string;
}
