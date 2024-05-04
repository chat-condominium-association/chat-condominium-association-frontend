import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ManagementCardComponent } from './components/management-card/management-card.component';
import { ToArrayPipe } from './pipes/to-array.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    FormControlComponent,
    ModalComponent,
    ManagementCardComponent,
    ToArrayPipe,
    ErrorMessageComponent,
    CarouselComponent,
    SvgIconComponent,
  ],
  exports: [
    ButtonComponent,
    FormControlComponent,
    ModalComponent,
    ManagementCardComponent,
    ToArrayPipe,
    ErrorMessageComponent,
    CarouselComponent,
    SvgIconComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
