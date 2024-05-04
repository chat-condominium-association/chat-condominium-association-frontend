import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AppRoutes } from '@core/enums/routes.enum';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetCodeComponent } from './pages/reset-code/reset-code.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SuccesNewPasswordComponent } from './pages/succes-new-password/succes-new-password.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: AppRoutes.REGISTRATION_PAGE_ROUTE, component: RegisterPageComponent },
  { path: AppRoutes.LOGIN_PAGE_ROUTE, component: LoginPageComponent },
  { path: AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE, component: ForgotPasswordComponent },
  { path: AppRoutes.RESET_CODE_PAGE_ROUTE, component: ResetCodeComponent },
  { path: AppRoutes.NEW_PASSWORD_PAGE_ROUTE, component: NewPasswordComponent },
  { path: AppRoutes.SUCCESS_NEW_PASSWORD_PAGE_ROUTE, component: SuccesNewPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
