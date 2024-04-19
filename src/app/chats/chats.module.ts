import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { BaseComponent } from './components/base/base.component';
import { PagesNavComponent } from './components/pages-nav/pages-nav.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MainInfoNavComponent } from './components/main-info-nav/main-info-nav.component';

@NgModule({
  declarations: [
    ChatPageComponent,
    ChatsPageComponent,
    MembersPageComponent,
    ProfilePageComponent,
    CommentsPageComponent,
    BaseComponent,
    PagesNavComponent,
    UserInfoComponent,
    MainInfoNavComponent,
  ],
  imports: [CommonModule, ChatsRoutingModule],
})
export class ChatsModule {}
