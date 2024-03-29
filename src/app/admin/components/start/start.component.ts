import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { filter } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  private router = inject(Router);

  protected showAdminControl = false;

  private readonly asideAdminControlRoutes = [
    `${AppRoutes.ADMIN_BASE_ROUTE}/${AppRoutes.ADMIN_ROOMS_ROUTE}`,
  ];

  constructor() {
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      const route = (event as NavigationEnd).url.slice(1) as AppRoutes;
      this.updateLayout(route);
    });
  }

  private updateLayout(route: string): void {
    this.showAdminControl = this.isAsideAdminControlRoute(route);
  }

  private isAsideAdminControlRoute(route: string): boolean {
    return this.asideAdminControlRoutes.includes(route);
  }
}
