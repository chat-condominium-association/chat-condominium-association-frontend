import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AppRoutingModule, CoreModule],
  bootstrap: [AppComponent],
  providers: [{ provide: MatDialogRef, useValue: {} }],
})
export class AppModule {}
