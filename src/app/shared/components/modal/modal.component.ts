/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icons } from '@shared/enums/icons.enum';
import { ModalData } from '@shared/models/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  public dialogRef = inject(MatDialogRef<ModalComponent>);
  icon = Icons;

  public handleSubmit: () => void;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Partial<ModalData>) {
    this.handleSubmit = data.handleSubmit || this.closeDialog;
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }
}
