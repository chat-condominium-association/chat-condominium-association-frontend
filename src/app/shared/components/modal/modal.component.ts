/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icons } from '@shared/enums/icons.enum';

interface ModalData {
  showCloseBtn: boolean;
  showSubmitBtn: boolean;
  headerMessage: string;
  buttonText: string;
  handleSubmit: () => void;
  icon: Icons;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public dialogRef = inject(MatDialogRef<ModalComponent>);
  public handleSubmit: () => void;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partial<ModalData>) {
    this.handleSubmit = data.handleSubmit || this.closeDialog;
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
