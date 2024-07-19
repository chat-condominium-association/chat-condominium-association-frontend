import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { Icons } from '@shared/enums/icons.enum';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, SvgIconComponent],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss',
})
export class SnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { message: string; isSuccess: boolean }) {}
  icons = Icons;
}
