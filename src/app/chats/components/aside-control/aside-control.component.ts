import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  TemplateRef,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@chats/services/user.service';
import { ApiMessages } from '@core/enums/api-messages.enum';
import { ApiHandleService } from '@core/services/api-handle.service';
import { Store, select } from '@ngrx/store';
import { avatars } from '@shared/data/avatars.images';
import { chats } from '@shared/data/chats.imges';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { Icons } from '@shared/enums/icons.enum';
import { StoreState } from '@store/app.state.interface';
import { asideStateSelector } from '@store/ui/components/components.selectors';
import { Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-aside-control',
  templateUrl: './aside-control.component.html',
  styleUrls: ['./aside-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideControlComponent implements OnDestroy {
  private store = inject(Store<StoreState>);
  private dialog = inject(MatDialog);
  protected userServise = inject(UserService);
  private apiHandleService = inject(ApiHandleService);

  protected asideState$: Observable<AsidePanel>;
  protected userAvatarID$: Observable<string> = this.userServise.userAvatarID$;
  private modalDestroyed = new Subject<void>();
  private destroy$ = new Subject<void>();

  protected icons = Icons;
  readonly AsidePanel = AsidePanel;
  readonly ChatsImages = chats;

  protected userError: string | null = null;
  protected editUserNameForm: FormGroup;

  images = Object.entries(avatars).slice(0, -1);

  @HostBinding('class.hidden') isAsideHidden = false;

  constructor() {
    this.asideState$ = this.store.pipe(select(asideStateSelector));
    this.asideState$.pipe(takeUntil(this.destroy$)).subscribe(state => {
      this.isAsideHidden = state === AsidePanel.Hidden;
    });
    this.editUserNameForm = this.userServise.buildEditUsernameForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openEditProfile(template: TemplateRef<unknown>): void {
    const dialogRef = this.dialog.open(template, {
      data: {
        showCloseBtn: true,
        headerMessage: 'Введіть новий Нікнейм',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.modalDestroyed.next();
        this.modalDestroyed.complete();
        this.editUserNameForm.reset();
        this.userError = null;
      });
  }

  handleUsernameEditSubmit(): void {
    const { username } = this.editUserNameForm.value;

    if (username) {
      this.userServise.editUserName(username);

      const userLoading$ = this.userServise.getUsernameLoadingState();
      const userError$ = this.userServise.getUsernameErrorState();

      userLoading$
        .pipe(withLatestFrom(userError$), takeUntil(this.modalDestroyed))
        .subscribe(([isLoading, error]) => {
          if (!isLoading && !error) {
            this.editUserNameForm.reset();
            this.dialog.closeAll();
            this.userError = null;
            this.apiHandleService.handleSuccess(ApiMessages.SuccesSavedtText);
          } else if (!isLoading && error) {
            this.userError = error?.error?.detail || ApiMessages.ErrorDefaultText;
          }
        });
    }
  }
}
