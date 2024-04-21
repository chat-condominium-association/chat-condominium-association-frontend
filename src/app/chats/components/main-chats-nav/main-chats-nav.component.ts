import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserData } from '@store/entities/user/user.interface';

@Component({
  selector: 'app-main-chats-nav',
  templateUrl: './main-chats-nav.component.html',
  styleUrls: ['./main-chats-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoNavComponent {}
