import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  TemplateRef,
  inject,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { avatars } from '@shared/data/avatars.images';
import { chats } from '@shared/data/chats.imges';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { logoutUserAction } from '@store/entities/user/user.actions';
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
  private store = inject(Store<StoreState>);
  protected asideState$: Observable<AsidePanel>;
  private dialog = inject(MatDialog);

  private fb = inject(FormBuilder);

  protected editUserNameForm = this.fb.group({
    username: [''],
  });

  images = Object.entries(avatars).slice(0, -1);

  @HostBinding('class.hidden') isAsideHidden = false;

  constructor() {
    this.asideState$ = this.store.pipe(select(asideStateSelector));
    this.asideState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.isAsideHidden = state === AsidePanel.Hidden;
    });
  }

  logout(): void {
    this.store.dispatch(logoutUserAction());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openEditProfile(template: TemplateRef<unknown>): void {
    this.dialog.open(template, {
      data: {
        showCloseBtn: true,
        headerMessage: 'Введіть новий Нікнейм',
      },
    });

    // dialogRef
    //   .afterClosed()
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.modalDestroyed.next();
    //     this.modalDestroyed.complete();
    //     this.editRoomForm.reset();
    //     this.roomError = null;
    //   });
  }
}
