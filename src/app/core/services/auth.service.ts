import { Injectable, inject } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Observable, filter, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserRole } from '@core/enums/user.roles.enum';
import { userLoggedInSelector, userRoleSelector } from '@store/entities/user/user.selectors';
import { StoreState } from '@store/app.state.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentRole$: Observable<UserRole>;
  private isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<StoreState>) {
    this.currentRole$ = this.store.pipe(select(userRoleSelector));
    this.isLoggedIn$ = this.store.pipe(select(userLoggedInSelector));
  }

  getCurrentRole(): Observable<UserRole> {
    return this.currentRole$;
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$;
  }
}
