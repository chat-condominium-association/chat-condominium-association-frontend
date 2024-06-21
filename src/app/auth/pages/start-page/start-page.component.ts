import { Component } from '@angular/core';
import { AppRoutes } from '@core/enums/routes.enum';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class StartPageComponent {
  protected readonly REGISTRATION_PAGE_ROUTE = AppRoutes.REGISTRATION_PAGE_ROUTE;
  protected readonly LOGIN_PAGE_ROUTE = AppRoutes.LOGIN_PAGE_ROUTE;
}
