import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { Icons } from '@shared/enums/icons.enum';

@Component({
  selector: 'app-pages-nav',
  templateUrl: './pages-nav.component.html',
  styleUrls: ['./pages-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesNavComponent {
  protected authService = inject(AuthService);
  protected UserRole = UserRole;
  protected icons = Icons;
}
