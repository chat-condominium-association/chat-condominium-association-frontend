import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserRole } from '@core/enums/user.roles.enum';
import { selectUserLoggedIn, selectUserRole } from '@store/entities/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentRole$: Observable<UserRole>;
  private isLoggedIn$: Observable<boolean>;
  private store = inject(Store);
  constructor() {
    this.currentRole$ = this.store.select(selectUserRole);
    this.isLoggedIn$ = this.store.select(selectUserLoggedIn);
  }

  getCurrentRole(): Observable<UserRole> {
    return this.currentRole$;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }
}
