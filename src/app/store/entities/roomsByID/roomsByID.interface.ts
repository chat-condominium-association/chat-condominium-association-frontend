import { ApiError } from '@core/models/api.inetrface';

// TODO: change posts and messages interfaces in the future
export interface RommsByIDState {
  isLoading: boolean;
  error: ApiError | null;
  roomsByID: Rooms;
}

export type Rooms = Record<number, RoomByID>;

export interface RoomByID {
  id: number;
  membersQuantity: number;
  posts: string[];
  isLoading: boolean;
  error: ApiError | null;
  messagesByPostID: string[];
  name: string;
}
