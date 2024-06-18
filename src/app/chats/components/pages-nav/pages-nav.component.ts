import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { Icons } from '@shared/enums/icons.enum';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pages-nav',
  templateUrl: './pages-nav.component.html',
  styleUrls: ['./pages-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SvgIconComponent,
    AsyncPipe,
    NgIf,
    RouterLink,
    RouterLinkActive,
  ],
})
export class PagesNavComponent {
  protected authService = inject(AuthService);
  protected UserRole = UserRole;
  protected icons = Icons;
}
