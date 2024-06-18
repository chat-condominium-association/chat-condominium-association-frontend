import { Component, inject, TemplateRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RoomsService } from '@chats/services/rooms.service';
import { ApiMessages } from '@core/enums/api-messages.enum';
import { UserRole } from '@core/enums/user.roles.enum';
import { ApiHandleService } from '@core/services/api-handle.service';
import { AuthService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { Icons } from '@shared/enums/icons.enum';
import { Rooms } from '@store/entities/roomsByID/roomsByID.interface';
import { setAsideStateAction } from '@store/ui/components/components.actions';
import { Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';
import { ManagementCardComponent } from '@shared/components/management-card/management-card.component';
import { PagesLayoutComponent } from '@chats/components/pages-layout/pages-layout.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ToArrayPipe } from '@shared/pipes/to-array.pipe';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { ErrorMessageComponent } from '@shared/components/error-message/error-message.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  standalone: true,
  imports: [
    ManagementCardComponent,
    PagesLayoutComponent,
    AsyncPipe,
    ToArrayPipe,
    SvgIconComponent,
    ModalComponent,
    ReactiveFormsModule,
    FormControlComponent,
    ErrorMessageComponent,
    ButtonComponent,
    NgForOf,
    NgIf,
  ],
})
export class ProfilePageComponent {
  private dialog = inject(MatDialog);
  protected authService = inject(AuthService);
  private roomsService = inject(RoomsService);
  private apiHandleService = inject(ApiHandleService);
  private store = inject(Store);

  protected icons = Icons;

  private modalDestroyed = new Subject<void>();
  protected roomsData$: Observable<Rooms> = this.roomsService.roomsData$;
  protected UserRole = UserRole;

  private selectedRoomId: number | null = null;
  protected roomError: string | null = null;

  protected editRoomForm: FormGroup;

  constructor() {
    this.store.dispatch(setAsideStateAction({ state: AsidePanel.Profile }));
    this.editRoomForm = this.roomsService.buildEditRoomForm();
  }

  openEditRoomDialog(template: TemplateRef<unknown>, roomID: number): void {
    this.selectedRoomId = roomID;

    const dialogRef = this.dialog.open(template, {
      data: {
        showCloseBtn: true,
        headerMessage: 'Редагувати назву кімнати',
      },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.modalDestroyed.next();
        this.modalDestroyed.complete();
        this.editRoomForm.reset();
        this.roomError = null;
      });
  }

  handleEditRoomSubmit(): void {
    const { name } = this.editRoomForm.value;
    const roomID = this.selectedRoomId;

    if (name && roomID !== null) {
      this.roomsService.editRoom(roomID, name);

      const roomLoading$ = this.roomsService.getLoadingState(roomID);
      const roomError$ = this.roomsService.getErrorState(roomID);

      roomLoading$
        .pipe(withLatestFrom(roomError$), takeUntil(this.modalDestroyed))
        .subscribe(([isLoading, error]) => {
          if (!isLoading && !error) {
            this.editRoomForm.reset();
            this.dialog.closeAll();
            this.selectedRoomId = null;
            this.roomError = null;
            this.apiHandleService.handleSuccess(ApiMessages.SuccesSavedtText);
          } else if (!isLoading && error) {
            this.roomError = error?.error?.detail || ApiMessages.ErrorDefaultText;
          }
        });
    }
  }
}
