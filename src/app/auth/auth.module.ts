import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    StartPageComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, RouterModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
