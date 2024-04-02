import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { UserApiService } from '@core/services/user-api.service';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { environment } from '@environment/environment';

@Injectable()
export class HttpCredentialsInterceptor implements HttpInterceptor {
  private userApiService = inject(UserApiService);
  private router = inject(Router);

  private readonly LOGIN_PAGE_ROUTE = `${AppRoutes.ADMIN_BASE_ROUTE}/${AppRoutes.LOGIN_PAGE_ROUTE}`;
  private readonly ADMIN_API_URL = `${environment.apiUrl}admin/`;
  private readonly ADMIN_LOGIN_ENDPOINT = 'login';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiLoginUrl = `${this.ADMIN_API_URL}${this.ADMIN_LOGIN_ENDPOINT}`;

    request = this.addCredentials(request);

    return next.handle(request).pipe(
      catchError(error => {
        if (
          error instanceof HttpErrorResponse &&
          !request.url.includes(apiLoginUrl) &&
          error.status === 401
        ) {
          return this.handleTokenExpired(request, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addCredentials(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      withCredentials: true,
    });
  }

  private handleTokenExpired(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.userApiService.refreshAccessToken().pipe(
      switchMap(() => {
        return next.handle(this.addCredentials(request));
      }),
      catchError(error => {
        /* handle two options in future
          1. If admin rediect to admin auth
          2. If no admin redirect ... */
        this.router.navigateByUrl(this.LOGIN_PAGE_ROUTE);
        return throwError(() => error);
      })
    );
  }
}

export const httpCredentialsInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpCredentialsInterceptor, multi: true },
];
