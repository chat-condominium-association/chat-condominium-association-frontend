import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminAuthService } from '@auth/services/admin-auth.service';
import { AppRoutes } from '@core/enums/routes.enum';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  protected adminAuthService = inject(AdminAuthService);

  protected readonly REGISTRATION_PAGE_ROUTE = `/${AppRoutes.REGISTRATION_PAGE_ROUTE}`;
  protected readonly FORGOT_PASSWORD_PAGE_ROUTE = `/${AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE}`;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
}
