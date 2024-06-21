/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icons } from '@shared/enums/icons.enum';
import { ModalData } from '@shared/models/modal.interface';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent, NgIf],
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
