import { UserState } from './entities/user/user.interface';

export interface AppState {
  appState: StoreState;
}

export interface StoreState {
  entities: EntitiesState;
  // ui: UIState;
}

export interface EntitiesState {
  user: UserState;
}

export interface UIState {
  pages: string;
  components: string;
}
