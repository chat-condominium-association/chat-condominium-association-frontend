import { ActionReducerMap } from '@ngrx/store';
import { entitiesReducer } from './entities/entities.reducer';
import { StoreState } from './app.state.interface';
import { uiReducer } from './ui/ui.reducer';

export const reducers: ActionReducerMap<StoreState> = {
  entities: entitiesReducer,
  ui: uiReducer,
};
