import { inject } from '@angular/core';
import { CanActivateFn, ROUTES, Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';
import { AuthService } from '@core/services/auth.service';
import { map, tap } from 'rxjs';

export const authmoduleGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn().pipe(
    map(loggedIn => {
      if (!loggedIn) {
        return true;
      }

      router.navigate([AppRoutes.PROFILE_PAGE_ROUTE]);
      return false;
    })
  );
};
