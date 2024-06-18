import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminAuthService } from '@auth/services/admin-auth.service';
import { AppRoutes } from '@core/enums/routes.enum';
import { matchValidator } from '@shared/validators/match.validator';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [
    FormControlComponent,
    ReactiveFormsModule,
    AsyncPipe,
    ButtonComponent,
    RouterLink,
  ],
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  protected adminAuthService = inject(AdminAuthService);

  protected readonly LOGIN_PAGE_ROUTE = `/${AppRoutes.LOGIN_PAGE_ROUTE}`;

  registerForm = this.fb.group(
    {
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
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
    },
    {
      validators: matchValidator('password', 'confirmPassword'),
    }
  );
}
