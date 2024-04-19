import { StoreState } from '@store/app.state.interface';
import { ComponetsState } from './components.interface';
import { createSelector } from '@ngrx/store';

const selectComponents = (state: StoreState): ComponetsState => state.ui.components;

export const asideStateSelector = createSelector(
  selectComponents,
  ComponetsState => ComponetsState.asidePanel.state
);
