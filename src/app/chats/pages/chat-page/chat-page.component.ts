import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { setAsideStateAction } from '@store/ui/components/components.actions';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    // this.store.dispatch(setAsideStateAction({ state: AsidePanel.Chat }));
  }
}
