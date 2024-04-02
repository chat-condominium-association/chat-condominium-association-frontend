import { Injectable, inject } from '@angular/core';
import { AdminAuthApiService } from './admin-auth-api.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, finalize, take, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { Icons } from '@shared/enums/icons.enum';

interface ApiError {
  error: {
    detail: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private adminAuthApiService = inject(AdminAuthApiService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  public dialogRef = inject(MatDialogRef<ModalComponent>);

  public backendErrors$ = new BehaviorSubject<string[]>([]);
  public isLoading$ = new BehaviorSubject<boolean>(false);

  protected readonly LOGIN_PAGE_ROUTE = `/${AppRoutes.LOGIN_PAGE_ROUTE}`;

  handleLogin(): void {
    console.log('login');
  }

  handleRegister(registerForm: FormGroup): void {
    const formData = registerForm.value;
    const { email, password } = formData;

    this.isLoading$.next(true);

    this.adminAuthApiService
      .signUp({ email, password })
      .pipe(
        take(1),
        catchError(error => this.handleError(error, 'Спробувати ще раз')),
        finalize(() => {
          registerForm.reset();
          this.isLoading$.next(false);
        })
      )
      .subscribe({
        next: () => this.router.navigateByUrl(this.LOGIN_PAGE_ROUTE),
      });
  }

  private handleError(error: ApiError, buttonText: string): Observable<never> {
    const errorMessage = error?.error?.detail || 'Виникла помилка';
    this.backendErrors$.next([errorMessage]);
    this.dialog.open(ModalComponent, {
      data: {
        headerMessage: errorMessage,
        buttonText,
        showSubmitBtn: true,
        icon: Icons.alertExclamationIcon,
      },
    });
    return throwError(() => error);
  }
}
