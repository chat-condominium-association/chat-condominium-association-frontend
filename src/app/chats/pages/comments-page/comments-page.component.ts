import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { setAsideStateAction } from '@store/ui/components/components.actions';
import { PagesLayoutComponent } from '@chats/components/pages-layout/pages-layout.component';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss'],
  standalone: true,
  imports: [
    PagesLayoutComponent,
  ],
})
export class CommentsPageComponent {
  private store = inject(Store<StoreState>);

  constructor() {
    this.store.dispatch(setAsideStateAction({ state: AsidePanel.Hidden }));
  }
}
