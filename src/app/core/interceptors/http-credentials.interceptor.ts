import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, switchMap, throwError } from 'rxjs';
import { UserApiService } from '@core/services/user-api.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpCredentialsInterceptor implements HttpInterceptor {
  private userApiService = inject(UserApiService);
  private router = inject(Router);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({ withCredentials: true });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(modifiedRequest, next);
        } else if (error.status === 0) {
          this.router.navigate(['/']);
          return EMPTY;
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  private handle401Error(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.userApiService.refreshAccessToken().pipe(
      switchMap(response => {
        if (response === null) {
          return next.handle(request);
        } else {
          this.router.navigate(['/']);
          return EMPTY;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error refreshing token:', error);
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}

export const httpCredentialsInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpCredentialsInterceptor, multi: true },
];
