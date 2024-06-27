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
import { MainInfoNavComponent } from './components/main-chats-nav/main-chats-nav.component';
import { AsideControlComponent } from './components/aside-control/aside-control.component';
import { SharedModule } from '@shared/shared.module';
import { PagesLayoutComponent } from './components/pages-layout/pages-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from '@shared/components/progress-bar/progress-bar.component';
import { SvgIconComponent } from '@shared/components/svg-icon/svg-icon.component';

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
    AsideControlComponent,
    PagesLayoutComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ProgressBarComponent,
    SvgIconComponent,
  ],
})
export class ChatsModule {}
