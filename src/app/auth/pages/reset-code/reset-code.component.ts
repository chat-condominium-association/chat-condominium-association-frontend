import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.scss'],
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
