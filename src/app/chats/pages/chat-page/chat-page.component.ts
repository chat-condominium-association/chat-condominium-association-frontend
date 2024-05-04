import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { setAsideStateAction } from '@store/ui/components/components.actions';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
  private store = inject(Store<StoreState>);

  constructor() {
    this.store.dispatch(setAsideStateAction({ state: AsidePanel.Chat }));
  }
}
