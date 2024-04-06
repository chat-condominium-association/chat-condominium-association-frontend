import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FormControlComponent,
    ModalComponent,
    MainLayoutComponent,
    AsideComponent,
  ],
  exports: [
    ButtonComponent,
    FormControlComponent,
    ModalComponent,
    MainLayoutComponent,
    AsideComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
