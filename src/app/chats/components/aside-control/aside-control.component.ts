import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { chats } from '@shared/data/chats.imges';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { asideStateSelector } from '@store/ui/components/components.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside-control',
  templateUrl: './aside-control.component.html',
  styleUrls: ['./aside-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideControlComponent {
  readonly AsidePanel = AsidePanel;
  readonly ChatsImages = chats;

  private store = inject(Store<StoreState>);
  protected asideState$: Observable<AsidePanel>;
  constructor() {
    this.asideState$ = this.store.pipe(select(asideStateSelector));
  }
}
