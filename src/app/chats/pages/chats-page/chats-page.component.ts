import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/routes.enum';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent {
  private router = inject(Router);

  constructor() {
    const firstChatID = 1;
    this.router.navigate([AppRoutes.CHATS_PAGE_ROUTE, firstChatID]);
  }
}
