import { createAction, props } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';

export const setAsideStateAction = createAction(
  '[UI Aside] Set Aside State',
  props<{ state: AsidePanel }>()
);
