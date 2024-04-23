import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { chats } from '@shared/data/chats.imges';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { asideStateSelector } from '@store/ui/components/components.selectors';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-aside-control',
  templateUrl: './aside-control.component.html',
  styleUrls: ['./aside-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideControlComponent implements OnDestroy {
  readonly AsidePanel = AsidePanel;
  readonly ChatsImages = chats;
  private destroy$ = new Subject<void>();

  @HostBinding('class.hidden') isAsideHidden = false;

  private store = inject(Store<StoreState>);
  protected asideState$: Observable<AsidePanel>;
  constructor() {
    this.asideState$ = this.store.pipe(select(asideStateSelector));
    this.asideState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.isAsideHidden = state === AsidePanel.Hidden;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
