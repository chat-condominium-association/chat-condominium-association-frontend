import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { map, tap } from 'rxjs';

export const loggedInGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn().pipe(
    map(loggedIn => {
      if (loggedIn) {
        return true;
      }

      router.navigate(['/']);
      return false;
    })
  );
};
