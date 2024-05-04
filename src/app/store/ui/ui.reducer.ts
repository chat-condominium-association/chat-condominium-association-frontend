import { combineReducers } from '@ngrx/store';
import { componentsReducer } from './components/components.reducer';
import { UIState } from '@store/app.state.interface';

export const uiReducer = combineReducers<UIState>({
  components: componentsReducer,
});
