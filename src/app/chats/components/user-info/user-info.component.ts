import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ImagesService } from '@chats/services/images.service';
import { Store } from '@ngrx/store';
import { StoreState } from '@store/app.state.interface';
import { UserData } from '@store/entities/user/user.interface';
import { userDataSelector } from '@store/entities/user/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  @Input() fontsize = '18px';
  private store = inject(Store<StoreState>);
  protected imagesService = inject(ImagesService);

  protected userData$: Observable<UserData | null>;

  constructor() {
    this.userData$ = this.store.select(userDataSelector);
  }
}
