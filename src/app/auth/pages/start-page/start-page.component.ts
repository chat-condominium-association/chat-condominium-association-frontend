import { Component } from '@angular/core';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  protected readonly REGISTRATION_PAGE_ROUTE = AppRoutes.REGISTRATION_PAGE_ROUTE;
  protected readonly LOGIN_PAGE_ROUTE = AppRoutes.LOGIN_PAGE_ROUTE;
}
