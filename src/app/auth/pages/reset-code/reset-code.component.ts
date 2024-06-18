import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';
import { FormControlComponent } from '@shared/components/form-control/form-control.component';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormControlComponent,
    ButtonComponent,
  ],
})
export class ResetCodeComponent {
  private fb = inject(FormBuilder);

  protected readonly RESET_CODE_PAGE_ROUTE = `/${AppRoutes.RESET_CODE_PAGE_ROUTE}`;

  protected resetCodeForm = this.fb.group({
    code: ['', [Validators.required]],
  });

  onSubmit(): void {
    console.log('wow ');
  }
}
