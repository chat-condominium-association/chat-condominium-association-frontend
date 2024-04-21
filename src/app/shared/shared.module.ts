import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';

@NgModule({
  declarations: [ButtonComponent, FormControlComponent, ModalComponent, ManagementCardComponent],
  exports: [ButtonComponent, FormControlComponent, ModalComponent, ManagementCardComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
