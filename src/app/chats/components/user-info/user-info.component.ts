import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { UserService } from '@chats/services/user.service';
import { avatars } from '@shared/data/avatars.images';
import { UserData } from '@store/entities/user/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  @Input() fontsize = '18px';
  private userServise = inject(UserService);
  protected userAvatars = avatars;

  protected userData$: Observable<UserData | null> = this.userServise.userData$;
}
