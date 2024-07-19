import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiError } from '@core/models/api.inetrface';
import { Store, select } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import {
  changeAvatarUserAction,
  changeUserNameAction,
  logoutUserAction,
} from '@store/entities/user/user.actions';
import {
  isUserEditLoadedSelector,
  isUserLoadingSelector,
  userAvatarIDSelector,
  userDataSelector,
  userErrorSelector,
  userNameErrorSelector,
} from '@store/entities/user/user.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private store = inject(Store<StoreState>);
  private fb = inject(FormBuilder);

  userAvatarID$ = this.store.pipe(select(userAvatarIDSelector));
  isEditUserLoaded$ = this.store.pipe(select(isUserEditLoadedSelector));

  userData$ = this.store.select(userDataSelector);

  buildEditUsernameForm(): FormGroup {
    return this.fb.group({
      username: [''],
    });
  }

  handleImageClick(avatarID: string): void {
    this.store.dispatch(changeAvatarUserAction({ avatarID }));
  }

  logout(): void {
    this.store.dispatch(logoutUserAction());
  }

  editUserName(username: string): void {
    this.store.dispatch(changeUserNameAction({ username }));
  }

  getEditUserLoadingState(): Observable<boolean> {
    return this.store.pipe(select(isUserLoadingSelector));
  }

  getUsernameLoadingState(): Observable<boolean> {
    return this.store.pipe(select(isUserLoadingSelector));
  }

  getUsernameErrorState(): Observable<ApiError | null> {
    return this.store.pipe(select(userNameErrorSelector));
  }

  getErrorState(): Observable<ApiError | null> {
    return this.store.pipe(select(userErrorSelector));
  }
}
