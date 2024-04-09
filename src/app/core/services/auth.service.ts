import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  // private currentRole$: Observable<UserRoles>;
  // private isLoggedIn$: Observable<boolean>;
}
