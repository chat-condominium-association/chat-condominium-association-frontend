import { AsidePanel } from '@shared/enums/aside-panel-states.enum';

export interface ComponetsState {
  asidePanel: AsidePanelInterface;
}

export interface AsidePanelInterface {
  state: AsidePanel;
}
