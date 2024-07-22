import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiError } from '@core/models/api.inetrface';
import { Store } from '@ngrx/store';
import {
  changeAvatarUserAction,
  changeUserNameAction,
  logoutUserAction,
} from '@store/entities/user/user.actions';
import {
  selectUserData,
  selectUserAvatarID,
  selectIsUserEditLoaded,
  selectIsUserLoading,
  selectUserNameError,
  selectUserError,
} from '@store/entities/user/user.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private store = inject(Store);
  private fb = inject(FormBuilder);

  userAvatarID$ = this.store.select(selectUserAvatarID);
  isEditUserLoaded$ = this.store.select(selectIsUserEditLoaded);

  userData$ = this.store.select(selectUserData);

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

  getUsernameLoadingState(): Observable<boolean> {
    return this.store.select(selectIsUserLoading);
  }

  getUsernameErrorState(): Observable<ApiError | null> {
    return this.store.select(selectUserNameError);
  }

  getErrorState(): Observable<ApiError | null> {
    return this.store.select(selectUserError);
  }
}
