import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
})
export class CoreModule {}
