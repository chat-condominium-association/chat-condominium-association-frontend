import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpCredentialsInterceptorProviders } from './interceptors/http-credentials.interceptor';

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
  providers: [httpCredentialsInterceptorProviders],
})
export class CoreModule {}
