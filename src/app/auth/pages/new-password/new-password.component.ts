import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormControlComponent, ButtonComponent],
})
export class NewPasswordComponent {
  private fb = inject(FormBuilder);

  protected readonly NEW_PASSWORD_PAGE_ROUTE = `/${AppRoutes.NEW_PASSWORD_PAGE_ROUTE}`;

  newPasswordForm = this.fb.group({
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
        ),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });
}
