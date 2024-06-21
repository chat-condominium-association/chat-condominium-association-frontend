import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminAuthService } from '@auth/services/admin-auth.service';
import { AppRoutes } from '@core/enums/routes.enum';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormControlComponent, RouterLink, ButtonComponent, AsyncPipe],
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  protected adminAuthService = inject(AdminAuthService);

  protected readonly REGISTRATION_PAGE_ROUTE = `/${AppRoutes.REGISTRATION_PAGE_ROUTE}`;
  protected readonly FORGOT_PASSWORD_PAGE_ROUTE = `/${AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE}`;

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    password: ['', [Validators.required]],
  });
}
