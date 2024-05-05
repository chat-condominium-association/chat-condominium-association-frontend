import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ImagesService } from '@chats/services/images.service';
import { UserService } from '@chats/services/user.service';
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
  protected imagesService = inject(ImagesService);

  protected userData$: Observable<UserData | null> = this.userServise.userData$;
}
