import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormControlComponent, ButtonComponent],
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);

  protected readonly FORGOT_PASSWORD_PAGE_ROUTE = `/${AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE}`;

  protected forgotPasswordForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
  });
}
