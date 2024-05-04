import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);

  protected readonly FORGOT_PASSWORD_PAGE_ROUTE = `/${AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE}`;

  protected forgotPasswordForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });
}
