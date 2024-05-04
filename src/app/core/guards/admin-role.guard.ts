import { inject } from '@angular/core';
import { CanActivateFn, CanLoadFn, Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { map } from 'rxjs';

export const adminRoleGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.getCurrentRole().pipe(
    map(role => {
      if (role === UserRole.Admin) {
        return true;
      }
      router.navigate([AppRoutes.PROFILE_PAGE_ROUTE]);
      return false;
    })
  );
};
