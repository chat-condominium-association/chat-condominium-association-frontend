import { Injectable, inject } from '@angular/core';
import { AdminAuthApiService } from './admin-auth-api.service';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, finalize, take } from 'rxjs';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { MatDialog } from '@angular/material/dialog';
import { Icons } from '@shared/enums/icons.enum';
import { ModalService } from '@shared/services/modal.service';
import { ApiError } from '@core/models/api.inetrface';
import { Store } from '@ngrx/store';
import { loadUserAction } from '@store/entities/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private adminAuthApiService = inject(AdminAuthApiService);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  private store = inject(Store);
  private modalService = inject(ModalService);

  public backendErrors$ = new BehaviorSubject<string[]>([]);
  public isLoading$ = new BehaviorSubject<boolean>(false);

  protected readonly LOGIN_PAGE_ROUTE = `/${AppRoutes.LOGIN_PAGE_ROUTE}`;
  protected readonly PROFILE_PAGE_ROUTE = `/${AppRoutes.PROFILE_PAGE_ROUTE}`;

  handleLogin(loginForm: FormGroup): void {
    const formData = loginForm.value;
    const { email, password } = formData;

    this.isLoading$.next(true);

    this.adminAuthApiService
      .signIn({ email, password })
      .pipe(
        take(1),
        finalize(() => {
          loginForm.reset();
          this.isLoading$.next(false);
        })
      )
      .subscribe({
        next: () => {
          this.modalService.openModal({
            headerMessage: 'Вхід успішний',
            buttonText: 'Почати роботу з Чатом',
            showSubmitBtn: true,
            handleSubmit: () => {
              this.router.navigateByUrl(this.PROFILE_PAGE_ROUTE);
              this.dialog.closeAll();
            },
            icon: Icons.Success,
          });
          this.store.dispatch(loadUserAction());
        },
        error: error => this.handleError(error, 'Спробувати ще раз'),
      });
  }

  handleRegister(registerForm: FormGroup): void {
    const formData = registerForm.value;
    const { email, password } = formData;

    this.isLoading$.next(true);

    this.adminAuthApiService
      .signUp({ email, password })
      .pipe(
        take(1),
        finalize(() => {
          registerForm.reset();
          this.isLoading$.next(false);
        })
      )
      .subscribe({
        next: () => this.router.navigateByUrl(this.LOGIN_PAGE_ROUTE),
        error: error => this.handleError(error, 'Спробувати ще раз'),
      });
  }

  handleError(error: ApiError, buttonText: string): void {
    const errorMessage = error?.error?.detail || 'Виникла помилка';
    this.backendErrors$.next([errorMessage]);

    this.modalService.openModal({
      headerMessage: errorMessage,
      buttonText,
      showSubmitBtn: true,
      icon: Icons.AlertExclamation,
    });
  }
}
