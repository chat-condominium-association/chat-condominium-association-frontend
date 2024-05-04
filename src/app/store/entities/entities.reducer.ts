import { combineReducers } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { rommsByIDReducer } from './roomsByID/roomsByID.reducers';

export const entitiesReducer = combineReducers({
  user: userReducer,
  rommsByID: rommsByIDReducer,
});
