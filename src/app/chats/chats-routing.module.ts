import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { AppRoutes } from '@core/enums/routes.enum';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: AppRoutes.PROFILE_PAGE_ROUTE,
        component: ProfilePageComponent,
      },
      {
        path: AppRoutes.CHATS_PAGE_ROUTE,
        component: ChatsPageComponent,
      },
      {
        //canLoad: userRole == admin
        path: AppRoutes.MEMBERS_PAGE_ROUTE,
        component: MembersPageComponent,
      },
      {
        path: AppRoutes.CHAT_PAGE_ROUTE,
        component: ChatPageComponent,
      },
      {
        path: AppRoutes.COMMENTS_PAGE_ROUTE,
        component: CommentsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
