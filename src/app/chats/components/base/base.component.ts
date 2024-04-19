import { Component, inject } from '@angular/core';
import { UserRole } from '@core/enums/user.roles.enum';
import { AuthService } from '@core/services/auth.service';
import { Store, select } from '@ngrx/store';
import { avatars } from '@shared/data/avatars.images';
import { chats } from '@shared/data/chats.imges';
import { AsidePanel } from '@shared/enums/aside-panel-states.enum';
import { StoreState } from '@store/app.state.interface';
import { UserData } from '@store/entities/user/user.interface';
import { userDataSelector } from '@store/entities/user/user.selectors';
import { asideStateSelector } from '@store/ui/components/components.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  protected avatars = avatars;
  protected chatsImages = chats;
  protected AsidePanel = AsidePanel;

  private store = inject(Store<StoreState>);
  protected userData$: Observable<UserData | null>;
  protected asideState$: Observable<AsidePanel>;

  constructor() {
    this.asideState$ = this.store.pipe(select(asideStateSelector));
    this.userData$ = this.store.select(userDataSelector);
  }

  getAvatarSrc(userData: UserData | null): string {
    const id = userData?.image_id || 0;
    return this.avatars[id as keyof typeof avatars];
  }
}
