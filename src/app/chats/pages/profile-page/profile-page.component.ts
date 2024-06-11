import { Component, TemplateRef, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
import { Observable, Subject, takeUntil, take, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
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
