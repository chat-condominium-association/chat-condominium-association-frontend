import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, CoreModule, StoreModule.forRoot({}, {})],
  bootstrap: [AppComponent],
  providers: [{ provide: MatDialogRef, useValue: {} }],
})
export class AppModule {}
