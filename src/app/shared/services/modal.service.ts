import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { ModalData } from '@shared/models/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private dialog = inject(MatDialog);

  openModal(data: Partial<ModalData>): void {
    // const { headerMessage, buttonText, handleSubmit, icon, showSubmitBtn } = data;
    this.dialog.open(ModalComponent, {
      data,
    });
  }
}
