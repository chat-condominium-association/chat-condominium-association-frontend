export interface RoomInfo {
  id: number;
  name: string;
  membersQuantity: number;
}

export type EditRoom = Pick<RoomInfo, 'name'>;
