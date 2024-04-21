import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, switchMap, tap, throwError } from 'rxjs';
import { UserApiService } from '@chats/services/user-api.service';
import { Router } from '@angular/router';
import { ApiError } from '@core/models/api.inetrface';

@Injectable()
export class HttpCredentialsInterceptor implements HttpInterceptor {
  private userApiService = inject(UserApiService);
  private router = inject(Router);
  private refreshingToken = false;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({ withCredentials: true });

    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(modifiedRequest, next);
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
    if (!this.refreshingToken) {
      this.refreshingToken = true;
      return this.userApiService.refreshAccessToken().pipe(
        switchMap(response => {
          if (response === null) {
            return next.handle(request);
          } else {
            return EMPTY;
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['/']);
          return throwError(() => error);
        }),
        tap(() => {
          this.refreshingToken = false;
        })
      );
    } else {
      this.router.navigate(['/']);
      return throwError(() => new Error('Error refreshing token'));
    }
  }
}

export const httpCredentialsInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpCredentialsInterceptor, multi: true },
];
