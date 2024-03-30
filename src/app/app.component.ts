import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private router = inject(Router);

  protected showBackground = false;
  protected showLogo = false;

  private readonly backgroundOnlyRoutes = [AppRoutes.START_PAGE_ROUTE];
  private readonly backgroundAndLogoRoutes = [
    AppRoutes.LOGIN_PAGE_ROUTE,
    AppRoutes.REGISTRATION_PAGE_ROUTE,
    AppRoutes.FORGOT_PASSWORD_PAGE_ROUTE,
    AppRoutes.NEW_PASSWORD_PAGE_ROUTE,
    AppRoutes.RESET_CODE_PAGE_ROUTE,
    AppRoutes.SUCCESS_NEW_PASSWORD_PAGE_ROUTE,
  ];

  ngOnInit(): void {
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const route = (event as NavigationEnd).url.slice(1) as AppRoutes;
      this.updateLayout(route);
    });
  }

  private updateLayout(route: AppRoutes): void {
    this.showBackground = this.shouldShowBackground(route);
    this.showLogo = this.shouldShowLogo(route);
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
