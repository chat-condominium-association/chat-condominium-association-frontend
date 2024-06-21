import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ComponetsState } from './components.interface';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { setAsideStateAction } from './components.actions';

const initialState: ComponetsState = {
  asidePanel: {
    state: AsidePanel.Profile,
  },
};

const reducer = createReducer(
  initialState,
  on(
    setAsideStateAction,
    (state, action): ComponetsState => ({
      ...state,
      asidePanel: {
        state: action.state,
      },
    })
  )
);

export const componentsReducer: ActionReducer<ComponetsState> = (state, action) =>
  reducer(state, action);
