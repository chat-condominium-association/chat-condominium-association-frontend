import { Component, Input, inject } from '@angular/core';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-pages-nav',
  templateUrl: './pages-nav.component.html',
  styleUrls: ['./pages-nav.component.scss'],
})
export class PagesNavComponent {
  protected authService = inject(AuthService);
  protected UserRole = UserRole;
}
