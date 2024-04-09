import { ActionReducerMap } from '@ngrx/store';
import { entitiesReducer } from './entities/entities.reducer';
import { StoreState } from './app.state.interface';

export const reducers: ActionReducerMap<StoreState> = {
  entities: entitiesReducer,
};
