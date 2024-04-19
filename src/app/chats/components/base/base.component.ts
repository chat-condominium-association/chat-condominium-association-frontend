import { Component, inject } from '@angular/core';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { Store } from '@ngrx/store';
import { avatars } from '@shared/data/avatars.images';
import { StoreState } from '@store/app.state.interface';
import { UserData } from '@store/entities/user/user.interface';
import { userDataSelector } from '@store/entities/user/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  protected avatars = avatars;

  private store = inject(Store<StoreState>);
  protected userData$: Observable<UserData | null>;

  constructor() {
    this.userData$ = this.store.select(userDataSelector);
  }

  getAvatarSrc(userData: UserData | null): string {
    const id = userData?.image_id || 0;
    return this.avatars[id as keyof typeof avatars];
  }
}
