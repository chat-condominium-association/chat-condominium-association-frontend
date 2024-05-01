import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private router = inject(Router);
  private readonly backgroundOnlyRoutes = [AppRoutes.START_PAGE_ROUTE];
  private readonly backgroundAndLogoRoutes = [
    AppRoutes.LOGIN_PAGE_ROUTE,
    AppRoutes.REGISTRATION_PAGE_ROUTE,
    AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE,
    AppRoutes.NEW_PASSWORD_PAGE_ROUTE,
    AppRoutes.RESET_CODE_PAGE_ROUTE,
    AppRoutes.SUCCESS_NEW_PASSWORD_PAGE_ROUTE,
  ];

  public showBackground$ = new BehaviorSubject(false);
  public showLogo$ = new BehaviorSubject(false);

  public init(): void {
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe({
        next: (event: NavigationEnd) => {
          const route = event.url.slice(1) as AppRoutes;
          this.updateLayout(route);
        },
      });
  }

  private updateLayout(route: AppRoutes): void {
    this.showBackground$.next(this.shouldShowBackground(route));
    this.showLogo$.next(this.shouldShowLogo(route));
  }

  private shouldShowBackground(route: AppRoutes): boolean {
    return (
      this.backgroundOnlyRoutes.includes(route) || this.backgroundAndLogoRoutes.includes(route)
    );
  }

  private shouldShowLogo(route: AppRoutes): boolean {
    return !this.backgroundOnlyRoutes.includes(route);
  }
}
