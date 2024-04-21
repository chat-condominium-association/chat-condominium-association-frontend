import { UserState } from './entities/user/user.interface';
import { ComponetsState } from './ui/components/components.interface';

export interface AppState {
  appState: StoreState;
}

export interface StoreState {
  entities: EntitiesState;
  ui: UIState;
}

export interface EntitiesState {
  user: UserState;
}

export interface UIState {
  components: ComponetsState;
}
