import { combineReducers } from '@ngrx/store';
import { userReducer } from './user/user.reducer';

export const entitiesReducer = combineReducers({
  user: userReducer,
});
