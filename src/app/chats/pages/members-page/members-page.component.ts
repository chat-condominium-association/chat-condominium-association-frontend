import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { setAsideStateAction } from '@store/ui/components/components.actions';
import { PagesLayoutComponent } from '@chats/components/pages-layout/pages-layout.component';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss'],
  standalone: true,
  imports: [
    PagesLayoutComponent,
  ],
})
export class MembersPageComponent {
  private store = inject(Store);
  constructor() {
    this.store.dispatch(setAsideStateAction({ state: AsidePanel.Profile }));
  }
}
